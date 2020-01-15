<template>
    <div class="form-group">
        <h6 class="modal-title">{{ name }}</h6>
        <Task class="form-group details-group" v-for="task in taskJsons" v-bind:key="task.id"
              v-bind:isDone="task.isDone" v-bind:name="task.name"></Task>
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


    }
</script>

<style scoped>

</style>