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
                                    v-bind:name="taskList.name" v-bind:taskJsons="taskList.taskJsons" @refresh-window="downloadTasks"></TasksList>
                        </div>

                    <div class="form-group">
                        <input type="file" ref="file" v-on:change="handleAddAttachment" />
                        <button type="button" v-on:click="parseAttachment" class="btn btn-info my-button">Dodaj</button>
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
            comment: "",
            attachmentToAdd: null,
            attachments: []
        }),

        methods:{
            closeDetails() {
                this.$emit("close-details")
            },

            handleAddAttachment() {
                this.attachmentToAdd = this.$refs.file.files[0];
            },

            parseAttachment() {
                if (this.attachmentToAdd != null) {
                    const reader = new FileReader()
                    var self = this
                    reader.onload = () => {
                        self.sendAttachment(reader.result)
                    }

                    reader.readAsDataURL(this.attachmentToAdd)
                }
            },

            sendAttachment(base64Str) {
                var self = this
                ApiClient.addAttachmentForCard(this.cardId, this.attachmentToAdd.name, base64Str, function(response) {
                    self.attachmentToAdd = null
                    self.downloadAttachments()
                    /* eslint-disable no-console */
                    console.log("Attachment add success" + response);
                    /* eslint-enable no-console */
                })
            },

            addComment() {
                var self = this
                ApiClient.addCommentForCard(this.cardId, this.comment, function () {
                    self.comment = ""
                    self.downloadComments()
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - comment not added: " + response);
                    /* eslint-enable no-console */
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
                var self = this
                ApiClient.addNewTaskList(this.cardId, this.newListName, function () {
                    self.newListName = ""
                    self.downloadTasks()
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - task not added: " + response);
                    /* eslint-enable no-console */
                })
            },

            downloadAttachments() {
                var self = this
                ApiClient.getAttachmentsForCard(this.cardId, function(response) {
                    self.attachments = response
                })
            }
        },

        mounted () {
            this.downloadComments();
            this.downloadTasks();
            this.downloadAttachments();
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
