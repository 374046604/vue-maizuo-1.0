<template>
    <div id='film' class="film">
        <div>
            <ul class="nav">
                <li @click="changeTab('now-playing')" :class="{'isOn':type==='now-playing'}">
                    <a>正在上映</a>
                </li>
                <li @click="changeTab('coming-soon')" :class="{'isOn':type==='coming-soon'}">
                    <a>即将上映</a>
                </li>
            </ul>
            <ul class="now_play" v-if="type=='now-playing'">
                <router-link v-for="(item,index) in getNowPlayList" :to="{name:'cinema',params:{id:item.id}}">
                    <li class="now_item" :index=index >
                        <!--<img :src=item.poster.thumbnail>-->
                        <div class="avater"><img :src="item.poster.thumbnail" alt=""></div>
                        <div class="info">
                            <h3>{{item.name}}</h3>
                            <p>{{item.intro}}</p>
                            <p class="about">
                                <span>{{item.cinemaCount}}</span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{{item.watchCount}}</span>人购票
                            </p>
                        </div>
                        <div class="count">{{item.grade}}</div>
                    </li>
                </router-link>
            </ul>
            <ul class="com_list" v-if="type=='coming-soon'">
                <router-link v-for="(item,index) in getComingList" :to="{name:'cinema',params:{id:item.id}}">
                    <li class="now_item" :index=index >
                        <!--<img :src=item.poster.thumbnail>-->
                        <div class="avater"><img :src="item.poster.thumbnail" alt=""></div>
                        <div class="info">
                            <h3>{{item.name}}</h3>
                            <p>{{item.intro}}</p>
                            <p class="about">
                                <span>{{item.cinemaCount}}</span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{{item.watchCount}}</span>人购票
                            </p>
                        </div>
                        <div class="count">{{item.grade}}</div>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import iScroll from '../../static/js/iscroll-probe.js'
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
    export default {
        name: 'film',
        data() {
            return {
                type: null,
                listItem: 0
            }
        },
        created() {
            //获取 URL 的值
            var _this = this;
            this.type = this.$route.params.type
            if (this.type === 'now-playing') {
                this.$store.commit('SET_TITLE_NAME', '卖座的电影');
            } else if (this.type === 'coming-soon') {
                this.$store.commit('SET_TITLE_NAME', '即将上映的电影')
            }
            //调用getters 去ajax数据
            console.log(this.getNowPlayList.length)
            if (this.getNowPlayList.length == 0) {
                this.$store.dispatch('getNowPlayListAct')
            }
            // if (this.getComingList.length == 0) {
            console.log('读取banner1')
            this.$store.dispatch('getComingListAct')
            // }
            setTimeout(function () {
                var myScroll = new iScroll('.film', {
                    scrollY: true, //竖直方向的滚动条
                    freeScroll: true,
                    probeType: 3,
                    mouseWheel: true,
                    bounce: true
                });
                _this.thisScroll = myScroll
                myScroll.on('scroll', function () {
                    //往下划了一段距离
                });
                myScroll.on('scrollEnd', function () {
                    //距离下面50
                    if (this.y < this.maxScrollY + 50) {
                        if (_this.type === 'now-playing') {
                            _this.$store.dispatch('getNowPlayListAct')
                        } else if (_this.type === 'coming-soon') {
                            _this.$store.dispatch('getComingListAct')
                        }
                    }
                    //刷新 重新计算
                    myScroll.refresh();
                });
            }, 300)
        },
        computed: {
            ...mapGetters(['getComingList','getNowPlayList'])
        },
        methods: {
            changeTab(tab) {
                if (tab == this.type) {
                    return false;
                }
                this.type = tab;
                this.$router.replace(tab);
            },
        }


    }

</script>

<style scoped>
    .film {
        width: 100%;
        height: 100%;
    }
    
    .nav {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #ff6600;
    }
    
    .nav>li {
        width: 50%;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.15rem;
    }
    
    .nav>li>a {
        display: inline-block;
        width: auto;
        line-height: 0.4rem
    }
    
    .isOn {
        color: #ff6600;
        border-bottom: 4px solid #ff6600;
    }
    
    .now_play,
    .com_list {
        padding: 0.1rem;
    }
    
    .now_play .avater>img,
    .com_list .avater>img {
        width: 0.6rem;
        height: 0.8rem;
        margin: 0.1rem
    }
    
    .now_play .now_item,
    .com_list .now_item {
        display: flex;
        text-align: left;
        padding: 0.1rem;
        border-bottom: 1px dashed #8e8e8e;
    }
    
    .now_play .now_item .info,
    .com_list .now_item .info {
        color: #8e8e8e;
        flex: 3;
        padding-top: 0.10rem;
        margin-left: 0.1rem
    }
    
    .now_play .now_item .info .about,
    .com_list .now_item .info .about {
        padding-top: 0.1rem;
        display: flex;
    }
    
    .now_play .now_item .count,
    .com_list .now_item .count {
        width: 0.4rem;
        font-size: 0.2rem;
        color: #ff6600;
        padding-top: 0.1rem
    }
</style>