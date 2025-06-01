import { Octokit } from "@octokit/rest"
import { createClient } from "webdav/web"
import { encode, decode } from 'js-base64'

import { emitter } from './EventBus'

function humanFileSize(bytes, si=true, dp=1) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }

    const units = si 
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10**dp;

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


    return bytes.toFixed(dp) + ' ' + units[u];
}

export class FileSystemDriver {
    static oDatabase = {
        "groups_last_id": 0,
        "groups": [],
        "categories_last_id": 0,
        "categories": [],
        "articles_last_id": 0,
        "articles": [],
        "favorites_last_id": 0,
        "favorites": [],
        "tags_last_id": 0,
        "tags": [],
        "tags_relations_last_id": 0,
        "tags_relations": [],
        "links_last_id": 0,
        "links": [],
    }

    /** @var Octokit octokit */
    static octokit = null
    static SHA = ""

    /** @var WebDAVClient webdav */
    static webdav = null

    static oRepoItem = null

    // NOTE: Константы
    static DATABASE_PATH = "notes-database.json"
    static DATABASE_UPDATE_TIMEOUT = 30000

    // ===============================================================

    static fnInit(oRepoItem)
    {
        FileSystemDriver.oRepoItem = oRepoItem

        if (oRepoItem.type == "github") {
            FileSystemDriver.fnInitGit()
        }
        if (oRepoItem.type == "webdav") {
            FileSystemDriver.fnInitWebdav()
        }
    }

    static fnInitGit()
    {
        FileSystemDriver.octokit = new Octokit({
            auth: FileSystemDriver.oRepoItem.key,
        });
    }

    static fnInitWebdav()
    {
        FileSystemDriver.webdav = createClient(
            FileSystemDriver.oRepoItem.url,
            {
                username: FileSystemDriver.oRepoItem.username,
                password: FileSystemDriver.oRepoItem.password
            }
        );
    }

    // ===============================================================

    static fnFirstLoadDatabase()
    {
        _s('Database.fnFirstLoadDatabase')

        // return Database
        //     // Нужно получить SHA и данные
        //     .fnGetNotesDatabase()
        //     .then(() => {
        //         _s('Database.fnFirstLoadDatabase.then')
        //         emitter.emit('database-first-loaded')
        //     })
        //     .catch((...aAnsw) => {
        //         _s('Database.fnFirstLoadDatabase.catch')
        //         _l('Database.fnFirstLoadDatabase.catch', aAnsw)
        //         emitter.emit('database-first-error', aAnsw)
        //     })        
    }

    // ===============================================================

    static fnList(sPath)
    {
        if (FileSystemDriver.oRepoItem.type == "github") {
            return FileSystemDriver.fnListGithub(sPath)
        }
        if (FileSystemDriver.oRepoItem.type == "webdav") {
            return FileSystemDriver.fnListWebdav(sPath)
        }
    }

    static fnReadFile(sFileName)
    {
        if (FileSystemDriver.oRepoItem.type == "github") {
            return FileSystemDriver.fnReadFileGithub(sFileName)
        }
        if (FileSystemDriver.oRepoItem.type == "webdav") {
            return FileSystemDriver.fnReadFileWebdav(sFileName)
        }
    }

    static fnWriteFile(sFileName, sContent)
    {
        if (FileSystemDriver.oRepoItem.type == "github") {
            return FileSystemDriver.fnWriteDatabaseGithub()
        }
        if (FileSystemDriver.oRepoItem.type == "webdav") {
            return FileSystemDriver.fnWriteDatabaseWebdav()
        }
    }

    // ===============================================================

    static fnGetSHADatabase()
    {
        return new Promise((fnResolv, fnReject) => {
            if (!Database.SHA) {
                Database.octokit.rest.repos.getContent({
                    owner: Database.sLogin,
                    repo: Database.sRepo,
                    path: Database.DATABASE_PATH,
                })
                .then(({ data }) => {
                    Database.SHA = data.sha
                    fnResolv(Database.SHA)
                    emitter.emit('database-get-sha-success')
                })
                .catch((e) => {
                    fnReject(e)
                    emitter.emit('database-get-sha-error')
                })
            }
        })
    }

    static fnListGithub(sPath)
    {
        var oR = FileSystemDriver.oRepoItem

        return new Promise(async (fnResolv, fnReject) => {
            try {
                console.log(sPath)
                sPath = sPath.replace(/^\/+/, '')
                var aList = (await FileSystemDriver.octokit.rest.repos.getContent({
                    owner: oR.login,
                    repo: oR.repo,
                    path: sPath
                }))
                aList = aList.data.map((oI) => {
                    return {
                        name: oI.name,
                        type: oI.type == 'file' ? 'file' : 'directory',
                        size: oI.size,
                        human_size: humanFileSize(oI.size),
                        created_at: "",
                        updated_at: ""
                    }
                })
                console.log(aList)
                fnResolv(aList)
            } catch (oE) {
                fnReject(oE);
            }
        })
    }

