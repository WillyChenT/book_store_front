<template>
    <div class="main">
        <common-header :titleLabel="titleLabel"></common-header>
        <div class="list" v-if="orders.length>0">
            <div class="box" v-for="(item,index) of orders" :key="index">
                <router-link :to="{path: '/bookDetail', query:{book_id: item.book_id}}">
                    <div class="subBox">
                        <div class="imgdiv">
                            <img :src="item.book_img" alt="商品圖片" />
                        </div>
                        <div class="textdiv">
                            <p class="title">{{ item.book_title }}</p>
                            <p class="price">價格: ${{ item.total_fee }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div clas="no_order" v-else>
            <p>尚未購買任何書籍</p>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
import {getOrderList} from "@/api/getData.js"
import CommonFooter from "@/components/CommonFooter"
import CommonHeader from "@/components/CommonHeader"
export default {
    components: {
        CommonHeader, 
        CommonFooter 
    },data(){
        return{
            titleLabel:"我的訂單",
            orders:[]
        }
    },
    methods:{
        async getOrderList(){
            try{
                const result = await getOrderList(this.$store.state.token);
                if(result.data.code===200){
                    this.orders = result.data.data || [];
                }
            }catch(error){
                console.log(error);
            } 
        }
    },
    mounted(){
        this.getOrderList();
    }
    
}
</script>

<style lang="scss" scoped>
.list {
  padding: 0 20px;
}
.box {
  padding: 20px 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  // 标题
  .title {
    font-size: 14px;
    margin-bottom: 15px;
  }
    .subBox{
        margin-top: 10px;
        box-sizing: border-box;   
        padding: 20px;
        display: flex;
        .imgdiv{
            width:20%;
            // flex-shrink: 0;
            img{
                width:100%;
                height:100%;
            }
        }
    }
    .textdiv p{
        margin-left: 20px;   
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

.no_order {
  margin-top: 50px;
  text-align: center;
}
</style>