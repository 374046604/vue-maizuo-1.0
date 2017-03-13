<template>
    <div class="loading">
        <div class="logo">
            
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }

</script>
<style scoped>
.loading {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #333;
    padding-top: 100px;
    z-index: 10;
}
.logo{
    width: 80%;
    height: 100%;
    margin-left: 10%;
    background: url('../../static/img/loading.gif') no-repeat;
    background-size: 100%;
}
</style>