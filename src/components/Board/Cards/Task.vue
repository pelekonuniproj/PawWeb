<template>
    <div class="row" style="margin-left: 10px">
        <div class="form-check">
            <div class="row">
                <div class="col-9">
                    <input v-model="done" v-on:change="updateTask" type="checkbox" class="form-check-input" id="taskDone">
                    <input v-on:change="updateTask" v-model="name" type="text"
                           class="form-check-label">
                </div>
                <div class="col-3">
                    <i class="material-icons task-icon" v-on:click="onDeleteClicked">delete</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {ApiClient} from '../../../Api/ApiClient'

    export default {
        name: "Task",
        props: ["id", "done", "name"],

        methods: {
            updateTask() {
                ApiClient.updateTask(this.id, this.name, this.done, function () {
                    /* eslint-disable no-console */
                    console.log("Success - task updated");
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - task updated: " + response);
                })
            },
            onDeleteClicked() {
                ApiClient.deleteTask(this.id, function () {
                    /* eslint-disable no-console */
                    console.log("Success - task deleted");
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - task deleted: " + response);
                })
            }
        },

    }

</script>

<style scoped>
.task-icon {
    font-size: 20px;
    color: #424242;
    cursor: pointer ;
}
</style>