<template>
    <div class="board-name-bar">
        <input type="text" v-model="boardName" v-bind:disabled="!canEdit" v-on:change="onTitleChanged" />   
    </div>
</template>

<script>
//import { UserStore } from '../DataHolders/User'

export default {
    name: "BoardTitleBar",
    props: ['boardName', 'canEdit'],

    data: () => ({
        //currentName: this.boardName,
    }),

    methods: {
        onTitleChanged() {
            this.$emit("onTitleChange", this.boardName)
        }
    }
}
</script>