<template>
    <div class="board-card">
        <div v-on:click="showCardDetails(id)">
            <p class="board-card-title">{{ name }}</p>
        </div>
        <Details v-if="areDetailsVisible" @close-details="closeCardDetails" v-bind:cardId="id" v-bind:cardDescription="desc"
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
            showCardDetails() {
                /* eslint-enable no-console */
                this.areDetailsVisible = true;
            },
            closeCardDetails() {
                this.areDetailsVisible = false;
            }
        }
    }
</script>