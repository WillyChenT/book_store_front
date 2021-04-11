<template>
    <div>
        <img class="introduction" :src="bookInfo.introduction"/>
    </div>
</template>

<script>
export default {
    props:{
        bookInfo:{
            type:Object,
            required:true
        }
    }
}
</script>

<style lang="scss" scoped>
.introduction{
    width: 100%;
    padding-bottom: 50px;
    margin:15px 0;
}
</style>