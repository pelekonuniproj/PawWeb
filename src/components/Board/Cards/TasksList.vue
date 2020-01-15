<template>
    <div class="form-group">
        <h6 class="modal-title" style="margin-bottom: 10px">{{ name }}</h6>
        <Task class="form-group details-group" v-for="task in taskJsons" v-bind:key="task.id"
              v-bind:isDone="task.isDone" v-bind:name="task.name"></Task>
        <div class="form-group">
            <div class="row">
                <div class="col-9">
                    <input type="text" class="form-control add-task" id="comment-label"
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

    import Task from './Task.vue'

    export default {
        name: "TasksList",
        props: ["name", "taskJsons"],

        components: {
            Task
        },

        data: () => ({
            taskList: [],
        }),

        methods: {
            addTask() {
                //TODO
            }
        }

    }
</script>

<style scoped>
    .add-task {
        height: 20px;
    }
</style>