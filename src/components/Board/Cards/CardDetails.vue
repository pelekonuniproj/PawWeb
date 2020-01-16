<template>
    <div class="my-modal-backdrop">
        <div class="modal details-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ cardName }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                            v-on:click="closeDetails">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm">
                            <div class="form-group">
                                <h5 class="title">Listy zadań</h5>
                                <div class="row">
                                    <div class="col-10">
                                        <input v-model="newListName" type="text" class="form-control input-style"
                                               placeholder="Dodaj nową listę zadań...">
                                    </div>
                                    <div class="col-0">
                                        <button type="button" v-on:click="addNewTaskList"
                                                class="btn btn-info btn-sm my-button">Dodaj
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <TasksList class="form-group" v-for="taskList in taskLists" v-bind:key="taskList.id"
                                           v-bind:id="taskList.id"
                                           v-bind:name="taskList.name" v-bind:taskJsons="taskList.taskJsons"
                                           @refresh-window="downloadTasks"></TasksList>
                            </div>
                        </div>
                        <div class="col-sm">
                            <form id="comment-form">
                                <div class="form-group">
                                    <h5 class="title">Aktywność</h5>
                                    <Detail class="form-group details-group" v-for="detail in detailsList"
                                            v-bind:key="detail.id"
                                            v-bind:content="detail.content" v-bind:date="detail.addDate"
                                            v-bind:user="detail.userName"/>
                                    <div class="row">
                                        <div class="col-10">
                                            <input type="text" class="form-control input-style" id="comment-label"
                                                   placeholder="Napisz komentarz..." v-model="comment">
                                        </div>
                                        <div class="col-0">
                                            <i class="material-icons task-icon icon" v-on:click="addComment">send</i>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm">
                            <div class="form-group">
                                <h5 class="title">Załączniki</h5>
                                <div class="row">
                                    <div class="col-10">
                                        <input type="file" ref="file" v-on:change="handleAddAttachment"/>
                                    </div>
                                    <div class="col-0">
                                        <button type="button" v-on:click="parseAttachment"
                                                class="btn btn-info btn-sm my-button">Dodaj
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <Attachment class="form-group" v-for="attachment in attachments"
                                            v-bind:key="attachment.id" v-bind:id="attachment.id"
                                            v-bind:attachment="attachment.attachment"
                                            v-bind:name="attachment.name"></Attachment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { ApiClient } from '../../../Api/ApiClient'
    import Detail from './CardDetail.vue'
    import TasksList from "./TasksList";
    import Attachment from "./Attachment";

    export default {
        name: "CardDetails",
        props: ['cardId', 'cardDescription', 'cardName'],
        components: {
            TasksList,
            Detail,
            Attachment
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
                self.addDetail(this.comment);
            },

            addDetail(detail) {
                var self = this;
                ApiClient.addCommentForCard(this.cardId, detail, function () {
                    self.comment = "";
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
                var self = this;
                ApiClient.getAttachmentsForCard(this.cardId, function(response) {
                    self.attachments = response;
                })
            },
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
        width: 90%;
        padding: 20px;
        position: fixed;
        left: 5%;
        top: 0;
        right: 0;
    }
    .details-group {
        margin-left: 20px;
    }

    .input-style {
        height: 25px;
    }

    .title {
        margin-bottom: 15px;
    }

    .icon {
        color: #17A2B8;
        cursor: pointer;
    }

    .my-modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .my-modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

</style>
