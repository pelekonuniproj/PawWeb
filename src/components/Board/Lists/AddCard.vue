<template>
    <div>
        <div class="add-card" id="showFormAddCard">
            <form>
                <input type="text" class="add-card-form" placeholder="Wprowadź tytuł listy">
            </form>
            <button type="button" class="btn btn-light add-card-form-button">Dodaj Kartę</button>
            <button type="button" v-on:click="showForm" class="btn btn-light add-card-form-button">Anuluj</button>
        </div>
        <div id="addCardButton">
            <button id="showButton" v-on:click="showForm" type="button" class="btn btn-light add-card-button">
                Dodaj kolejną kartę
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddCard",
        methods: {
            showForm() {
                if (this.$el.querySelector("#showButton").style.display === "none") {
                    this.$el.querySelector("#showButton").style.display = "block"
                    this.$el.querySelector("#showFormAddCard").style.display = "none"
                } else {
                    this.$el.querySelector("#showButton").style.display = "none"
                    this.$el.querySelector("#showFormAddCard").style.display = "block"
                }
            },
        }
    }
</script>

<style scoped>
    .add-card-form{
        background: #FFFFFF;
        border: 2px solid lightblue;
        border-radius: 5px;
        width: 260px;
        margin: 6px;
    }
    .add-card{
        background-color: #e9e4e6;
        border-radius: 5px;
        width: 272px;
        height: auto;
        min-width: 40px;
        margin-top: 20px;
        margin-left: 10px;
        flex: 0 0 272px;
        display: none;
    }
    .add-card-form-button{
        margin: 6px;
        background-color: lightblue;
        border: none;
    }
    .add-card-button{
        height: 20%;
        min-width: 40px;
        margin-top: 20px;
        margin-left: 10px;
        padding-bottom: 5px;
        width: 272px;
        background-color: rgba(255,255,255, 0.5);
        border: none;
        color:white;
    }
</style>