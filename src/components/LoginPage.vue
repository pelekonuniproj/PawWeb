<template>
    <div class="row mt-5">
        <div class="col-3 offset-2">
            <label class="login-title-label">Zaloguj się</label>
            <form>
                <div class="form-group">
                    <label class="login-label" for="inputLoginLogin">Login</label>
                    <input type="text" class="form-control" id="inputLoginLogin" placeholder="Wpisz swój login">
                </div>
                <div class="form-group">
                    <label class="login-label" for="inputLoginPassword">Hasło</label>
                    <input type="password" class="form-control" id="inputLoginPassword" placeholder="Wpisz swoje hasło">
                </div>
                <button type="submit" class="btn btn-info login-button">Zaloguj</button>
            </form>
        </div>
        <div class="col-4 offset-1">
            <label class="login-title-label">Zarejestruj</label>
            <form>
                <div class="form-group">
                    <label class="login-label" for="inputRegistrationLogin">Login</label>
                    <input type="text" class="form-control" id="inputRegistrationLogin" aria-describedby="emailHelp" placeholder="Wpisz swój login">
                </div>
                <div class="form-group">
                    <label class="login-label" for="inputRegistrationPassword">Hasło</label>
                    <input type="password" class="form-control" id="inputRegistrationPassword" placeholder="Wpisz swoje hasło">
                </div>
                <div class="form-group">
                    <label class="login-label" for="inputRegistrationRepeatedPassword">Powtórz hasło</label>
                    <input type="password" class="form-control" id="inputRegistrationRepeatedPassword" placeholder="Powtórz swoje hasło">
                </div>
                <button type="submit" class="btn btn-info login-button">Zarejestruj</button>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'LoginPage',
        components: {
        },

        data: () => ({

        }),

        methods: {

        },
    }
</script>