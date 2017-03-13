<template>
    <div id='menu' class="menu" :class="{'toRight':isMenuOks}" ref="menu">
        <ul class="lists">
            <li class="item" v-for="(item,index) in list" @click="getMenus">
                <router-link :to=item.path>
                {{item.name}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
    export default {
        name: 'menu',
        props: ['menuIsOk'],
        data: function () {
            return {
                list: [{ path: '/home', name: '首页' },
                { path: '/film/now-playing', name: "正在热映" },
                { path: '/film/coming-soon', name: '即将上映' },
                { path: '/user', name: '个人中心' }],
            }
        },
        methods: {
            getMenus(){
                this.$store.dispatch('getMenu')
            }
        },
        computed: {
            ...mapGetters(['isMenuOks'])
        }
    }

</script>

<style scoped>
    .menu {
        position: absolute;
        z-index: 10;
        width: 3rem;
        height: 100%;
        background: #333;
        color: #fff;
        font-size: 0.2rem;
        line-height: 0.5rem;
        transition: all 0.5s;
        transform: translateX(-3rem);
    }
    .active {
        margin-left: 5px;
    }
    .menu.toRight {
        transform: translateX(0rem);
    }
    
    .menu .lists {
        width: 3rem;
    }
    
    .menu .lists>li {
        border-bottom: 1px solid #9a9a9a;
        padding-left: 0.2rem;
        color: #fff;
    }
    .menu .lists>li>a {
        color: #fff;
        font-size: 0.16rem;
    }
</style>