<template>
    <div class='board-section'>
        <div class="d-flex flex-row justify-content-between">
            <form>
                <input class="board-section-title" id="section-name" type="text" :value=sectionName>
            </form>

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
                        <button type="button" class="close" v-on:click="handleShowCopyList" data-dismiss="modal"
                                aria-label="Close">
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
                        <button type="button" class="close" v-on:click="handleShowMoveList" data-dismiss="modal"
                                aria-label="Close">
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
        <div class="modal" tabindex="-1" id="moveAllCards" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <div style="text-align: center;">Przenieś listę</div>
                        </h5>
                        <button type="button" class="close" v-on:click="handleMoveAllCards" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="buttons-move-all-cards">
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" tabindex="-1" id="archiveAllCards" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <div style="text-align: center;">Zarchiwizować wszystkie karty z...</div>
                        </h5>
                        <button type="button" class="close" v-on:click="handleArchiveAllCards" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="div-text">
                        Ta opcja usunie wszystkie karty z listy na tablicy. Żeby zobaczyć zarchiwizowane karty i je przywrócić, kliknij "Menu" > "Zarchiwizowane karty"
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-outline-danger copy-list-button-form">Zarchiwizuj wszystko</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" tabindex="-1" id="sortAllCards" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <div style="text-align: center;">Przenieś listę</div>
                        </h5>
                        <button type="button" class="close" v-on:click="handleSortAllCards" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <button class="btn-move-all-cards btn-light">Data utworzenia (od najnowszych)</button>
                    <button class="btn-move-all-cards btn-light">Data utworzenia (od najstarszych)</button>
                    <button class="btn-move-all-cards btn-light">Nazwy kart (alfabetycznie)</button>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
        
        <BoardTask class="d-flex flex-column board-section-task-holder" v-for="task in tasks" v-bind:key="task.id"
                    v-bind:name="task.title" v-bind:id="task.id" v-bind:desc="task.description" />
    </div>
</template>

<script>
import BoardTask from './BoardTask.vue'
import { ApiClient } from '../Api/ApiClient'

    export default {
        name: "BoardSection",
        components: {
            BoardTask,
        },
        
        props: ['sectionName', 'tasksList'],
        
        data: function () {
            return {
                buttons_added: false,
                 tasks: []
            }
        },
        
        mounted() {
        var self = this
        ApiClient.getTasksForBoardSection(this.id, function(response) {
            self.tasks = response
        })
    }
        
        methods: {
            handleShowAddCard() {
                this.$el.querySelector("#showForm")
                if (this.$el.querySelector("#showForm").style.display === "block") {
                    this.$el.querySelector("#showForm").style.display = "none"
                } else {
                    this.$el.querySelector("#showForm").style.display = "block"
                }
            },
            handleShowCopyList() {
                if (this.$el.querySelector("#showCopyForm").style.display === "block") {
                    this.$el.querySelector("#showCopyForm").style.display = "none"
                } else {
                    this.$el.querySelector("#showCopyForm").style.display = "block"
                    this.$el.querySelector("#copy-list-form").setAttribute("value", this.sectionName)
                }
            },
            handleShowMoveList() {
                if (this.$el.querySelector("#moveList").style.display === "block") {
                    this.$el.querySelector("#moveList").style.display = "none"
                } else {
                    this.$el.querySelector("#moveList").style.display = "block"
                }
            },
            handleObserveButton() {
                if (this.$el.querySelector("#observe-button").className === "dropdown-item active") {
                    this.$el.querySelector("#observe-button").setAttribute("class", "dropdown-item")
                } else {
                    this.$el.querySelector("#observe-button").setAttribute("class", "dropdown-item active")
                }
            },
            handleMoveAllCards() {
                if (this.$el.querySelector("#moveAllCards").style.display === "block") {
                    this.$el.querySelector("#moveAllCards").style.display = "none"
                } else {
                    if(this.buttons_added === false){
                        var button = document.createElement("button");
                        button.setAttribute("class", "btn btn-block btn-move-all-cards")
                        button.innerHTML = this.sectionName + "(aktualny)";
                        button.disabled = true
                        this.$el.querySelector("#buttons-move-all-cards").appendChild(button)
                        this.buttons_added = true
                    }
                    this.$el.querySelector("#moveAllCards").style.display = "block"
                }
            },
            handleArchiveAllCards() {
                if (this.$el.querySelector("#archiveAllCards").style.display === "block") {
                    this.$el.querySelector("#archiveAllCards").style.display = "none"
                } else {
                    this.$el.querySelector("#archiveAllCards").style.display = "block"
                }
            },
            handleSortAllCards() {
                if (this.$el.querySelector("#sortAllCards").style.display === "block") {
                    this.$el.querySelector("#sortAllCards").style.display = "none"
                } else {
                    this.$el.querySelector("#sortAllCards").style.display = "block"
                }
            }
        },        
    }
</script>
<style scoped>
    .add-list-button-form{
        margin: 6px;
        background-color: lightblue;
        border: none;
    }
    .edit-list-button{
        margin-right: 10px;
        height: auto;
        width: auto;
    }
    .edit-list-button::after{
        content: none;
    }
    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(120, 120, 255, 0.4);
    }
    .copy-list-button-form{
        margin: 6px;
        background-color: lightblue;
        border: none;
    }
    .div-text{
        margin: 5px;
    }
    .add-card-form{
        background: #FFFFFF;
        border: 2px solid lightblue;
        border-radius: 5px;
        width: 250px;
        margin: 6px;
    }
    .copy-list-form{
        background: #FFFFFF;
        border: 2px solid lightblue;
        border-radius: 5px;
        width: 250px;
        margin: 6px;
    }
    .add-card{
        background-color: #e9e4e6;
        border-radius: 5px;
        width: 260px;
        height: auto;
        min-width: 40px;
        flex: 0 0 272px;
        display: none;
    }
    .btn-move-all-cards{
        border: none;
        width: 100%;
    }
</style>
