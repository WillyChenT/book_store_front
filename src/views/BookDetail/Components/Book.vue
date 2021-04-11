<template>
    <div class="wapper">
        <div class="book">
            <div class="l_img">
               <img :src="bookInfo.img" :title="bookInfo.title"/>
            </div>
            <div class="r_text">
                <div class="text">
                    <span>評分: </span>
                    <p>{{bookInfo.point}}</p>
                </div>
                <div class="text">
                    <span>定價: </span>
                    <p>$ {{bookInfo.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        bookInfo:{
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
//外層間
.wrapper{
    padding: 0 14px;
}
.book{
    margin: 14px 0;
    display: flex;
}
.l_img{
    height: 88px;
    margin-left: 5px;
    margin-right: 20px;
    & img{
        height: 100%;
        border-radius: 15px;
    }
}
.r_text{
    padding: 6px 0;
    font-size: 12px;
    flex: 1; //設為1 自動伸縮空間
}
.text{
    display: flex;
    justify-content: space-between;
    line-height: 16px;
    & p{
        text-align: center;
        width: 40%;
        color: #3bb149;
    }
    & i{
        color: #666;
        font-weight: bolder;
        width: 60%;
        & span{
            color: #2b333b;
            font-size: 12px;
        }
    }

}

</style>