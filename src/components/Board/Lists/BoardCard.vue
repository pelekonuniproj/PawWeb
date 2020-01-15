<template>
    <div class="board-task">
        <div v-on:click="showTask(id)">
            <p class="board-task-title">{{ name }}</p>
        </div>
        <Details v-if="areDetailsVisible" @close-details="closeTask" v-bind:cardId="id" v-bind:cardDescription="desc"
                 v-bind:cardName="name"></Details>
    </div>
</template>

<script>
    import Details from "../Cards/CardDetails";

    export default {
        name: "BoardCard",
        components: {Details},
        props: ['name', 'id', 'desc'],

        data: () => ({
            areDetailsVisible: false,
        }),

        methods: {
            showTask(id) {
                /* eslint-disable no-console */
                console.log(id);
                /* eslint-enable no-console */
                this.areDetailsVisible = true;
            },
            closeTask(id) {
                /* eslint-disable no-console */
                console.log(id);
                this.areDetailsVisible = false;
            }
        }
    }
</script>