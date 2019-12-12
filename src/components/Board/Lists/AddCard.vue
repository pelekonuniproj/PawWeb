<template>
    <div>
        <div class="add-card" id="showFormAddCard">
            <form>
                <input type="text" v-model.trim="title" class="add-card-form" placeholder="Wprowadź tytuł karty">
            </form>
            <button type="button" v-on:click="createCard" class="btn btn-light add-card-form-button">Dodaj Kartę</button>
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
    import {ApiClient} from "../../../Api/ApiClient";

    export default {
        name: "AddCard",
        data: function() {
        return {
            title: ""
        };
},
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
            createCard(){
                ApiClient.createCard(this.$parent.id, this.title, "", 10,4,function(){
                    /* eslint-disable no-console */
                    console.log("On login success");
                    /* eslint-enable no-console */
                }, function(response){
                    /* eslint-disable no-console */
                    console.log("On login fail" + response);
                    /* eslint-enable no-console */
                })
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
        background-color: #e9e4e6;
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
        background-color: rgba(255,255,255, 0.5);
        border: none;
        color:dimgrey;
    }
</style>