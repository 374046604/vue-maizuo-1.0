<template>
    <div id='pack'>
        <v-header></v-header>
        <v-menu></v-menu>
        <v-loading v-show="isLoading"></v-loading>
        <v-mask></v-mask>
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import vHeader from '../components/header'
    import vMenu from '../components/menu'
    import vLoading from '../components/loading'
    import vMask from '../components/mask.vue'
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

    export default {
        name: 'pack',
        data() {
            return {
                isLoading: true,
                transitionName:'slide-right'
            }
        },
        components: {
            vHeader, vMenu, vLoading, vMask
        },
        created: function () {
            let _this = this
            setTimeout(function () {
                _this.isLoading = false
            }, 2000);
        },
        methods: {
            toTop() {

            }
        },
        computed: {
            ...mapGetters(['goTopTypes'])
        },
        watch: {
            '$route'(to, from) {
                console.log(from.path)
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                console.log('xx')
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
            }
        }
    }

</script>

<style scoped>
    #pack {
        width: 100%;
        height: 100%;
    }
    
    .slide-left-enter,
    .slide-right-leave-active {
        transition: all 0.5s;
        opacity: 0;
        transform: translate(1000px, 0);
    }
    
    .slide-left-leave-active,
    .slide-right-enter {
        transition: all 0.5s;
        opacity: 0;
        transform: translate(-1000px, 0);
    }
</style>