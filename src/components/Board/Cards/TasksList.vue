<template>
    <div class="form-group">
        <div class="container">
            <div class="row">
                <h6 class="modal-title" style="margin-bottom: 10px">{{ name }}</h6>
                <div class="col-sm">
                    <i class="material-icons task-list-icon" v-on:click="onDeleteClicked">delete_forever</i>
                </div>
            </div>
        </div>
        <Task class="form-group details-group" v-for="task in taskJsons" v-bind:key="task.id" v-bind:id="task.id"
              v-bind:done="task.done" v-bind:name="task.name"></Task>
        <div class="form-group">
            <div class="row">
                <div class="col-10">
                    <input v-model="newTaskName" type="text" class="form-control add-task" id="task-comment-label"
                           placeholder="Dodaj zadanie...">
                </div>
                <div class="col-0">
                    <button type="button" v-on:click="addTask" class="btn btn-info my-button btn-sm">Dodaj</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {ApiClient} from '../../../Api/ApiClient'
    import Task from './Task.vue'

    export default {
        name: "TasksList",
        props: ["id", "name", "taskJsons"],

        components: {
            Task
        },

        data: () => ({
            taskList: [],
            newTaskName: ""
        }),

        methods: {
            addTask() {
                var self = this
                ApiClient.addTask(this.id, this.newTaskName, function () {
                    self.newTaskName = ""
                    self.$emit("refresh-window")
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - task not added: " + response);
                    /* eslint-enable no-console */
                })
            },

            onDeleteClicked() {
                var self = this
                ApiClient.deleteTaskList(this.id,function () {
                    self.$emit("refresh-window")
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - list not deleted:  " + response);
                    /* eslint-enable no-console */
                })
            }
        }

    }
</script>

<style scoped>
    .add-task {
        height: 25px;
    }
    .task-list-icon {
        font-size: 20px;
        color: #17A2B8;
        cursor: pointer ;
    }
</style>