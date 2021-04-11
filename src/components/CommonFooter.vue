<template>
  <div class="tab">
    <cube-tab-bar
      v-model="selectedLabelSlots"
      show-slider
      useTransition
      @click="clickHandler"
    >
      <cube-tab
        v-for="item in tabs"
        :label="item.label"
        :icon="item.icon"
        :key="item.label"
        :value="item.path"
      >
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelSlots: "/",
      tabs: [
        {
          label: "首頁",
          icon: "cubeic-home",
          path: "/",
        },
        {
          label: "我的訂單",
          icon: "cubeic-vip",
          path: "/order",
        },
        {
          label: "會員中心",
          icon: "cubeic-person",
          path: "/personal",
        },
      ],
    };
  },
  methods: {
    clickHandler(path) {
      //判斷路徑不同
      if (path != this.$route.path) {
        //設置跳轉新路徑
        this.$router.push(path);
      }
    },
    created() {
      //刷新頁面後，設置選擇項目
      this.selectedLabelSlots = this.$route.path;
    },
  },
  mounted() {
    //初始化呼叫
    this.created();
  },
};
</script>

<!--用scss高性能樣式 透過scoped鎖定作用當前component-->
<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
  font-size: 16px;
}
.cube-tab_active {
  color: #3bb149;
}
</style>