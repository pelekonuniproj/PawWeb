<template>
    <div>
        <div class="add-card" id="showFormAddCard">
            <form>
                <input type="text" v-model.trim="title" class="add-card-form" id="add-card-form-text" placeholder="Wprowadź tytuł karty">
            </form>
            <button type="button" v-on:click="createCard" class="btn btn-info my-button">Dodaj</button>
            <button type="button" style="background: transparent" v-on:click="showForm" class="btn btn-info my-button">Anuluj</button>
        </div>
        <div id="addCardButton" class="row">
            <button id="showButton" v-on:click="showForm" type="button" class="btn btn-light add-card-button">
                <i class="material-icons task-icon">add</i> Dodaj kolejną kartę
            </button>
        </div>
    </div>
</template>

<script>
    import {ApiClient} from "../../../Api/ApiClient";

    export default {
        name: "AddCard",
        props: ["listId"],

        data: function() {
        return {
            title: ""
        };
},
        methods: {
            showForm() {
                this.title = "";
                if (this.$el.querySelector("#showButton").style.display === "none") {
                    this.$el.querySelector("#showButton").style.display = "block"
                    this.$el.querySelector("#showFormAddCard").style.display = "none"
                } else {
                    this.$el.querySelector("#showButton").style.display = "none"
                    this.$el.querySelector("#showFormAddCard").style.display = "block"
                }
            },
            createCard(){
                var self = this
                ApiClient.createCard(this.listId, this.title, "", 1, 1, function(response) {
                    /* eslint-disable no-console */
                    console.log("Card added: " + response);
                    /* eslint-enable no-console */
                    self.$emit("refresh-cards")
                })
                this.showForm()
            }
        }
    }
</script>

<style scoped>
    .add-card-form{
        background: #FFFFFF;
        border: 2px solid lightblue;
        border-radius: 5px;
        width: 256px;
    }
    .add-card{
        background-color: transparent;
        border-radius: 5px;
        width: 256px;
        height: auto;
        min-width: 40px;
        margin-left: 8px;
        padding: 2px;
        flex: 0 0 256px;
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
        margin-left: 8px;
        padding: 2px;
        width: 256px;
        background-color: transparent;
        border: none;
        color: white;
    }
    .my-button {
        background-color: #3bb4c1;
        border-width: 0;
        margin-top: 10px;
        margin-right: 10px;
    }
</style>