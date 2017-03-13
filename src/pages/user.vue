<template>
    <div id='user' class="user">
        <ul class="form">
            <li class="form-group"><input type="text" v-model="user" placeholder="输入手机号/邮箱"></li>
            <li class="form-group"><input type="text" v-model="psw" placeholder="输入密码/验证码"></li>
            <li class="form-group" v-show="isRegister"><input type="text" placeholder="再输入密码/验证码"></li>
        </ul>
        <div class="buttons clear">
            <button class="login" @click="goLogin">登录</button>
            <button class="register" @click="goRegister">注册</button>
        </div>
        <div v-show="showLoginType">
            <h3 v-show="getLoginOk">恭喜你登录成功</h3>
            <h3 v-show="!getLoginOk">用户名或密码错误</h3>
        </div>

    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
    export default {
        name: 'user',
        data: function () {
            return {
                isRegister: false,
                user: '',
                psw: '',
                showLoginType: false
            }
        },
        created() {
        },
        computed: {
            //声明一个方法显示数据
            ...mapState(["loginOk"]),
            ...mapGetters(["getLoginOk"]),
        },
        methods: {
            ...mapActions(['isUsers']),
            goLogin() {
                let _this = this
                let userObj = [this.user, this.psw]
                this.$store.dispatch('isUsers', userObj)
                setTimeout(function () {
                    _this.showLoginType = true
                }, 2000);
            },
            goRegister() {
                this.isRegister = !this.isRegister;
            }
        },
        watch: {
            getLoginOk: function () {
                if (this.getLoginOk) {
                    this.$router.push('/home')
                }
            }
        }

    }

</script>

<style scoped>
    .user {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
    }
    
    .user .form {
        padding: 0 50px;
        margin-top: 0.5rem;
    }
    
    .user .form-group {
        margin-bottom: 0.1rem;
        width: 100%;
        border: 1px solid #333;
        height: 0.4rem;
    }
    
    .user .form-group>input {
        width: 100%;
        padding: 0 0.1rem;
        line-height: 0.4rem;
    }
    
    .user .buttons {
        width: 3rem;
        padding-left: 0.2rem;
        margin-right: auto;
        margin-left: auto;
    }
    
    .user .buttons>button {
        float: left;
        margin-right: 0.2rem;
        width: 1.2rem;
        height: 0.5rem;
        background: #fe8233;
        color: #000;
        border-radius: 0.25rem;
    }
</style>