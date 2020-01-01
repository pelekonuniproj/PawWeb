<template>
    <div class="row mt-5">
        <div class="col-3 offset-2">
            <label class="login-title-label">Zaloguj się</label>
            <form>
                <div class="form-group">
                    <label class="login-label" for="inputLoginLogin">Login</label>
                    <input type="text" class="form-control" id="inputLoginLogin" placeholder="Wpisz swój login" v-model="userName">
                </div>
                <div class="form-group">
                    <label class="login-label" for="inputLoginPassword">Hasło</label>
                    <input type="password" class="form-control" id="inputLoginPassword" placeholder="Wpisz swoje hasło" v-model="pass">
                </div>
                <button type="button" class="btn btn-info login-button" v-on:click="tryLoggingIn">Zaloguj</button>
            </form>
        </div>
        <div class="col-4 offset-1">
            <label class="login-title-label">Zarejestruj</label>
            <form action="">
                <div class="form-group">
                    <label class="login-label" for="inputRegistrationLogin">Login</label>
                    <input type="text" class="form-control" id="inputRegistrationLogin" aria-describedby="emailHelp" v-model="newUserName" placeholder="Wpisz swój login">
                </div>
                <div class="form-group">
                    <label class="login-label" for="inputRegistrationPassword">Hasło</label>
                    <input type="password" class="form-control" id="inputRegistrationPassword" v-model="password" placeholder="Wpisz swoje hasło">
                </div>
                <div class="form-group">
                    <label class="login-label" for="inputRegistrationRepeatedPassword">Powtórz hasło</label>
                    <input type="password" class="form-control" id="inputRegistrationRepeatedPassword" v-model="repeatedPassword" placeholder="Powtórz swoje hasło">
                </div>
                <button type="button" class="btn btn-info login-button" v-on:click="registerUser">Zarejestruj</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { ApiClient } from '../Api/ApiClient'
    import { UserStore } from '../DataHolders/User'

    export default {
        name: 'LoginPage',
        components: {
        },

        data: () => ({
            userName: "",
            pass: "",
            newUserName: "",
            password: "",
            repeatedPassword: ""
        }),

        methods: {
            tryLoggingIn() {
                var self = this
                ApiClient.loginUser(this.userName, this.pass, function(response){
                    UserStore.setToken(response.access_token)
                    UserStore.setUserName(self.userName)
                    /* eslint-disable no-console */
                    console.log("On login success");
                    /* eslint-enable no-console */
                    self.forwardToMainPage()
                }, function(){
                    /* eslint-disable no-console */
                    console.log("On login fail");
                    /* eslint-enable no-console */
                })
            },

            registerUser() {

                if (this.password.length >= 3) {

                    if (this.password === this.repeatedPassword) {
                        ApiClient.registerUser(this.newUserName, this.password)
                    } else {
                        alert("Hasła różnią się.")
                    }

                } else {
                    alert("Hasło musi mieć minimum 3 znaki.")
                }

            },

            forwardToMainPage() {
                this.$router.push("/")
            }
        },
    }
</script>

<style scoped>

    .login-label {
        color: white;
        font-weight: bold;
    }

    .login-button {
        background-color: #048998;
        border-width: 0;
        font-weight: bold;
    }

    .login-title-label {
        font-size: 32px;
        color: white;
    }

</style>