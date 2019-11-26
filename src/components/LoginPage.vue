<template>
    <div class="row mt-5">
        <div class="col-4 offset-4">
            <form>
                <div class="form-group">
                    <label class="my-label" for="inputLogin">Login</label>
                    <input type="text" class="form-control" id="inputLogin" placeholder="Wpisz swój login">
                </div>
                <div class="form-group">
                    <label class="my-label" for="inputPassword">Hasło</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Wpisz swoje hasło">
                </div>
                <button type="submit" class="btn btn-info my-dark-button">Zaloguj</button>
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