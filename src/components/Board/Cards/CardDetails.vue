<template>
        <div class="modal-dialog details-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ cardName }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="closeDetails">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <div class="row">
                            <div class="col-9">
                                <input v-model="newListName" type="text" class="form-control"
                                       placeholder="Dodaj nową listę zadań...">
                            </div>
                            <div class="col-3">
                                <button type="button" v-on:click="addNewTaskList" class="btn btn-info my-button">Dodaj</button>
                            </div>
                        </div>
                    </div>

                        <div class="form-group">
                            <TasksList class="form-group" v-for="taskList in taskLists" v-bind:key="taskList.id" v-bind:id="taskList.id"
                                    v-bind:name="taskList.name" v-bind:taskJsons="taskList.taskJsons"></TasksList>
                        </div>
                    <form id="comment-form">
                        <div class="form-group">
                            <h6>Aktywność</h6>
                            <div class="row">
                                <div class="col-9">
                                    <input type="text" class="form-control" id="comment-label"
                                           placeholder="Napisz komentarz..." v-model="comment">
                                </div>
                                <div class="col-3">
                                    <button type="button" v-on:click="addComment" class="btn btn-info my-button">Zapisz</button>
                                </div>
                            </div>
                        </div>
                    </form>
                        <Detail class="form-group details-group" v-for="detail in detailsList" v-bind:key="detail.id"
                                v-bind:content="detail.content" v-bind:date="detail.addDate" v-bind:user="detail.userName" />
                </div>
            </div>
        </div>
</template>

<script>

    import { ApiClient } from '../../../Api/ApiClient'
    import Detail from './CardDetail.vue'
    import TasksList from "./TasksList";

    export default {
        name: "CardDetails",
        props: ['cardId', 'cardDescription', 'cardName'],
        components: {
            TasksList,
            Detail
        },

        data: () => ({
            areVisible: false,
            detailsList: [],
            taskLists: [],
            newListName: "",
            comment: ""
        }),

        methods:{
            closeDetails() {
                this.$emit("close-details")
            },
            addComment() {
                //TODO połączenie z API (nie mamy userID)
                ApiClient.addCommentForCard(this.cardId, this.comment, function () {
                    /* eslint-disable no-console */
                    console.log("Success - comment added");
                    document.getElementById("#comment-form").reset();
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - comment not added: " + response);
                })
            },
            downloadComments() {
                var self = this;
                ApiClient.getCommentsForCard(function(response) {
                    self.detailsList = response;
                    for(var i = 0; i < self.detailsList.length; i++) {
                        var date = new Date(self.detailsList[i].addDate);
                        self.detailsList[i].addDate =date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
                    }
                }, self.cardId)
            },
            downloadTasks() {
                var self = this;
                ApiClient.getTasksForCard(function(response) {
                    self.taskLists = response;
                }, self.cardId)
            },
            addNewTaskList() {
                ApiClient.addNewTaskList(this.cardId, this.newListName, function () {
                    /* eslint-disable no-console */
                    console.log("Success - task added");
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - task not added: " + response);
                })
            }
        },

        mounted () {
            this.downloadComments();
            this.downloadTasks();
        },

    }

</script>

<style scoped>

    .details-dialog {
        display: block;
        width: 460px;
        padding: 20px;
        position: fixed;
        left: 0;
        top: 200px;
        right: 0;
    }
    .details-group {
        margin-left: 20px;
    }

</style>
