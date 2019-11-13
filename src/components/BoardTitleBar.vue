<template>
    <div class="board-name-bar">
        <input type="text" v-bind:value="boardName" v-bind:disabled="!canEditName"/>   
    </div>
</template>

<script>
import { UserStore } from '../DataHolders/User'

export default {
    name: "BoardTitleBar",
    props: ['boardName'],

    data: () => ({
        canEditName: UserStore.isAdmin()
    }),
}
</script>