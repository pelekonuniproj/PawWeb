<template>
    <div class='board-section'>
        <div class="d-flex flex-row justify-content-between">
            <p class="board-section-title" id="section-name"> {{ sectionName }} </p>

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
                    <button class="dropdown-item" v-on:click="handleShowMoveList" type="button">Przenieś listę...</button>
                    <button class="dropdown-item" v-on:click="handleObserveButton" id="observe-button" type="button">Obserwuj</button>
                    <hr>
                    <button class="dropdown-item" type="button">Przenieś wszystkie kart w tej liście...</button>
                    <button class="dropdown-item" type="button">Zarchiwizuj wszystkie karty w tej liście...</button>
                    <hr>
                    <button class="dropdown-item" type="button">Zarchiwizuj tę listę</button>
                </div>
            </div>
        </div>
        <div class="add-card" id="showForm">
            <form>
                <input type="text" class="add-card-form" placeholder="Wprowadź tytuł karty..">
            </form>
            <button type="button" class="btn btn-light add-list-button-form">Dodaj Kartę</button>
            <button type="button" v-on:click="handleShowAddCard" class="btn btn-light add-list-button-form">Anuluj
            </button>
        </div>
        <div class="modal" tabindex="-1" id="showCopyForm" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <div style="text-align: center;">Kopiuj listę</div>
                        </h5>
                        <button type="button" class="close" v-on:click="handleShowCopyList" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <input type="text" class="copy-list-form" id="copy-list-form">
                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light copy-list-button-form">Utwórz listę</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" tabindex="-1" id="moveList" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <div style="text-align: center;">Przenieś listę</div>
                        </h5>
                        <button type="button" class="close" v-on:click="handleShowMoveList" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <select class="form-control" name="Tablica">
                                <option>Paw</option>
                                <option>PGiAnUP 1</option>
                                <option>PGiAnUP 2</option>
                                <option>PGiAnUP 3</option>
                                <option>PGiAnUP 4</option>
                                <option>PGiAnUP 5</option>
                                <option>PGiAnUP 6</option>
                            </select>
                        </form>
                        <form>
                            <select class="form-control" name="Pozycja">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light copy-list-button-form">Przenieś</button>
                    </div>
                </div>
            </div>
        </div>
        <BoardTask class="d-flex flex-column board-section-task-holder" v-for="task in tasksList" v-bind:key="task.id"
                   v-bind:name="task.name" v-bind:id="task.id"/>
    </div>
</template>

<script>
    import BoardTask from './BoardTask.vue'

    export default {
        name: "BoardSection",
        components: {
            BoardTask,
        },
        methods: {
            handleShowAddCard() {
                if (document.getElementById("showForm").style.display === "block") {
                    document.getElementById("showForm").style.display = "none"
                } else {
                    document.getElementById("showForm").style.display = "block"
                }
            },
            handleShowCopyList() {
                if (document.getElementById("showCopyForm").style.display === "block") {
                    document.getElementById("showCopyForm").style.display = "none"
                } else {
                    var text = document.getElementById("section-name").innerHTML
                    document.getElementById("showCopyForm").style.display = "block"
                    document.getElementById("copy-list-form").setAttribute("value", text)
                }
            },
            handleShowMoveList() {
                if (document.getElementById("moveList").style.display === "block") {
                    document.getElementById("moveList").style.display = "none"
                } else {
                    document.getElementById("moveList").style.display = "block"
                }
            },
            handleObserveButton(){
                if (document.getElementById("observe-button").style.backgroundColor === "gray") {
                    document.getElementById("observe-button").style.backgroundColor = "white"
                } else {
                    document.getElementById("observe-button").style.backgroundColor = "gray"
                }
            }
        },


        props: ['sectionName', 'tasksList'],
    }
</script>