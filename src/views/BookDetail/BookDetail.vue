<template>
    <div>
        <common-header :titleLabel="bookInfo.title"></common-header>
        <book :bookInfo="bookInfo"></book>
        <tab :bookInfo="bookInfo" :chapterList="chapterList"></tab>
        <footer>
            <router-link :to="{path:'/pay',query:{book_id:this.$route.query.book_id}}" class="buy">
            <button>立即購買</button>
            </router-link>
        </footer>
    </div>
</template>

<script>
import {getBookDetail} from "@/api/getData.js"
import CommonHeader from "@/components/CommonHeader";
import Book from "./Components/Book";
import Tab from "./Components/Tab";
export default {
    components:{
        CommonHeader,
        Book,
        Tab
    },data(){
        return{
            //書籍資訊
            bookInfo:{},
            //章節內容
            chapterList:[]
        };
    },
    methods:{
        async getBookDetail(id){
            try{
                const result = await getBookDetail(id);
                if(result.data.code==200){
                    this.bookInfo = result.data.data;
                    this.chapterList = result.data.data.chapter_list;
                }
            }catch(error){
                console.log(error);
            }
        }
    },
    mounted(){
        this.getBookDetail(this.$route.query.book_id);
    }
    
}
</script>
<style lang="scss" scoped>
footer{
    position:fixed; ////固定底部
    bottom: 0; 
    width: 100%;
    padding: 8x 0;
    background-color: #fff;
    z-index: 999;//保持置頂
    box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.2);
}
button{
    display: block;
    color:#fff;
    background-color: #d93f30;
    margin:0 auto;
    height: 32px;
    width: 80%;
    line-height: 32px;
    border-radius: 18px;
    border:0;
    font-size: 16px;
    text-align: center;
}
</style>