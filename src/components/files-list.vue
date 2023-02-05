<template>
    <button 
        v-for="oFile in aFiles" :key="oFile"
        type="button" :class="'list-group-item list-group-item-action file-item'+(oFile.name==sSelectedDir ? 'active' : '')"
        @click="fnItemClick(oFile, iColumnIndex)"
    >
        <span v-show="oFile.type=='directory'" class="icon"><i class="bi bi-folder-fill"></i></span> 
        <span v-show="oFile.type=='file'" class="icon"><i class="bi bi-file-earmark-text-fill"></i></span> 
        {{oFile.name}}
    </button>
            
</template>

<script>
export default {
    name: 'TestFiles',

    emits: ['clickitem'],

    props: [
        'files',
        'columnindex',
        'selecteddir'
    ],

    methods: {
        fnItemClick(oItem) {
            this.$emit('clickitem', oItem)
        }
    },

    computed: {
        aFiles() {
            return this.files
        },
        iColumnIndex() {
            return this.columnindex
        },
        sSelectedDir() {
            return this.selecteddir
        }
    }
}
</script>

<style>

</style>