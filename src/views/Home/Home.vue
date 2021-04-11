<template>
    <div>
        <home-banner :banners="banners"></home-banner>
        <book-list :bookList="bookList"></book-list>
        <common-footer></common-footer>
    </div>
</template>

<script>

import {getBanner,getBookList} from "@/api/getData.js";
import HomeBanner from "./Components/Banner";
import BookList from './Components/BookList.vue';
import CommonFooter from "@/components/CommonFooter";

export default {
    components:{
        HomeBanner,
        CommonFooter,
        BookList
    },
    data(){
        return{
            banners:[],
            bookList:[]   
        }
    },
    methods:{
        async getBannerData(){
            try{
                const result = await getBanner();
                if(result.data.code==200){
                    this.banners = result.data.data;
                }
            }catch(error){
                console.log(error);
            }
        },
        async getBookList(){
            try{
                const result = await getBookList();
                if(result.data.code==200){
                    this.bookList = result.data.data;
                }
            }catch(error){
                console.log(error);
            }
        }
    },
    mounted(){
        this.getBannerData();
        this.getBookList();
    }

}
</script>

<style lang="scss" scoped>
</style>