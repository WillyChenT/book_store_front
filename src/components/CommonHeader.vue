<template>
    <div>
        <header>
            <div class="header">
                <span @click="$router.back(-1)"><i class="cubeic-back"/></span>
                <div class="title">{{titleLabel}}</div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props:{
        titleLabel:{
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex; //flex左右布局
  background-color: #07111b;
  padding: 10px 20px;
  color: #fff;
}
//箭頭樣式
.cubeic-back {
  color: #fff;
  margin-right: 5px;
}
///標題
.title {
  font-size: 18px;
  width: 80%;
  //超出省略
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>