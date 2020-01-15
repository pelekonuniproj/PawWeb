<template>
    <div class="form-group">
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h6 class="modal-title" style="margin-bottom: 10px">{{ name }}</h6>
                </div>
                <div class="col-sm">
                    <Button class="btn btn-danger btn-sm" v-on:click="onDeleteClicked">Usuń listę zadań</Button>
                </div>
            </div>
        </div>
        <Task class="form-group details-group" v-for="task in taskJsons" v-bind:key="task.id" v-bind:id="task.id"
              v-bind:isDone="task.isDone" v-bind:name="task.name"></Task>
        <div class="form-group">
            <div class="row">
                <div class="col-9">
                    <input v-model="newTaskName" type="text" class="form-control add-task" id="comment-label"
                           placeholder="Dodaj zadanie...">
                </div>
                <div class="col-3">
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
                ApiClient.addTask(this.id, this.newTaskName, function () {
                    /* eslint-disable no-console */
                    console.log("Success - task added");
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - task not added: " + response);
                })
            },
            onDeleteClicked() {
                ApiClient.deleteTaskList(this.id,function () {
                    /* eslint-disable no-console */
                    console.log("Success - list deleted");
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - list not deleted:  " + response);
                })
            }
        }

    }
</script>

<style scoped>
    .add-task {
        height: 20px;
    }
</style>