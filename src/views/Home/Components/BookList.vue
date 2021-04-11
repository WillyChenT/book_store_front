<template>
    <div class="list-content">
        <div class="list">
            <router-link v-for="item in bookList" :key="item.id" :to="{path:'/bookdetail', query:{book_id:item.id}}" class="book">
                <div class="item_img">
                    <img :src="item.img"/>
                </div>
                <div class="book_info">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="price">
                        $ {{item.price}}
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bookList:{
            type:Array,
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
//邊距
.list-content {
  margin-top: 20px;
  padding: 0 13px;
}
//列表
.list {
  display: flex; //宣告flex
  flex-wrap: wrap; //换行排列
  justify-content: space-between; //對齊
  padding-bottom: 55px;
}
.book {
  width: 48%;
  margin-bottom: 18px;
}
.item_img {
  box-shadow: 0 4px 11px 0 rgba(43, 51, 59, 0.6); //方塊陰影
  border-radius: 8px; //卡片圓角
  text-align: center;
  img {
    width: 60%;
    border-radius: 8px;
  }
}
.title {
  //字串過長隱藏 start
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  //字串過長隱藏 end
  font-size: 12px;
  height: 26px;
  line-height: 14px;
  margin-top: 10px;
  color: #2b333b;
}
//價格
.price {
  margin-top: 8px;
  font-size: 12px;
  color: #d93f30;
}
</style>