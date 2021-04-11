<template>
  <div>
    <common-header :titleLabel="titleLabel"></common-header>
    <div class="main">
      <cube-form :model="model" @submit="submitHandler">
        <cube-form-group>
          <!-- 名稱 -->
          <cube-form-item :field="fields[0]"></cube-form-item>
          <!-- 手機 -->
          <cube-form-item :field="fields[1]"></cube-form-item>
          <!-- 密碼 -->
          <cube-form-item :field="fields[2]"></cube-form-item>
        </cube-form-group>

        <cube-form-group>
          <cube-button type="submit" class="cube-btn">註冊</cube-button>
        </cube-form-group>
      </cube-form>

      <router-link to="/login" class="reg">登入</router-link>
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import { registerApi } from "@/api/getData.js";
export default {
  components: {
    CommonHeader,
  },
  data() {
    return {
      titleLabel: "註冊",
      model: {
        nameValue: "",
        phoneValue: "",
        pwdValue: "",
      },
      fields: [
        {
          type: "input",
          modelKey: "nameValue",
          label: "名稱",
          props: {
            placeholder: "請輸入名稱",
          },
          rules: {
            required: true,
          },
          message: {
            required: "名稱不能為空",
          },
        },
        {
          type: "input",
          modelKey: "phoneValue",
          label: "手機",
          props: {
            placeholder: "請輸入手機",
          },
          rules: {
            required: true,
          },
          message: {
            required: "手機不能為空",
          },
        },
        {
          type: "input",
          modelKey: "pwdValue",
          label: "密碼",
          props: {
            placeholder: "請輸入密碼",
            type: "password",
            eye: {
              open: false,
            },
          },
          rules: {
            required: true,
          },
          message: {
            required: "密碼不能為空",
          },
        },
      ],
    };
  },
  methods: {
    submitHandler(e, model) {
      e.preventDefault();
      //呼叫註冊
      registerApi(model.nameValue, model.phoneValue, model.pwdValue).then(
        (request) => {
          if (request.data.code === 200) {
            const toast = this.$createToast({
              txt: "註冊成功",
              type: "correct",
              time: 1500,
            });
            toast.show();
          }
        }
      );
    },
  },
};
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