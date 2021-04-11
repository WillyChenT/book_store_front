<template>
  <div>
    <cube-tab-bar v-model="selectedLabel" show-slider>
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
      </cube-tab>
    </cube-tab-bar>

    <component :bookInfo="bookInfo" :chapterList="chapterList" :is='selectedLabel==="簡介"?"Introduction":"Catalogue"'/>
  </div>
</template>

<script>
import Introduction from './Introduction'
import Catalogue from './Catalogue'

export default {
    components:{
        Introduction,
        Catalogue
    },

    props:{
        bookInfo:{
            type:Object,
            required:true
        },
        chapterList:{
            type:Array,
            required:true
        }
    },

    data(){
        return{
            selectedLabel:"簡介",
            tabs:[
                {
                    label:"簡介"
                },{
                    label:"目錄"
                }
            ]
        }
    }
}
</script>