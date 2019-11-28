<template>
    <div>
        <div class="add-list" id="showFormAddList">
            <form>
                <input type="text" class="add-list-form" placeholder="Wprowadź tytuł listy">
            </form>
            <button type="button" class="btn btn-light add-list-button-form">Dodaj Listę</button>
            <button type="button" v-on:click="hideForm" class="btn btn-light add-list-button-form">Anuluj</button>
        </div>
        <div id="addlistbutton">
            <button id="showButton" v-on:click="showForm()" type="button" class="btn btn-light add-list-button">
                Dodaj kolejną listę
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            showForm() {
                document.getElementById("showButton").style.display = "none"
                document.getElementById("showFormAddList").style.display = "block"
            },
            hideForm() {
                document.getElementById("showButton").style.display = "block"
                document.getElementById("showFormAddList").style.display = "none"
            }
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
</style>