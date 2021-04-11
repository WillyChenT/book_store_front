<template>
  <div>
    <common-header :titleLabel="titleLabel"></common-header>
    <div class="main">
      <cube-form :model="model" @submit="submitHandler">
        <cube-form-group>
          <!-- 手機 -->
          <cube-form-item :field="fields[0]"></cube-form-item>
          <!-- 密碼 -->
          <cube-form-item :field="fields[1]"></cube-form-item>
        </cube-form-group>

        <cube-form-group>
          <cube-button type="submit" class="cube-btn">登入</cube-button>
        </cube-form-group>
      </cube-form>

      <router-link to="/register" class="reg">註冊</router-link>
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import {loginApi} from "@/api/getData.js";
export default {
    components: { 
        CommonHeader 
    },data(){
        return{
            titleLabel:"登入",
            model:{
                phoneValue:"",
                pwdValue:""
            },
            fields: [{
                type:"input",
                modelKey: "phoneValue",
                label: "手機",
                props:{
                    placeholder:"請輸入手機",
                },
                rules:{
                    required:true
                },
                message:{
                    required: "手機不能為空"
                }
            },{
                type:"input",
                modelKey: "pwdValue",
                label:"密碼",
                props:{
                    placeholder:"請輸入密碼",
                    type: "password",
                    eye: {
                        open: false,
                    },
                },
                rules:{
                    required:true
                },
                message:{
                    required:"密碼不能為空"
                }   
            }]
        }       
    },
    methods:{
        submitHandler(e,model){
            e.preventDefault(); //習慣加上，防止其他默認提交
            //呼叫登入
            loginApi(model.phoneValue,model.pwdValue).then((request) =>{
                if(request.data.code ===200){
                    //寫入token
                    localStorage.setItem("token", request.data.data);

                    this.$store.dispatch("setToken", request.data.data);
                    this.$router.push({path: "/" });
                }else{
                    const toast = this.$createToast({
                        txt:"登入失敗",
                        type:"error",
                        time:1500
                    })
                    toast.show();
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    padding: 50px 5% 0;
    text-align: center;
}
.cube-btn {
    margin-top: 20px;
}
.reg {
    display: inline-block;
    margin-top: 30px;
    font-size: 18px;
}
</style>