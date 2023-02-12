(function(){"use strict";var e={6708:function(e,t,i){i(9029);var s=i(9963),l=i(6252),a=i(3577);const n={class:"wrapper"},o={class:"account-panel"},r={class:"account-control-panel"},c=(0,l._)("input",{type:"text",class:"form-control"},null,-1),d=(0,l._)("i",{class:"bi bi-pencil"},null,-1),p=[d],u={class:"list-group"},m=["onClick"],h={class:"files-panel"},b={class:"files-control-panel"},f=(0,l._)("i",{class:"bi bi-layout-three-columns"},null,-1),_=[f],w=(0,l._)("i",{class:"bi bi-ui-checks-grid"},null,-1),v=[w],y=(0,l._)("i",{class:"bi bi-ui-checks"},null,-1),F=[y],g={key:0,class:"files-list-as-grid-wrapper"},k={class:"files-grid-control-panel"},C=(0,l._)("i",{class:"bi bi-arrow-left"},null,-1),R=[C],S=(0,l._)("i",{class:"bi bi-arrow-up"},null,-1),L=[S],P=(0,l._)("i",{class:"bi bi-arrow-right"},null,-1),D=[P],x={class:"path"},I={class:"path-wrapper"},O={class:"bi bi-play-fill"},T=["onClick"],U={class:"files-list-wrapper_grid-box-wrapper"},A={class:"files-list-wrapper_grid-box"},E=["onClick"],z={class:"icon-wrapper"},H={class:"icon"},N=(0,l._)("i",{class:"bi bi-folder-fill"},null,-1),G=[N],B={class:"icon"},M=(0,l._)("i",{class:"bi bi-file-earmark-text-fill"},null,-1),Y=[M],W={class:"title"},K={key:1,class:"files-list-as-list-wrapper"},j={class:"files-list-control-panel"},V=(0,l._)("i",{class:"bi bi-arrow-left"},null,-1),$=[V],q=(0,l._)("i",{class:"bi bi-arrow-up"},null,-1),J=[q],Z=(0,l._)("i",{class:"bi bi-arrow-right"},null,-1),Q=[Z],X={class:"path"},ee={class:"path-wrapper"},te={class:"bi bi-play-fill"},ie=["onClick"],se={class:"files-list-wrapper_list-box"},le={class:"files-list-list"},ae={class:"list-row header"},ne=["onClick"],oe={class:"filename-cell"},re={key:0,class:"icon"},ce=(0,l._)("i",{class:"bi bi-folder-fill"},null,-1),de=[ce],pe={key:1,class:"icon"},ue=(0,l._)("i",{class:"bi bi-file-earmark-text-fill"},null,-1),me=[ue],he={class:"title"},be={key:2,class:"files-list-wrapper",ref:"files_list_wrapper"},fe={class:"files-list-wrapper_box"},_e=["onClick"],we={class:"icon"},ve=(0,l._)("i",{class:"bi bi-folder-fill"},null,-1),ye=[ve],Fe={class:"icon"},ge=(0,l._)("i",{class:"bi bi-file-earmark-text-fill"},null,-1),ke=[ge],Ce={class:"page-preview"},Re={class:"pdf-preview"},Se=["src"],Le={class:"code-preview"},Pe=["innerHTML"],De={class:"image-preview"},xe=["src"],Ie={class:"loader"},Oe=(0,l._)("div",{class:"center"},[(0,l._)("div",{class:"lds-dual-ring"})],-1),Te=[Oe],Ue=(0,l._)("div",{class:"block-overlay"},null,-1),Ae={id:"modal-ask-api-key",class:"modal show",tabindex:"-1"},Ee={class:"modal-dialog"},ze={class:"modal-content"},He=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title"},"Данные репозитория")],-1),Ne={class:"modal-body",style:{height:"500px","overflow-y":"scroll"}},Ge={class:"modal-ask-api_list_buttons"},Be=(0,l._)("div",null,null,-1),Me={class:"mb-3"},Ye=(0,l._)("label",{for:"",class:"form-label"},"Логин",-1),We=(0,l._)("option",{value:"github"},"github",-1),Ke=(0,l._)("option",{value:"webdav"},"webdav",-1),je=[We,Ke],Ve={class:"mb-3"},$e=(0,l._)("label",{for:"",class:"form-label"},"Название",-1),qe={class:"mb-3"},Je=(0,l._)("label",{for:"",class:"form-label"},"Логин",-1),Ze={class:"mb-3"},Qe=(0,l._)("label",{for:"",class:"form-label"},"Репозиторий",-1),Xe={class:"mb-3"},et=(0,l._)("label",{for:"",class:"form-label"},"API Ключ",-1),tt={class:"mb-3"},it=(0,l._)("label",{for:"",class:"form-label"},"URL",-1),st={class:"mb-3"},lt=(0,l._)("label",{for:"",class:"form-label"},"Пользователь",-1),at={class:"mb-3"},nt=(0,l._)("label",{for:"",class:"form-label"},"Пароль",-1),ot={class:"modal-ask-api_list_buttons"},rt=(0,l._)("div",null,null,-1),ct={class:"list-repo-item_desc"},dt={class:"list-repo-item_title"},pt={class:"list-repo-item_type"},ut={class:"list-repo-item_name"},mt=(0,l._)("b",null,"login:",-1),ht=(0,l._)("b",null,"repo:",-1),bt=(0,l._)("b",null,"key:",-1),ft=(0,l._)("b",null,"url:",-1),_t=(0,l._)("b",null,"username:",-1),wt=(0,l._)("b",null,"password:",-1),vt=["onClick"],yt=(0,l._)("i",{class:"bi bi-pencil"},null,-1),Ft=[yt],gt=["onClick"],kt=(0,l._)("i",{class:"bi bi-trash"},null,-1),Ct=[kt],Rt={class:"modal-footer"};function St(e,t,i,d,f,w){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",n,[(0,l._)("div",o,[(0,l._)("div",r,[c,(0,l._)("button",{class:(0,a.C_)("btn "),onClick:t[0]||(t[0]=e=>f.bShowEditRepoWindow=!0)},p)]),(0,l._)("div",u,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.aRepos,((e,t)=>((0,l.wg)(),(0,l.iD)("button",{key:e,type:"button",class:(0,a.C_)("list-group-item list-group-item-action "+(f.iActiveRepo==t?"active":"")),"aria-current":"true",onClick:i=>w.fnSlectRepo(t,e)},(0,a.zw)(e.name),11,m)))),128))])]),(0,l._)("div",h,[(0,l._)("div",b,[(0,l._)("button",{class:(0,a.C_)("btn "+("column"==f.sFilesListType?"btn-primary":"")),onClick:t[1]||(t[1]=e=>f.sFilesListType="column")},_,2),(0,l._)("button",{class:(0,a.C_)("btn "+("grid"==f.sFilesListType?"btn-primary":"")),onClick:t[2]||(t[2]=e=>f.sFilesListType="grid")},v,2),(0,l._)("button",{class:(0,a.C_)("btn "+("list"==f.sFilesListType?"btn-primary":"")),onClick:t[3]||(t[3]=e=>f.sFilesListType="list")},F,2)]),"grid"==f.sFilesListType?((0,l.wg)(),(0,l.iD)("div",g,[(0,l._)("div",k,[(0,l._)("button",{class:(0,a.C_)("btn "),onClick:t[4]||(t[4]=(...t)=>e.fnGoPrev&&e.fnGoPrev(...t))},R),(0,l._)("button",{class:(0,a.C_)("btn "),onClick:t[5]||(t[5]=(...e)=>w.fnGoUp&&w.fnGoUp(...e))},L),(0,l._)("button",{class:(0,a.C_)("btn "),onClick:t[6]||(t[6]=(...t)=>e.fnGoNext&&e.fnGoNext(...t))},D),(0,l._)("div",x,[(0,l._)("div",I,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.aPath,((e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:e},[(0,l.wy)((0,l._)("i",O,null,512),[[s.F8,t>0]]),(0,l._)("div",{class:"path-link",onClick:e=>w.fnOpenPathByIndex(t)},(0,a.zw)(e),9,T)],64)))),128))])])]),(0,l._)("div",U,[(0,l._)("div",A,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.aFiles,(e=>((0,l.wg)(),(0,l.iD)("button",{key:e,type:"button",class:(0,a.C_)("list-group-item list-group-item-action file-grid-item "+(f.iSelectedFileColumn==f.aPath.length-1&&f.sSelectedFileName==e.name?"file-selected ":"")),"aria-current":"true",onClick:t=>w.fnClickFileItem(e)},[(0,l._)("div",z,[(0,l.wy)((0,l._)("span",H,G,512),[[s.F8,"directory"==e.type]]),(0,l.wy)((0,l._)("span",B,Y,512),[[s.F8,"file"==e.type]])]),(0,l._)("div",W,(0,a.zw)(e.name),1)],10,E)))),128))])])])):(0,l.kq)("",!0),"list"==f.sFilesListType?((0,l.wg)(),(0,l.iD)("div",K,[(0,l._)("div",j,[(0,l._)("button",{class:(0,a.C_)("btn "),onClick:t[7]||(t[7]=(...t)=>e.fnGoPrev&&e.fnGoPrev(...t))},$),(0,l._)("button",{class:(0,a.C_)("btn "),onClick:t[8]||(t[8]=(...e)=>w.fnGoUp&&w.fnGoUp(...e))},J),(0,l._)("button",{class:(0,a.C_)("btn "),onClick:t[9]||(t[9]=(...t)=>e.fnGoNext&&e.fnGoNext(...t))},Q),(0,l._)("div",X,[(0,l._)("div",ee,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.aPath,((e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:e},[(0,l.wy)((0,l._)("i",te,null,512),[[s.F8,t>0]]),(0,l._)("div",{class:"path-link",onClick:e=>w.fnOpenPathByIndex(t)},(0,a.zw)(e),9,ie)],64)))),128))])])]),(0,l._)("div",se,[(0,l._)("div",le,[(0,l._)("div",ae,[(0,l._)("div",null,[(0,l._)("div",{class:"sort",onClick:t[10]||(t[10]=e=>(f.sListFilterColumn="name","name"==f.sListFilterColumn?f.iListSortOrder=-f.iListSortOrder:null))},"name"),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[11]||(t[11]=e=>f.sListFilterName=e)},null,512),[[s.nr,f.sListFilterName]])])]),(0,l._)("div",null,[(0,l._)("div",{class:"sort",onClick:t[12]||(t[12]=e=>(f.sListFilterColumn="size","size"==f.sListFilterColumn?f.iListSortOrder=-f.iListSortOrder:null))},"size"),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[13]||(t[13]=e=>f.sListFilterSize=e)},null,512),[[s.nr,f.sListFilterSize]])])]),(0,l._)("div",null,[(0,l._)("div",{class:"sort",onClick:t[14]||(t[14]=e=>(f.sListFilterColumn="created_at","created_at"==f.sListFilterColumn?f.iListSortOrder=-f.iListSortOrder:null))},"created at"),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[15]||(t[15]=e=>f.sListFilterCreatedAt=e)},null,512),[[s.nr,f.sListFilterCreatedAt]])])]),(0,l._)("div",null,[(0,l._)("div",{class:"sort",onClick:t[16]||(t[16]=e=>(f.sListFilterColumn="updated_at","updated_at"==f.sListFilterColumn?f.iListSortOrder=-f.iListSortOrder:null))},"modified at"),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[17]||(t[17]=e=>f.sListFilterModified=e)},null,512),[[s.nr,f.sListFilterModified]])])])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(w.aFilteredListFiles,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:(0,a.C_)("list-row "+(f.iSelectedFileColumn==f.aPath.length-1&&f.sSelectedFileName==e.name?"file-selected ":"")),onClick:t=>w.fnClickFileItem(e)},[(0,l._)("div",oe,["directory"==e.type?((0,l.wg)(),(0,l.iD)("span",re,de)):(0,l.kq)("",!0),"file"==e.type?((0,l.wg)(),(0,l.iD)("span",pe,me)):(0,l.kq)("",!0),(0,l._)("div",he,(0,a.zw)(e.name),1)]),(0,l._)("div",null,(0,a.zw)(e.human_size),1),(0,l._)("div",null,(0,a.zw)(e.created_at),1),(0,l._)("div",null,(0,a.zw)(e.updated_at),1)],10,ne)))),128))])])])):(0,l.kq)("",!0),"column"==f.sFilesListType?((0,l.wg)(),(0,l.iD)("div",be,[(0,l._)("div",fe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.aFilesColumns,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"list-group files-list"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(e=>((0,l.wg)(),(0,l.iD)("button",{key:e,type:"button",class:(0,a.C_)("list-group-item list-group-item-action file-item "+(e.name==f.aPath[t+1]?"active ":"")+(f.iSelectedFileColumn==t&&f.sSelectedFileName==e.name?"file-selected ":"")),onClick:i=>w.fnClickFileItem(e,t)},[(0,l.wy)((0,l._)("span",we,ye,512),[[s.F8,"directory"==e.type]]),(0,l.wy)((0,l._)("span",Fe,ke,512),[[s.F8,"file"==e.type]]),(0,l.Uk)(" "+(0,a.zw)(e.name),1)],10,_e)))),128))])))),128))])],512)):(0,l.kq)("",!0)]),(0,l._)("div",Ce,[(0,l.wy)((0,l._)("div",Re,[(0,l._)("iframe",{src:f.sPDFPath},null,8,Se)],512),[[s.F8,"pdf"==f.sPreviewShow]]),(0,l.wy)((0,l._)("div",Le,[(0,l._)("code",{class:"code",innerHTML:f.sCode},null,8,Pe)],512),[[s.F8,"code"==f.sPreviewShow]]),(0,l.wy)((0,l._)("div",De,[(0,l._)("img",{src:f.sImagePath},null,8,xe)],512),[[s.F8,"image"==f.sPreviewShow]])])]),(0,l.wy)((0,l._)("div",Ie,Te,512),[[s.F8,f.bShowLoader]]),(0,l.wy)((0,l._)("div",null,[Ue,(0,l._)("div",Ae,[(0,l._)("div",Ee,[(0,l._)("div",ze,[He,(0,l._)("div",Ne,[null!==f.iEditIndex?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",Ge,[Be,(0,l._)("div",null,[(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:t[18]||(t[18]=(...e)=>w.fnCancelRepo&&w.fnCancelRepo(...e))},"Отмена"),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[19]||(t[19]=(...e)=>w.fnSaveRepo&&w.fnSaveRepo(...e))},"Сохранить")])]),(0,l._)("div",Me,[Ye,(0,l.wy)((0,l._)("select",{class:"form-control","onUpdate:modelValue":t[20]||(t[20]=e=>f.sFormType=e)},je,512),[[s.bM,f.sFormType]])]),(0,l._)("div",Ve,[$e,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[21]||(t[21]=t=>e.sFormName=t)},null,512),[[s.nr,e.sFormName]])]),"github"==f.sFormType?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",qe,[Je,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[22]||(t[22]=e=>f.sFormLogin=e)},null,512),[[s.nr,f.sFormLogin]])]),(0,l._)("div",Ze,[Qe,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[23]||(t[23]=e=>f.sFormRepo=e)},null,512),[[s.nr,f.sFormRepo]])]),(0,l._)("div",Xe,[et,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[24]||(t[24]=e=>f.sFormKey=e)},null,512),[[s.nr,f.sFormKey]])])],64)):(0,l.kq)("",!0),"webdav"==f.sFormType?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",tt,[it,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[25]||(t[25]=e=>f.sFormURL=e)},null,512),[[s.nr,f.sFormURL]])]),(0,l._)("div",st,[lt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[26]||(t[26]=t=>e.sFormUsername=t)},null,512),[[s.nr,e.sFormUsername]])]),(0,l._)("div",at,[nt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[27]||(t[27]=t=>e.sFormPassword=t)},null,512),[[s.nr,e.sFormPassword]])])],64)):(0,l.kq)("",!0)],64)):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",ot,[rt,(0,l._)("div",null,[(0,l._)("button",{class:"btn btn-secondary",onClick:t[28]||(t[28]=(...t)=>e.fnExport&&e.fnExport(...t))},"Экспортировать"),(0,l._)("button",{class:"btn btn-danger",onClick:t[29]||(t[29]=(...e)=>w.fnCleanRepo&&w.fnCleanRepo(...e))},"Очистить"),(0,l._)("button",{class:"btn btn-success",onClick:t[30]||(t[30]=(...e)=>w.fnNewRepo&&w.fnNewRepo(...e))},"Добавить")])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.aRepos,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:(0,a.C_)("list-repo-item "+(f.iSelectedRepoIndex==t?"active":""))},[e?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",ct,[(0,l._)("div",dt,[(0,l._)("div",pt,(0,a.zw)(e.type),1),(0,l._)("div",ut,(0,a.zw)(e.name),1)]),"github"==e.type?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",null,[mt,(0,l.Uk)(" "+(0,a.zw)(e.login),1)]),(0,l._)("div",null,[ht,(0,l.Uk)(" "+(0,a.zw)(e.repo),1)]),(0,l._)("div",null,[bt,(0,l.Uk)(" "+(0,a.zw)(e.key),1)])],64)):(0,l.kq)("",!0),"webdav"==e.type?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",null,[ft,(0,l.Uk)(" "+(0,a.zw)(e.url),1)]),(0,l._)("div",null,[_t,(0,l.Uk)(" "+(0,a.zw)(e.username),1)]),(0,l._)("div",null,[wt,(0,l.Uk)(" "+(0,a.zw)(e.password),1)])],64)):(0,l.kq)("",!0)]),(0,l._)("div",null,[(0,l._)("button",{class:"btn btn-success",onClick:e=>w.fnEditRepo(t),title:"Редактировать"},Ft,8,vt),(0,l._)("button",{class:"btn btn-danger",onClick:e=>w.fnRemoveRepo(t),title:"Удалить"},Ct,8,gt)])],64)):(0,l.kq)("",!0)],2)))),128))],64))]),(0,l._)("div",Rt,[(0,l._)("button",{class:"btn btn-success",onClick:t[31]||(t[31]=(...e)=>w.fnCloseRepoWindow&&w.fnCloseRepoWindow(...e))},"Ok")])])])])],512),[[s.F8,f.bShowEditRepoWindow]])],64)}var Lt=i(3473),Pt=i(9478),Dt=i(2300),xt=i(4279),It=i.n(xt);const Ot=new(It());function Tt(e,t=!0,i=1){const s=t?1e3:1024;if(Math.abs(e)<s)return e+" B";const l=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let a=-1;const n=10**i;do{e/=s,++a}while(Math.round(Math.abs(e)*n)/n>=s&&a<l.length-1);return e.toFixed(i)+" "+l[a]}class Ut{static oDatabase={groups_last_id:0,groups:[],categories_last_id:0,categories:[],articles_last_id:0,articles:[],favorites_last_id:0,favorites:[],tags_last_id:0,tags:[],tags_relations_last_id:0,tags_relations:[],links_last_id:0,links:[]};static octokit=null;static SHA="";static webdav=null;static oRepoItem=null;static DATABASE_PATH="notes-database.json";static DATABASE_UPDATE_TIMEOUT=3e4;static fnInit(e){Ut.oRepoItem=e,"github"==e.type&&Ut.fnInitGit(),"webdav"==e.type&&Ut.fnInitWebdav()}static fnInitGit(){Ut.octokit=new Lt.v({auth:Ut.oRepoItem.key})}static fnInitWebdav(){Ut.webdav=(0,Pt.createClient)(Ut.oRepoItem.url,{username:Ut.oRepoItem.username,password:Ut.oRepoItem.password})}static fnFirstLoadDatabase(){_s("Database.fnFirstLoadDatabase")}static fnList(e){return"github"==Ut.oRepoItem.type?Ut.fnListGithub(e):"webdav"==Ut.oRepoItem.type?Ut.fnListWebdav(e):void 0}static fnReadFile(e){return"github"==Ut.oRepoItem.type?Ut.fnReadFileGithub(e):"webdav"==Ut.oRepoItem.type?Ut.fnReadFileWebdav(e):void 0}static fnWriteFile(e,t){return"github"==Ut.oRepoItem.type?Ut.fnWriteDatabaseGithub():"webdav"==Ut.oRepoItem.type?Ut.fnWriteDatabaseWebdav():void 0}static fnGetSHADatabase(){return new Promise(((e,t)=>{Database.SHA||Database.octokit.rest.repos.getContent({owner:Database.sLogin,repo:Database.sRepo,path:Database.DATABASE_PATH}).then((({data:t})=>{Database.SHA=t.sha,e(Database.SHA),Ot.emit("database-get-sha-success")})).catch((e=>{t(e),Ot.emit("database-get-sha-error")}))}))}static fnListGithub(e){var t=Ut.oRepoItem;return new Promise((async(i,s)=>{try{console.log(e),e=e.replace(/^\/+/,"");var l=await Ut.octokit.rest.repos.getContent({owner:t.login,repo:t.repo,path:e});l=l.data.map((e=>({name:e.name,type:"file"==e.type?"file":"directory",size:e.size,human_size:Tt(e.size),created_at:"",updated_at:""}))),console.log(l),i(l)}catch(a){s(a)}}))}static fnListWebdav(e){Ut.oRepoItem;return new Promise((async(t,i)=>{try{var s=await Ut.webdav.getDirectoryContents(e);"/"!=e&&(s=s.splice(1)),s=s.map((e=>({name:e.basename,type:e.type,size:e.size,human_size:Tt(e.size),created_at:"",updated_at:new Date(e.lastmod).toLocaleString("ru-RU")}))),t(s)}catch(l){console.error(l),t([])}}))}static fnReadFileWebdav(e){Ut.oRepoItem;return new Promise((async(t,i)=>{try{var s=await Ut.webdav.getFileContents(e),l=new TextDecoder("utf-8"),a=l.decode(s);t(a)}catch(n){console.error(n),t("")}}))}static fnReadFileGithub(e){return new Promise((async(t,i)=>{var s=Ut.oRepoItem;return e=e.replace(/^\/+/,""),Ut.octokit.rest.repos.getContent({owner:s.login,repo:s.repo,path:e}).then((({data:e})=>{var i=(0,Dt.Jx)(e.content);t(i)})).catch((e=>{console.error(e),t("")}))}))}static fnWriteDatabaseGithub(){_s("Database.fnWriteNotesDatabase");var e=JSON.stringify(Ut.oDatabase,null,4),t=Ut.oRepoItem;return sFileName=sFileName.replace(/^\/+/,""),Ut.octokit.rest.repos.createOrUpdateFileContents({owner:t.login,repo:t.repo,path:Ut.DATABASE_PATH,sha:Ut.SHA,message:Ut.fnGetUpdateMessage(),content:(0,Dt.cv)(e)}).then((()=>{Ot.emit("database-db-saved")})).catch(((...e)=>{Ot.emit("database-db-error",e[0]+""),Ot.emit("database-db-save-error",e[0]+"")}))}static fnWriteDatabaseWebdav(){var e=JSON.stringify(Ut.oDatabase,null,4);Ut.oRepoItem;return new Promise((async(t,i)=>{try{var s=new TextEncoder,l=s.encode(e);await Ut.webdav.putFileContents(Ut.DATABASE_PATH,l,{contentLength:!1,overwrite:!0}),Ot.emit("database-db-saved")}catch(a){throw Ot.emit("database-db-error",a+""),Ot.emit("database-db-save-error",a+""),/Not Found/.test(a+"")?(Ot.emit("database-db-load-error-notfound",a+""),Ot.emit("database-db-save")):Ot.emit("database-db-load-error-github-exception",a+""),a}}))}static fnGetUpdateMessage(){return"update: "+new Date}static fnUpdateNoteDatabase(){}}const At={class:"dropdown"},Et=["onClick","innerHTML"];function zt(e,t,i,s,n,o){return(0,l.wg)(),(0,l.iD)("div",At,[(0,l._)("a",{class:"btn dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",onClick:t[0]||(t[0]=(...e)=>o.fnMenuOpen&&o.fnMenuOpen(...e))}),(0,l._)("ul",{class:(0,a.C_)("dropdown-menu "+(n.bOpened?"show":""))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.aItems,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.id},[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:t=>o.fnOnItemClick(e),innerHTML:e.title},null,8,Et)])))),128))],2)])}var Ht={props:["items"],emits:["clickitem"],data(){return{aItems:this.items,bOpened:!1}},methods:{fnFocusOut(){this.bOpened=!1},fnMenuOpen(){this.bOpened=!this.bOpened},fnOnItemClick(e){this.bOpened=!1,this.$emit("clickitem",e)}},created(){window.addEventListener("click",(e=>{this.$el.contains(e.target)||(this.bOpened=!1)}))}},Nt=i(3744);const Gt=(0,Nt.Z)(Ht,[["render",zt]]);var Bt=Gt;const Mt=["onClick"],Yt={class:"icon"},Wt=(0,l._)("i",{class:"bi bi-folder-fill"},null,-1),Kt=[Wt],jt={class:"icon"},Vt=(0,l._)("i",{class:"bi bi-file-earmark-text-fill"},null,-1),$t=[Vt];function qt(e,t,i,n,o,r){return(0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.aFiles,(e=>((0,l.wg)(),(0,l.iD)("button",{key:e,type:"button",class:(0,a.C_)("list-group-item list-group-item-action file-item"+(e.name==r.sSelectedDir?"active":"")),onClick:t=>r.fnItemClick(e,r.iColumnIndex)},[(0,l.wy)((0,l._)("span",Yt,Kt,512),[[s.F8,"directory"==e.type]]),(0,l.wy)((0,l._)("span",jt,$t,512),[[s.F8,"file"==e.type]]),(0,l.Uk)(" "+(0,a.zw)(e.name),1)],10,Mt)))),128)}var Jt={name:"TestFiles",emits:["clickitem"],props:["files","columnindex","selecteddir"],methods:{fnItemClick(e){this.$emit("clickitem",e)}},computed:{aFiles(){return this.files},iColumnIndex(){return this.columnindex},sSelectedDir(){return this.selecteddir}}};const Zt=(0,Nt.Z)(Jt,[["render",qt]]);var Qt=Zt,Xt=i(8128),ei={name:"App",components:{FilesColumnList:Qt,Dropdown:Bt},computed:{aFilteredListFiles(){return this.aFiles.filter((e=>~e.name.indexOf(this.sListFilterName)&&~e.human_size.indexOf(this.sListFilterSize)&&~e.created_at.indexOf(this.sListFilterCreatedAt)&&~e.updated_at.indexOf(this.sListFilterModified))).sort(((e,t)=>t[this.sListFilterColumn]<e[this.sListFilterColumn]?1*this.iListSortOrder:-1*this.iListSortOrder))}},methods:{fnSlectRepo(e,t){this.iActiveRepo=e,Ut.fnInit(t),this.fnResetPath(),this.fnSelectPath("/")},fnResetPath(){this.aFiles=[],this.aFilesColumns=[]},fnSelectPath(e){var t=this;t.aPath.push(e),t.aPath=t.aPath.filter((e=>e)),t.bShowLoader=!0,Ut.fnList("/"+this.aPath.join("/")).then((e=>{t.aFiles=e,t.aFilesColumns.push(e),t.bShowLoader=!1,setTimeout((()=>{t.$refs.files_list_wrapper&&(t.$refs.files_list_wrapper.scrollLeft=1e4)}),200)}))},fnClickFileItem(e,t){if("directory"==e.type)void 0!==t&&t<this.aFilesColumns.length-1&&(this.aFilesColumns.splice(t+1),this.aPath.splice(t+1)),this.fnSelectPath(e.name);else{void 0==t&&(t=this.aPath.length-1);var i=this.aPath.slice();i.splice(t+1),this.sSelectedFileName=e.name,this.iSelectedFileColumn=t,this.sSelectedFilePath=i.join("/"),this.sSelectedFile=this.sSelectedFilePath+"/"+this.sSelectedFileName;var s=this.sSelectedFileName.split(".").splice(-1),l=s[0]+"";l=l.toLowerCase();var a=this.aRepos[this.iActiveRepo];~this.aImagesTypes.indexOf(l)?(this.sPreviewShow="image","github"==a.type?a.url?this.sImagePath=a.url.replace(/\/+$/,"")+"/"+this.sSelectedFile.replace(/^\/+/,""):this.sImagePath=`https://raw.githubusercontent.com/${a.login}/${a.repo}/main/`+this.sSelectedFile:this.sImagePath=a.url+this.sSelectedFile.replace(/^\/+/,"")):~this.aPDFTypes.indexOf(l)?(this.sPreviewShow="pdf","github"==a.type?a.url?this.sPDFPath=a.url.replace(/\/+$/,"")+"/"+this.sSelectedFile.replace(/^\/+/,""):this.sPDFPath=`https://raw.githubusercontent.com/${a.login}/${a.repo}/main/`+this.sSelectedFile.replace(/^\/+/,""):this.sPDFPath=a.url.replace(/\/+$/,"")+"/"+this.sSelectedFile.replace(/^\/+/,"")):~this.aTextTypes.indexOf(l)?(this.sPreviewShow="code",this.bShowLoader=!0,Ut.fnReadFile(this.sSelectedFile).then((e=>{this.bShowLoader=!1,this.sCode=Xt.highlightAuto(e).value}))):this.sPreviewShow="binary"}},fnGoUp(){if(1!=this.aPath.length){var e=this.aFilesColumns.length-1,t=this.aPath[this.aPath.length-2];this.aFilesColumns.splice(e-1),this.aPath.splice(e-1),this.fnSelectPath(t)}},fnOpenPathByIndex(e){var t=this.aPath[e];this.aFilesColumns.splice(e),this.aPath.splice(e),this.fnSelectPath(t)},fnSaveRepo(){if(this.sFormName){var e={name:this.sFormName,login:this.sFormLogin,repo:this.sFormRepo,key:this.sFormKey,type:this.sFormType,url:this.sFormURL,username:this.sFormUsername,password:this.sFormPassword};-1==this.iEditIndex?this.aRepos.push(e):this.aRepos.splice(this.iEditIndex,1,e),localStorage.setItem("aRepos",JSON.stringify(this.aRepos)),this.iEditIndex=null}else alert("Надо заполнить поле - Название")},fnNewRepo(){this.iEditIndex=-1,this.sFormName="",this.sFormLogin="",this.sFormRepo="",this.sFormKey="",this.sFormType="github",this.sFormURL="",this.sFormUsername="",this.sFormPassword=""},fnEditRepo(e){this.iEditIndex=e,this.sFormName=this.aRepos[this.iEditIndex].name,this.sFormLogin=this.aRepos[this.iEditIndex].login,this.sFormRepo=this.aRepos[this.iEditIndex].repo,this.sFormKey=this.aRepos[this.iEditIndex].key,this.sFormType=this.aRepos[this.iEditIndex].type,this.sFormURL=this.aRepos[this.iEditIndex].url,this.sFormUsername=this.aRepos[this.iEditIndex].username,this.sFormPassword=this.aRepos[this.iEditIndex].password},fnRemoveRepo(e){this.aRepos.splice(e,1),localStorage.setItem("aRepos",JSON.stringify(this.aRepos))},fnCleanRepo(){this.aRepos=[],localStorage.setItem("aRepos",JSON.stringify(this.aRepos))},fnCancelRepo(){this.iEditIndex=null},fnCloseRepoWindow(){this.bShowEditRepoWindow=!1}},data(){var e=JSON.parse(localStorage.getItem("aRepos")||"[]");return{bShowLoader:!1,bShowBlocker:!1,bShowEditRepoWindow:!0,iSelectedFileColumn:null,sSelectedFilePath:null,sSelectedFile:null,sSelectedFileName:null,sListFilterName:"",sListFilterSize:"",sListFilterCreatedAt:"",sListFilterModified:"",sListFilterColumn:"name",iListSortOrder:1,sCode:"",sImagePath:"",sPDFPath:"",iEditIndex:null,iSelectedRepoIndex:null,sFormLogin:"",sFormRepo:"",sFormKey:"",sFormURL:"",sFormType:"github",sFilesListType:"column",sPreviewShow:"code",iGridPage:0,aRepoItemMenu:[{id:"edit",title:'<i class="bi bi-pencil"></i> Редактировать'},{id:"delete",title:'<i class="bi bi-trash"></i> Удалить'}],aRepoMenu:[{id:"reload",title:'<i class="bi bi-arrow-repeat"></i> Обновить'},{id:"add",title:'<i class="bi bi-plus-lg"></i> Добавить'}],aMenu:[],aPathHistory:[],iActiveRepo:null,aRepos:e,aPath:[],aFiles:[],aFilesColumns:[],aImagesTypes:["png","jpeg","jpg","gif","bmp","svg","avif"],aTextTypes:["txt","js","mjs","yml","css","php","py","sh","json","md"],aPDFTypes:["pdf"]}},created(){}};const ti=(0,Nt.Z)(ei,[["render",St]]);var ii=ti;(0,s.ri)(ii).mount("#app")}},t={};function i(s){var l=t[s];if(void 0!==l)return l.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,s,l,a){if(!s){var n=1/0;for(d=0;d<e.length;d++){s=e[d][0],l=e[d][1],a=e[d][2];for(var o=!0,r=0;r<s.length;r++)(!1&a||n>=a)&&Object.keys(i.O).every((function(e){return i.O[e](s[r])}))?s.splice(r--,1):(o=!1,a<n&&(n=a));if(o){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,l,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var l,a,n=s[0],o=s[1],r=s[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(l in o)i.o(o,l)&&(i.m[l]=o[l]);if(r)var d=r(i)}for(t&&t(s);c<n.length;c++)a=n[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},s=self["webpackChunkwapp_web_file_manager_vue"]=self["webpackChunkwapp_web_file_manager_vue"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(6708)}));s=i.O(s)})();
//# sourceMappingURL=app.829b4614.js.map