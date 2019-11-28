<template>
    <div class="edit-list-dropdown">
        <button type="button" class="btn dropdown-toggle edit-list-button" data-toggle="dropdown"
                id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
            ...
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div style="text-align: center;">Akcje Listy</div>
            <hr>
            <button class="dropdown-item" v-on:click="handleShowAddCard" type="button">Dodaj kartę..</button>
            <button class="dropdown-item" v-on:click="handleShowCopyList" type="button">Kopiuj listę...</button>
            <button class="dropdown-item" v-on:click="handleShowMoveList" type="button">Przenieś listę...
            </button>
            <button class="dropdown-item" v-on:click="handleObserveButton" id="observe-button" type="button">
                Obserwuj
            </button>
            <hr>
            <button class="dropdown-item" v-on:click="handleSortAllCards" id="sort-button" type="button">
                Sortuj według...
            </button>
            <hr>
            <button class="dropdown-item" v-on:click="handleMoveAllCards" type="button">
                Przenieś wszystkie kart w tej liście...
            </button>
            <button class="dropdown-item" v-on:click="handleArchiveAllCards" type="button">Zarchiwizuj wszystkie karty w tej liście...</button>
            <hr>
            <button class="dropdown-item" type="button">Zarchiwizuj tę listę</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditListMenu"
    }
</script>

<style scoped>

</style>