<template>
  <div 
    class="wrapper"
  >
    <!-- <div class="modes-panel">
      <a v-for="oMenuItem in aMenu" :key="oMenuItem.class" :class="(sCurrentMode==oMenuItem.class ? 'btn-primary' : '') + ' btn '+oMenuItem.class" :title="oMenuItem.title" @click="fnMenuItemClick(oMenuItem)"><i :class="'bi '+oMenuItem.icon"></i></a>
    </div> -->
    <div v-show="iActiveRepo === null" class="blocker"></div>

    <div class="account-panel">
      <!-- Репозитории -->
      <div class="account-control-panel">
        <input type="text" class="form-control" />
        <Dropdown/>
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
              type="button" class="list-group-item list-group-item-action file-grid-item" aria-current="true"
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
              class="list-row"
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
      <div class="files-list-wrapper" v-if="sFilesListType=='column'">
        <div class="files-list-wrapper_box">
          <div 
            v-for="(aFileColumn, iIndex) in aFilesColumns" :key="aFileColumn"
            class="list-group files-list"
          >
            <button 
                v-for="oFile in aFileColumn" :key="oFile"
                type="button" :class="'list-group-item list-group-item-action file-item '+(oFile.name==aPath[iIndex+1] ? 'active' : '')"
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
      <div class="code-preview" v-show="sPreviewShow=='code'"></div>
      <div class="image-preview" v-show="sPreviewShow=='image'"></div>
    </div>
  </div>

  <div v-show="bShowLoader" class="loader">
    <div class="center">
      <div class="lds-dual-ring"></div>
    </div>
  </div>
  
</template>

<script>

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
      this.aPath.push(sPath)
      this.bShowLoader = true
      FileSystemDriver
        .fnList("/"+this.aPath.join("/"))
        .then((aList) => {
          this.aFiles = aList
          this.aFilesColumns.push(aList)
          this.bShowLoader = false
          console.log(aList)
        })
    },
    fnClickFileItem(oFile, iColumnIndex) {
      console.log('>>',[iColumnIndex, this.aFilesColumns.length]);
      if (iColumnIndex !== undefined && iColumnIndex<this.aFilesColumns.length-1) {
        this.aFilesColumns.splice(iColumnIndex+1)
        this.aPath.splice(iColumnIndex+1)
      }
      if (oFile.type == 'directory') {
        this.fnSelectPath(oFile.name)
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
      console.log([sPath, iColumnIndex-1, this.aFilesColumns, this.aPath])
      this.fnSelectPath(sPath)
    },
    fnOpenPathByIndex(iI) {
      var sPath = this.aPath[iI]
      this.aFilesColumns.splice(iI)
      this.aPath.splice(iI)
      console.log([sPath, this.aFilesColumns, this.aPath])
      this.fnSelectPath(sPath)
    },
    
  },

  data() {
    return {
      bShowLoader: false,
      bShowBlocker: false,

      sFilesListType: "column",
      sPreviewShow: "code",

      sSelectedFilePath: "",

      iGridPage: 0,

      aMenu: [],

      aPathHistory: [],

      iActiveRepo: null,
      aRepos: aRepos,

      aPath: [],
      aFiles: [],
      aFilesColumns: []
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
