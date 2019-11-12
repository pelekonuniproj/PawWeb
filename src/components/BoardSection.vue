<template>
    <div class='board-section'>
        <p class="board-section-title"> {{ sectionName }} </p>

        <BoardTask class="d-flex flex-column board-section-task-holder" v-for="task in tasksList" v-bind:key="task.id"
                    v-bind:name="task.name" v-bind:id="task.id" />
    </div>
</template>

<script>
import BoardTask from './BoardTask.vue'

export default {
    name: "BoardSection",
    components: {
        BoardTask,
    },

    props: ['sectionName', 'tasksList'],

}
</script>