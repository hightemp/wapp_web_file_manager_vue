<template>
  <div 
    class="wrapper"
  >
    <!-- <div class="modes-panel">
      <a v-for="oMenuItem in aMenu" :key="oMenuItem.class" :class="(sCurrentMode==oMenuItem.class ? 'btn-primary' : '') + ' btn '+oMenuItem.class" :title="oMenuItem.title" @click="fnMenuItemClick(oMenuItem)"><i :class="'bi '+oMenuItem.icon"></i></a>
    </div> -->
    <!-- <div v-show="iActiveRepo === null" class="blocker"></div> -->

    <div class="account-panel">
      <!-- Репозитории -->
      <div class="account-control-panel">
        <input type="text" class="form-control" />
        <button :class="'btn '" @click="bShowEditRepoWindow=true"><i class="bi bi-pencil"></i></button>
      </div>
      <div class="list-group">
        <button 
          v-for="(oRepo, iIndex) in aRepos" :key="oRepo"
          type="button" :class="'list-group-item list-group-item-action '+(iActiveRepo==iIndex ? 'active' : '')" aria-current="true"
          @click="fnSlectRepo(iIndex, oRepo)"
        >
          {{ oRepo.name }}
        </button>
      </div>
    </div>
    <div class="files-panel">
      <!-- Сетка -->
      <div class="files-control-panel">
        <button :class="'btn '+(sFilesListType=='column' ? 'btn-primary' : '')" @click="sFilesListType='column'"><i class="bi bi-layout-three-columns"></i></button>
        <button :class="'btn '+(sFilesListType=='grid' ? 'btn-primary' : '')" @click="sFilesListType='grid'"><i class="bi bi-ui-checks-grid"></i></button>
        <button :class="'btn '+(sFilesListType=='list' ? 'btn-primary' : '')" @click="sFilesListType='list'"><i class="bi bi-ui-checks"></i></button>
      </div>
      <div class="files-list-as-grid-wrapper" v-if="sFilesListType=='grid'">
        <div class="files-grid-control-panel">
          <button :class="'btn '" @click="fnGoPrev"><i class="bi bi-arrow-left"></i></button>
          <button :class="'btn '" @click="fnGoUp"><i class="bi bi-arrow-up"></i></button>
          <button :class="'btn '" @click="fnGoNext"><i class="bi bi-arrow-right"></i></button>
          <div class="path">
            <div class="path-wrapper">
              <template v-for="(sPath, iI) in aPath" :key="sPath">
                <i class="bi bi-play-fill" v-show="iI>0"></i>
                <div class="path-link" @click="fnOpenPathByIndex(iI)">{{sPath}}</div>
              </template>
            </div>
          </div>
        </div>
        <div class="files-list-wrapper_grid-box-wrapper">
          <div class="files-list-wrapper_grid-box">
            <button 
              v-for="oFile in aFiles" :key="oFile" 
              type="button" 
              :class="
                'list-group-item list-group-item-action file-grid-item '
                +(iSelectedFileColumn==aPath.length-1 && sSelectedFileName==oFile.name ? 'file-selected ' : '' )
              " aria-current="true"
              @click="fnClickFileItem(oFile)"
            >
                <div class="icon-wrapper">
                  <span v-show="oFile.type=='directory'" class="icon"><i class="bi bi-folder-fill"></i></span> 
                  <span v-show="oFile.type=='file'" class="icon"><i class="bi bi-file-earmark-text-fill"></i></span> 
                </div>
                <div class="title">{{oFile.name}}</div>
            </button>
          </div>
        </div>
      </div>
      <!-- Список -->
      <div class="files-list-as-list-wrapper" v-if="sFilesListType=='list'">
        <div class="files-list-control-panel">
          <button :class="'btn '" @click="fnGoPrev"><i class="bi bi-arrow-left"></i></button>
          <button :class="'btn '" @click="fnGoUp"><i class="bi bi-arrow-up"></i></button>
          <button :class="'btn '" @click="fnGoNext"><i class="bi bi-arrow-right"></i></button>
          <div class="path">
            <div class="path-wrapper">
              <template v-for="(sPath, iI) in aPath" :key="sPath">
                <i class="bi bi-play-fill" v-show="iI>0"></i>
                <div class="path-link" @click="fnOpenPathByIndex(iI)">{{sPath}}</div>
              </template>
            </div>
          </div>
        </div>
        <div class="files-list-wrapper_list-box">
          <div class="files-list-list">
            <div class="list-row header">
              <div>name</div>
              <div>size</div>
              <div>created at</div>
              <div>modified at</div>
            </div>
            <div 
              v-for="oFile in aFiles" :key="oFile" 
              :class="
                'list-row '
                +(iSelectedFileColumn==aPath.length-1 && sSelectedFileName==oFile.name ? 'file-selected ' : '' )
              "
              @click="fnClickFileItem(oFile)"
            >
              <div class="filename-cell">
                <span v-if="oFile.type=='directory'" class="icon"><i class="bi bi-folder-fill"></i></span> 
                <span v-if="oFile.type=='file'" class="icon"><i class="bi bi-file-earmark-text-fill"></i></span>
                <div class="title">{{oFile.name}}</div>
              </div>
              <div>{{oFile.human_size}}</div>
              <div>{{oFile.created_at}}</div>
              <div>{{oFile.updated_at}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Колонка -->
      <div class="files-list-wrapper" v-if="sFilesListType=='column'" ref="files_list_wrapper">
        <div class="files-list-wrapper_box">
          <div 
            v-for="(aFileColumn, iIndex) in aFilesColumns" :key="aFileColumn"
            class="list-group files-list"
          >
            <button 
                v-for="oFile in aFileColumn" :key="oFile"
                type="button" 
                :class="
                  'list-group-item list-group-item-action file-item '
                  +(oFile.name==aPath[iIndex+1] ? 'active ' : '') 
                  +(iSelectedFileColumn==iIndex && sSelectedFileName==oFile.name ? 'file-selected ' : '' )
                "
                @click="fnClickFileItem(oFile, iIndex)"
            >
                <span v-show="oFile.type=='directory'" class="icon"><i class="bi bi-folder-fill"></i></span> 
                <span v-show="oFile.type=='file'" class="icon"><i class="bi bi-file-earmark-text-fill"></i></span> 
                {{oFile.name}}
            </button>
          </div>

        </div>
      </div>
    </div>
    <div class="page-preview">
      <div class="pdf-preview" v-show="sPreviewShow=='pdf'">
        <iframe :src="sPDFPath"></iframe>
      </div>
      <div class="code-preview" v-show="sPreviewShow=='code'">
        <code class="code" v-html="sCode"></code>
      </div>
      <div class="image-preview" v-show="sPreviewShow=='image'">
        <img :src="sImagePath">
      </div>
    </div>
  </div>

  <div v-show="bShowLoader" class="loader">
    <div class="center">
      <div class="lds-dual-ring"></div>
    </div>
  </div>

  <div v-show="bShowEditRepoWindow">
      <div class="block-overlay"></div>

      <div id="modal-ask-api-key" class="modal show" tabindex="-1">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">Данные репозитория</h5>
                  </div>
                  <div class="modal-body" style="height: 500px; overflow-y: scroll">
                      <template v-if="iEditIndex!==null">
                          <div class="modal-ask-api_list_buttons">
                              <div></div>
                              <div>
                                  <button type="button" class="btn btn-danger"
                                  @click="fnCancelRepo">Отмена</button>
                                  <button type="button" class="btn btn-primary"
                                  @click="fnSaveRepo">Сохранить</button>
                              </div>
                          </div>
                          <div class="mb-3">
                              <label for="" class="form-label">Логин</label>
                              <select class="form-control" v-model="sFormType">
                                  <option value="github">github</option>
                                  <option value="webdav">webdav</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="" class="form-label">Название</label>
                              <input type="text" class="form-control" v-model="sFormName">
                          </div>
                          <template v-if="sFormType=='github'">
                              <div class="mb-3">
                                  <label for="" class="form-label">Логин</label>
                                  <input type="text" class="form-control" v-model="sFormLogin">
                              </div>
                              <div class="mb-3">
                                  <label for="" class="form-label">Репозиторий</label>
                                  <input type="text" class="form-control" v-model="sFormRepo">
                              </div>
                              <div class="mb-3">
                                  <label for="" class="form-label">API Ключ</label>
                                  <input type="text" class="form-control" v-model="sFormKey">
                              </div>
                          </template>
                          <template v-if="sFormType=='webdav'">
                              <div class="mb-3">
                                  <label for="" class="form-label">URL</label>
                                  <input type="text" class="form-control" v-model="sFormURL">
                              </div>
                              <div class="mb-3">
                                  <label for="" class="form-label">Пользователь</label>
                                  <input type="text" class="form-control" v-model="sFormUsername">
                              </div>
                              <div class="mb-3">
                                  <label for="" class="form-label">Пароль</label>
                                  <input type="text" class="form-control" v-model="sFormPassword">
                              </div>
                          </template>
                      </template>
                      <template v-else>
                          <div class="modal-ask-api_list_buttons">
                              <div></div>

                              <div>
                                  <button class="btn btn-secondary" @click="fnExport">Экспортировать</button>

                                  <button class="btn btn-danger" @click="fnCleanRepo">Очистить</button>

                                  <button class="btn btn-success" @click="fnNewRepo">Добавить</button>
                              </div>
                          </div>
                          <div v-for="(oItem, iIndex) in aRepos" :key="iIndex" :class="'list-repo-item '+(iSelectedRepoIndex==iIndex ? 'active' : '')">
                              <template v-if="oItem">
                                  <div class="list-repo-item_desc">
                                      <div class="list-repo-item_title">
                                          <div class="list-repo-item_type">{{oItem.type}}</div>
                                          <div class="list-repo-item_name">{{oItem.name}}</div>
                                      </div>
                                      <template v-if="oItem.type=='github'">
                                          <div><b>login:</b> {{oItem.login}}</div>
                                          <div><b>repo:</b> {{oItem.repo}}</div>
                                          <div><b>key:</b> {{oItem.key}}</div>
                                      </template>
                                      <template v-if="oItem.type=='webdav'">
                                          <div><b>url:</b> {{oItem.url}}</div>
                                          <div><b>username:</b> {{oItem.username}}</div>
                                          <div><b>password:</b> {{oItem.password}}</div>
                                      </template>
                                  </div>
                                  <div>
                                      <button class="btn btn-success" @click="fnEditRepo(iIndex)" title="Редактировать"><i class="bi bi-pencil"></i></button>
                                      <button class="btn btn-danger" @click="fnRemoveRepo(iIndex)" title="Удалить"><i class="bi bi-trash"></i></button>
                                  </div>
                              </template>
                          </div>
                      </template>
                  </div>
                  <div class="modal-footer">
                      <button class="btn btn-success" @click="fnCloseRepoWindow">Ok</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

var hljs = require('highlight.js');

import { FileSystemDriver } from "./FileSystemDriver"
import Dropdown from "./components/dropdown.vue"
import FilesColumnList from "./components/files-list.vue"

import aRepos from "../env"

export default {
  name: 'App',
  components: {
    FilesColumnList,
    Dropdown,
  },

  methods: {
    fnSlectRepo(iIndex, oRepo) {
      this.iActiveRepo = iIndex;
      FileSystemDriver.fnInit(oRepo);
      this.fnResetPath()
      this.fnSelectPath("/")
    },
    fnResetPath() {
      this.aFiles = [];
      this.aFilesColumns = [];
    },
    fnSelectPath(sPath) {
      var oThis = this
      oThis.aPath.push(sPath)
      oThis.bShowLoader = true
      FileSystemDriver
        .fnList("/"+this.aPath.join("/"))
        .then((aList) => {
          oThis.aFiles = aList
          oThis.aFilesColumns.push(aList)
          oThis.bShowLoader = false
          setTimeout(() => {
            oThis.$refs.files_list_wrapper.scrollLeft = 10000;
          }, 200);
        })
    },
    fnClickFileItem(oFile, iColumnIndex) {
      if (oFile.type == 'directory') {
        if (iColumnIndex !== undefined && iColumnIndex<this.aFilesColumns.length-1) {
          this.aFilesColumns.splice(iColumnIndex+1)
          this.aPath.splice(iColumnIndex+1)
        }
        this.fnSelectPath(oFile.name)
      } else {
        if (iColumnIndex==undefined) {
          iColumnIndex = this.aPath.length-1;
        }
        var aPath = this.aPath.slice();
        aPath.splice(iColumnIndex+1)
        this.sSelectedFileName = oFile.name
        this.iSelectedFileColumn = iColumnIndex
        this.sSelectedFilePath = aPath.join("/")
        this.sSelectedFile = this.sSelectedFilePath+"/"+this.sSelectedFileName

        var aExt = this.sSelectedFileName.split('.').splice(-1);
        var sExt = aExt[0]+''
        sExt = sExt.toLowerCase()

        if (~this.aImagesTypes.indexOf(sExt)) {
          this.sPreviewShow = "image"
          this.sImagePath = this.aRepos[this.iActiveRepo].url+this.sSelectedFile
        } else if (~this.aPDFTypes.indexOf(sExt)) {
          this.sPreviewShow = "pdf"
          this.sPDFPath = this.aRepos[this.iActiveRepo].url+this.sSelectedFile
        } else if (~this.aTextTypes.indexOf(sExt)) {
          this.sPreviewShow = "code"
          FileSystemDriver
            .fnReadFile(this.sSelectedFile)
            .then((sCode) => {
              // this.sCode = sCode
              this.sCode = hljs.highlightAuto(sCode).value
              // hljs.highlightElement(document.querySelector('.code'))
            })
        } else {
          this.sPreviewShow = "binary"
        }
      }
    },
    fnGoUp() {
      if (this.aPath.length==1) {
        return;
      }
      var iColumnIndex = this.aFilesColumns.length-1
      var sPath = this.aPath[this.aPath.length-2]
      this.aFilesColumns.splice(iColumnIndex-1)
      this.aPath.splice(iColumnIndex-1)
      this.fnSelectPath(sPath)
    },
    fnOpenPathByIndex(iI) {
      var sPath = this.aPath[iI]
      this.aFilesColumns.splice(iI)
      this.aPath.splice(iI)
      this.fnSelectPath(sPath)
    },
    fnSaveRepo() {
      if (!this.sFormName) {
          alert('Надо заполнить поле - Название')
          return
      }
      var oObj = {
          "name": this.sFormName, 
          "login": this.sFormLogin, 
          "repo": this.sFormRepo, 
          "key": this.sFormKey,
          "type": this.sFormType,
          "url": this.sFormURL,
          "username": this.sFormUsername,
          "password": this.sFormPassword,
      }
      if (this.iEditIndex==-1) {
        this.aRepos.push(oObj)
      } else {
        this.aRepos.splice(this.iEditIndex, 1, oObj)
      }
      localStorage.setItem('aRepos', JSON.stringify(this.aRepos))
      this.iEditIndex = null
    },
    fnNewRepo() {
        this.iEditIndex = -1
        this.sFormName = ""
        this.sFormLogin = ""
        this.sFormRepo = ""
        this.sFormKey = ""
        this.sFormType = "github"
        this.sFormURL = ""
        this.sFormUsername = ""
        this.sFormPassword = ""
    },
    fnEditRepo(iIndex) {
        this.iEditIndex = iIndex
        this.sFormName = this.aRepos[this.iEditIndex].name
        this.sFormLogin = this.aRepos[this.iEditIndex].login
        this.sFormRepo = this.aRepos[this.iEditIndex].repo
        this.sFormKey = this.aRepos[this.iEditIndex].key
        this.sFormType = this.aRepos[this.iEditIndex].type
        this.sFormURL = this.aRepos[this.iEditIndex].url
        this.sFormUsername = this.aRepos[this.iEditIndex].username
        this.sFormPassword = this.aRepos[this.iEditIndex].password
    },
    fnRemoveRepo(iIndex) {
      this.aRepos.splice(iIndex, 1)
      localStorage.setItem('aRepos', JSON.stringify(this.aRepos))
    },
    fnCleanRepo() {
      this.aRepos = []
      localStorage.setItem('aRepos', JSON.stringify(this.aRepos))
    },
    fnCancelRepo() {
      this.iEditIndex = null
    },
    fnCloseRepoWindow() {
      this.bShowEditRepoWindow = false
    }
  },

  data() {
    var aRepos = JSON.parse(localStorage.getItem('aRepos') || '[]');
    return {
      bShowLoader: false,
      bShowBlocker: false,
      bShowEditRepoWindow: true,

      iSelectedFileColumn: null,
      sSelectedFilePath: null,
      sSelectedFile: null,
      sSelectedFileName: null,

      sCode: "",
      sImagePath: "",
      sPDFPath: "",

      iEditIndex: null,
      iSelectedRepoIndex: null,
      sFormLogin: "",
      sFormRepo: "",
      sFormKey: "",
      sFormURL: "",
      sFormType: "github",

      sFilesListType: "column",
      sPreviewShow: "code",

      iGridPage: 0,

      aRepoItemMenu: [
        { id:"edit", title:'<i class="bi bi-pencil"></i> Редактировать' },
        { id:"delete", title:'<i class="bi bi-trash"></i> Удалить' },
      ],
      aRepoMenu: [
        { id:"reload", title:'<i class="bi bi-arrow-repeat"></i> Обновить' },
        { id:"add", title:'<i class="bi bi-plus-lg"></i> Добавить' },
      ],
      aMenu: [],

      aPathHistory: [],

      iActiveRepo: null,
      aRepos: aRepos,

      aPath: [],
      aFiles: [],
      aFilesColumns: [],

      aImagesTypes: [
        'png', 'jpeg', 'jpg', 'gif', 'bmp', 'svg', 'avif'
      ],
      aTextTypes: [
        'txt', 'js', 'mjs', 'yml', 'css', 'php', 'py', 'sh', 'json', 'md'
      ],
      aPDFTypes: [
        'pdf'
      ],
    }
  },

  created() {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
