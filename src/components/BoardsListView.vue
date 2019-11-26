<template>
    <div class="d-flex boards-list">
        <div class="card board-card" v-for="board in boards"
            v-bind:key="board.id">
            <div class="board-card" v-on:click="showExactBoard(board.id,  board.name)">
                <p class="board-card-text"> {{ board.name }} </p>
            </div>
        </div>
    </div>
</template>

<script>
import { UserStore } from '../DataHolders/User'
import { ApiClient } from '../Api/ApiClient'

export default {
    name: 'BoardsListView',

    data: () => ({
        boards: []
    }),

    methods: {
        showExactBoard: function(id, url) {          
            this.$router.push('/b/' + UserStore.getCurrentUser() + '/' + url)
        }
    },

    mounted () {
        var self = this
        ApiClient.getBoardsForUser(function(response) {
            self.boards = response
        })
    }
}
</script>