    static fnListWebdav(sPath)
    {
        var oR = FileSystemDriver.oRepoItem

        return new Promise(async (fnResolv, fnReject) => {
            try {
                var aList = (await FileSystemDriver.webdav.getDirectoryContents(sPath))

                if (sPath!="/") {
                    aList = aList.splice(1)
                }
                aList = aList.map((oI) => {
                    return {
                        name: oI.basename,
                        type: oI.type,
                        size: oI.size,
                        human_size: humanFileSize(oI.size),
                        created_at: "",
                        updated_at: (new Date(oI.lastmod)).toLocaleString("ru-RU")
                    }
                })
                fnResolv(aList)
            } catch (oE) {
                console.error('WebDAV fnList error for path "' + sPath + '":', oE);
                fnReject(oE);
            }
        })
    }


    static fnReadFileWebdav(sFileName)
    {
        var oR = FileSystemDriver.oRepoItem

        return new Promise(async (fnResolv, fnReject) => {
            try {
                var oData = (await FileSystemDriver.webdav.getFileContents(sFileName))
                var enc = new TextDecoder("utf-8");
                var sData = enc.decode(oData)
                fnResolv(sData)
            } catch (oE) {
                console.error('WebDAV fnReadFile error for path "' + sFileName + '":', oE);
                fnReject(oE);
            }
        })
    }

    static fnReadFileGithub(sFileName)
    {
        return new Promise(async (fnResolv, fnReject) => {
            var oR = FileSystemDriver.oRepoItem
            sFileName = sFileName.replace(/^\/+/, '')
            return FileSystemDriver.octokit.rest.repos.getContent({
                owner: oR.login,
                repo: oR.repo,
                path: sFileName,
            }).then(({ data }) => {
                var sData = decode(data.content)
                fnResolv(sData)
            }).catch((oE) => {
                console.error('GitHub fnReadFile error for path "' + sFileName + '":', oE);
                fnReject(oE);
            })
        })
    }

    static fnWriteDatabaseGithub()
    {
        _s('Database.fnWriteNotesDatabase')
        var sData = JSON.stringify(FileSystemDriver.oDatabase, null, 4)
        var oR = FileSystemDriver.oRepoItem
        sFileName = sFileName.replace(/^\/+/, '')
        return FileSystemDriver.octokit.rest.repos.createOrUpdateFileContents({
            owner: oR.login,
            repo: oR.repo,
            path: FileSystemDriver.DATABASE_PATH,
            sha: FileSystemDriver.SHA,
            message: FileSystemDriver.fnGetUpdateMessage(),
            content: encode(sData)
        })
        .then(() => {
            emitter.emit('database-db-saved')
        })
        .catch((...aArgs) => {
            emitter.emit('database-db-error', aArgs[0]+'')
            emitter.emit('database-db-save-error', aArgs[0]+'')
        })
    }

    static fnWriteDatabaseWebdav()
    {
        var sData = JSON.stringify(FileSystemDriver.oDatabase, null, 4)
        var oR = FileSystemDriver.oRepoItem

        return new Promise(async (fnResolv, fnReject) => {
            try {
                var enc = new TextEncoder()
                var aData = enc.encode(sData)
                await FileSystemDriver.webdav.putFileContents(
                    FileSystemDriver.DATABASE_PATH, 
                    aData,
                    { contentLength: false, overwrite: true }
                )
                emitter.emit('database-db-saved')
            } catch (oE) {
                emitter.emit('database-db-error', oE+'')
                emitter.emit('database-db-save-error', oE+'')
    
                if (/Not Found/.test(oE+'')) {
                    emitter.emit('database-db-load-error-notfound', oE+'')
    
                    emitter.emit('database-db-save')
                } else {
                    emitter.emit('database-db-load-error-github-exception', oE+'')
                }
                throw oE
            }
        })
    }

    static fnGetUpdateMessage() {
        return "update: "+(new Date())
    }

    /**
     * Автоматическое сохранение
     */
    static fnUpdateNoteDatabase()
    {
        // if (Database.bDirty) {
        //     Editor.fnPrepareEditorContents()
        //     Database.fnWriteNotesDatabase()
        // }
        // Database.fnGetSHADatabase()
        // setTimeout(Database.fnUpdateNoteDatabase, Database.DATABASE_UPDATE_TIMEOUT);
    }
}