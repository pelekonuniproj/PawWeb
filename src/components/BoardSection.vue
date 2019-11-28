<template>
    <div class='board-section'>
        <p class="board-section-title"> {{ sectionName }} </p>

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

    props: ['sectionName', 'id'],

    data: () => ({
        tasks: []
    }),

    mounted() {
        var self = this
        ApiClient.getTasksForBoardSection(this.id, function(response) {
            self.tasks = response
        })
    }
}
</script>