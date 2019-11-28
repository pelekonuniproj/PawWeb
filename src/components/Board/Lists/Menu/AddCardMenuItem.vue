<template>
    <div class="add-card block-modal" id="showForm">
        <form>
            <input type="text" class="add-card-form" placeholder="Wprowadź tytuł karty..">
        </form>
        <button type="button" class="btn btn-light add-list-button-form">Dodaj Kartę</button>
        <button type="button" v-on:click="handleShowAddCard" class="btn btn-light add-list-button-form">Anuluj
        </button>
    </div>
</template>

<script>
    export default {
        name: "AddCardMenuItem",
        methods:{
            handleShowAddCard() {
                this.$emit("show")
            },
        }
    }

</script>

<style scoped>
    .add-card-form{
        background: #FFFFFF;
        border: 2px solid lightblue;
        border-radius: 5px;
        width: 250px;
        margin: 6px;
    }
    .add-list-button-form{
        margin: 6px;
        background-color: lightblue;
        border: none;
    }
    .add-card{
        background-color: #e9e4e6;
        border-radius: 5px;
        width: 260px;
        height: auto;
        min-width: 40px;
        flex: 0 0 272px;
        display: block;
    }
    .block-modal{
        display: block;
    }
</style>