<template>
    <div id='header' class="header" ref="header">
        <div class="menu" @click="getMenus">
            目录
        </div>
        <div class="title">
            {{getTitleName}}
            <i class="city">上海</i>
        </div>
        <div class="menu" @click="goUser">
            用户
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
    export default {
        name: 'header',
        props:['menuIsOk'],
        methods: {
            goUser() {
                this.$router.push('/user')
            },
            getMenus(){
                this.$store.dispatch('getMenu')
            }
        },
        computed: {
            ...mapGetters(['getTitleName'])
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        display: flex;
        z-index: 10;
        justify-content: space-between;
        height: 0.5rem;
        background: #000000;
        color: #ffffff;
        font-size: 0.16rem;
        line-height: 0.5rem;
        width: 100%;
    }
    
    .header>.menu {
        margin: 0 20px;
    }
    
    .header .title {
        flex-grow: 5;
        text-align: left;
    }
    
    .header .city {
        float: right;
    }
</style>