<template>
    <div class="mask" v-show="isMenuOks">
    </div>
</template>
<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
    export default {
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['isMenuOks'])
        }
    }

</script>
<style scoped>
.mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 5;
}
</style>