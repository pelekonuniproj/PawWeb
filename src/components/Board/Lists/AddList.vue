<template>
    <div>
        <div class="add-list" id="showFormAddList">
            <form>
                <input type="text" class="add-list-form" placeholder="Wprowadź tytuł listy" v-model="newListName">
            </form>
            <button type="button" class="btn btn-info add-list-button-form my-button" v-on:click="handleAddList">Dodaj</button>
            <button type="button" v-on:click="showForm" class="btn btn-info add-list-button-form my-button" style="background-color: transparent">Anuluj</button>
        </div>
        <div id="addlistbutton">
            <button id="showButton" v-on:click="showForm" type="button" class="btn btn-light add-list-button" style="background-color: #048998">
                Dodaj kolejną listę
            </button>
        </div>
    </div>
</template>

<script>
import { ApiClient } from '../../../Api/ApiClient'
    export default {
        props: ["boardId", "desiredPos"],

        data: () => ({
            newListName: "",
        }),

        methods: {
            showForm() {
                this.newListName = "";
                if (this.$el.querySelector("#showButton").style.display === "none") {
                    this.$el.querySelector("#showButton").style.display = "block"
                    this.$el.querySelector("#showFormAddList").style.display = "none"
                } else {
                    this.$el.querySelector("#showButton").style.display = "none"
                    this.$el.querySelector("#showFormAddList").style.display = "block"
                }
            },

            handleAddList() {
                if (this.newListName != "") {
                    var self = this
                    ApiClient.createList(this.boardId, this.newListName, this.desiredPos, function(response) {
                        self.$emit("after-new-list");
                        /* eslint-disable no-console */
                        console.log("List add success" + response);
                        /* eslint-enable no-console */
                        self.showForm()
                    })
                }
            },
        }
    }
</script>

<style scoped>
    .add-list-form{
        background: #FFFFFF;
        border: 2px solid lightblue;
        border-radius: 5px;
        width: 260px;
        margin: 6px;
    }
    .add-list{
        background-color: #048998;
        border-radius: 5px;
        width: 272px;
        height: auto;
        min-width: 40px;
        margin-top: 20px;
        margin-left: 10px;
        flex: 0 0 272px;
        display: none;
    }
    .add-list-button-form{
        margin: 6px;
        background-color: lightblue;
        border: none;
    }
    .add-list-button{
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
    .my-button {
        background-color: #3bb4c1;
        border-width: 0;
    }
</style>