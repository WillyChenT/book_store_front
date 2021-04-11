<template>
  <div class="box">
    <div>
      <ul class="content" v-for="(item, index) in chapterList" :key="item.id">
        <h1>{{ item.title }}</h1>
        <li
          class="sub_content"
          v-for="(item, subIndex) in chapterList[index].episode_list"
          :key="item.subIndex"
        >
          <span class="sub_title">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    chapterList: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
//外層邊距
.box {
  width: 100%;
  padding-bottom: 50px;
  margin: 15px 0;
  background-color: #fff;
}

//各章節
.content {
  padding: 10px;
  //標題
  & h1 {
    font-size: 16px;
    width: 100%;
    margin-bottom: 15px;
    font-weight: bolder;
    //標題過長，自動省略
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

//各節
.sub_content {
  font-size: 12px;
  padding: 10px 0;
  //各節
  .sub_title {
    //標題過長，自動省略
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>