<template>
    <div>
        <div class="add-list" id="showForm">
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
                document.getElementById("showForm").style.display = "block"
            },
            hideForm() {
                document.getElementById("showButton").style.display = "block"
                document.getElementById("showForm").style.display = "none"
            }
        }
    }
</script>