<template>
  <div>
    <common-header :titleLabel="titleLabel"></common-header>

    <div class="info">
      <p class="info_title">商品資訊</p>
      <div class="box">
        <div class="imgdiv">
          <img :src="bookInfo.img" alt="商品圖片" />
        </div>
        <div class="textdiv">
          <p class="title">{{ bookInfo.title }}</p>
          <p class="price">價格: ${{ bookInfo.price }}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <p class="total">總金額:{{ bookInfo.price }}</p>
      <p class="sumbit" @click="pay">結帳</p>
    </div>
  </div>
</template>



<script>
import CommonHeader from "@/components/CommonHeader"
import {getBookDetail,saveOrder} from "@/api/getData.js"
export default {
    components:{
        CommonHeader
    },data(){
        return{
            titleLabel:"結帳",
            bookInfo: {}
        }
    },methods:{
        async getDetail(id){
            try{
                const result = await getBookDetail(id);
                if(result.data.code===200){
                    this.bookInfo = result.data.data;
                }
            }catch(error){
                console.log(error);
            }
        },
        async pay(){
            try{
                const result = await saveOrder(this.$store.state.token,this.$route.query.book_id);
                
                if(result.data.code===200){
                    const toast = this.$createToast({
                        txt:"購買成功",
                        type:"success",
                        time:2000,
                        onTimeout:()=>{
                            this.$router.push({path:"order"});
                        }
                    })
                    toast.show();
                }else{
                    const toast = this.$createToast({
                        txt: result.data.msg,
                        type:"error",
                        time:1500,
                    })
                    toast.show();
                }
            }catch(error){
                console.log(error);
            }
        }
    },mounted(){
        this.getDetail(this.$route.query.book_id);
    }
}
</script>

<style lang="scss" scoped>
.info_title{
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #d9dde1;
}
.box{
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
.textdiv{
    margin-left: 20px;   
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height:50px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.2);
    font-size:16px;
}
.total{
    height: 50px;
    line-height: 50px;
    flex: 2;
    text-align: center;
}
.sumbit{
    height: 50px;
    line-height: 50px;
    flex: 1;
    text-align: center;
    background-color: #ff2d50;
    color: #fff;
}
</style>