<template>
    <div class="row" style="margin-left: 10px">
        <div class="form-check">
            <div class="form-group">
                <div class="row">
                    <div class="col-9">
                        <input v-on:change="onDoneChanged" type="checkbox" class="form-check-input" id="taskDone">
                        <input style="width: 270px" v-on:change="onTaskNameChanged" v-model="name" type="text"
                               class="form-check-label">
                    </div>
                    <div class="col-2">
                        <Button class="btn btn-danger btn-sm" v-on:click="onDeleteClicked">Usuń</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {ApiClient} from '../../../Api/ApiClient'

    export default {
        name: "Task",
        props: ["done", "name"],

        methods: {
            onDoneChanged() {
                //TODO
            },
            onTaskNameChanged() {
                //TODO
            },
            onDeleteClicked() {
                //TODO test
                ApiClient.deleteTask(this.id, function () {
                    /* eslint-disable no-console */
                    console.log("Success - task deleted");
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Success - task deleted: " + response);
                })
            }
        },
    }

</script>

<style scoped>

</style>