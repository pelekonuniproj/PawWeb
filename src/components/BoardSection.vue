<template>
    <div class='board-section'>
        <div class="d-flex flex-row justify-content-between">
            <p class="board-section-title"> {{ sectionName }} </p>

            <div class="edit-list-dropdown">
                <button type="button" class="btn dropdown-toggle edit-list-button" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                ...</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div style="text-align: center;">Akcje Listy</div><hr>
                    <a class="dropdown-item" href="#">Dodaj kartę..</a>
                    <a class="dropdown-item" href="#">Kopiuj listę...</a>
                    <a class="dropdown-item" href="#">Przenieś listę...</a>
                    <a class="dropdown-item" href="#">Obserwuj</a><hr>
                    <a class="dropdown-item" href="#">Przenieś wszystkie kart w tej liście...</a>
                    <a class="dropdown-item" href="#">Zarchiwizuj wszystkie karty w tej liście...</a><hr>
                    <a class="dropdown-item" href="#">Zarchiwizuj tę listę</a>
                </div>
            </div>
        </div>
        <BoardTask class="d-flex flex-column board-section-task-holder" v-for="task in tasksList" v-bind:key="task.id"
                    v-bind:name="task.name" v-bind:id="task.id" />
    </div>
</template>

<script>
import BoardTask from './BoardTask.vue'

export default {
    name: "BoardSection",
    components: {
        BoardTask,
    },

    props: ['sectionName', 'tasksList'],

}
</script>