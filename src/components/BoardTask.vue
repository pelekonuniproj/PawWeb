<template>
    <div class="board-task" v-on:click="showTask(id)">
        <p class="board-task-title">{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: "BoardTask",

    props: ['name', 'id'],

    methods: {
        showTask(id) {
            /* eslint-disable no-console */
            console.log(id);
            /* eslint-enable no-console */
        }
    }
}
</script>