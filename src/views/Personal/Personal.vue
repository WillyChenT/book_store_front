<template>
    <div>
        <common-header :titleLabel="titleLabel"></common-header>

        <div class="container">
            <div class="p_top">
                <div>
                    <img :src='info.head_img || defaultHeadImg' alt="人像"/>
                    <router-link to="/login" v-if ="getToken ===''">
                        <p>立即登入</p>
                    </router-link>
                    <p v-else>{{info.name}}</p>
                </div>
            </div>
            <button v-if="getToken !=''" class="green" @click="signOut">
                登出
            </button>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
import {getUserInfo} from '@/api/getData.js'
import defaultHeadImg from '@/assets/defPerson.png'
export default {
    components: { 
      CommonHeader, 
      CommonFooter 
    },
    data(){
        return{
            titleLabel:"會員中心",
            info:{},
            defaultHeadImg:defaultHeadImg
        }
    },
    computed:{
        getToken(){
            return this.$store.state.token
        }
    },
    methods:{
        async getInfo(){
            try{
                const result = await getUserInfo(this.getToken);
                if(result.data.code===200){
                    this.info = result.data.data;
                }
            }catch(error){
                console.log(error)
            }
        },
        async signOut(){
            await this.$store.dispatch('');
            localStorage.removeItem("token");
            location.reload();
        }
    },
    mounted(){
        if(this.getToken){
            this.getInfo();   
        }
    }
    
}
</script>

<style lang="scss" scoped>
.container {
  //頂部卡片
  .p_top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background-color: #2c3f54;
    div {
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50px;
      }
      p {
        font-size: 16px;
        color: #fff;
        margin-top: 10px;
      }
    }
  }
}
//登出
.green {
  display: block;
  background-color: #3bb149;
  border: none;
  outline: none;
  width: 80%;
  height: 40px;
  margin: 20px auto 0;
  color: #fff;
  border-radius: 20px;
}
</style>