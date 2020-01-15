<template>
    <div class="d-flex boards-list">
        <div class="card board-view" v-for="board in boards"
            v-bind:key="board.id">
            <div class="board-view" v-on:click="showExactBoard(board.id,  board.name)">
                <p class="board-view-text"> {{ board.name }} </p>
            </div>
        </div>
    </div>
</template>

<script>
import { UserStore } from '../DataHolders/User'
import { ApiClient } from '../Api/ApiClient'
import { Events } from '../States/EventObserver.js'

export default {
    name: 'BoardsListView',

    data: () => ({
        boards: []
    }),

    methods: {
        showExactBoard: function(id, url) {          
            this.$router.push('/b/' + UserStore.getCurrentUser() + '/' + url)
        },

        downloadBoards() {
            var self = this
            ApiClient.getBoardsForUser(function(response) {
                self.boards = response
                var ownedIds = []
                response.forEach(element => {
                    ownedIds.push(element.id);
                })

                UserStore.setOwnerBoardsID(ownedIds)
            })
        },
    },

    mounted () {
        this.downloadBoards()
        Events.assignBoardRefresh(this.downloadBoards)
    },

    beforeDestroy() {
        Events.clearBoardRefresh()
    }
}
</script>

<style scoped>

    .board-view {
        width: 250px;
        flex: 0 0 250px;
        height: 80px;
        margin: 20px;
    }

    .board-view-text {
        margin-left: 5px;
    }

    .boards-list {
        flex-wrap: wrap;
    }

</style>