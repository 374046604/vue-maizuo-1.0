<template>
    <div id="detail" class="my_scroll" v-if="detail">
        <div>
            <div class="cover"><img :src="detail.cover.origin" alt="" style="width: 100%;"></div>
            <div class="desc">
                <div class="title">影片简介</div>
                <div class="info">
                    <p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{detail.director}}</p>
                    <p>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span v-for='item in detail.actors'>{{item.name}}</span></p>
                    <p>地区语言：{{detail.nation}}({{detail.language}})</p>
                    <p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{{detail.category}}</p>
                    <p>上映日期：{{detail.premiereAt|getDay}}</p>
                    <p class="p">{{detail.synopsis}}</p>
                </div>
            </div>
            <router-link v-if="detail.isNowPlaying" :to="{name:'cinema',params:{id:detail.id}}" class="go-pay">立即购票</router-link>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import iScroll from '../../static/js/iscroll-probe.js'

    export default {
        created: function () {
            // if(!this.detail){
            let id = this.$route.params.id;
            this.$store.dispatch('getFilmDetailId', id)
            // }
            setTimeout(function () {
                var myScroll = new iScroll('.my_scroll', {
                    scrollY: true, //竖直方向的滚动条
                    freeScroll: true,
                    probeType: 3,
                    mouseWheel: true,
                    bounce: true
                });
            }, 100)
        },
        filters: {
            getDay: function (time) {
                let date = new Date(time * 1),
                    year = date.getFullYear(),
                    month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
                    day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

                return year + '-' + month + '-' + day;
            }
        },
        computed: mapGetters({
            detail: 'getFilmDetails'
        })
    }

</script>
<style scoped>
    .my_scroll {
        height: 90%;
        width: 100%;
    }
    
    p {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis
    }
    
    .go-pay {
        width: 1.5rem;
        height: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
        background: #ff6600;
        margin: 0 auto;
        border-radius: 0.2rem;
        color: #000000;
        font-size: 0.16rem;
    }
</style>