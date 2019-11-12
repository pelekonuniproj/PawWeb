<template>
    <div class="d-flex boards-list">
        <div class="card board-card" v-for="board in boards"
            v-bind:key="board.id">
            <div class="board-card" v-on:click="showExactBoard(board.id,  board.urlName)">
                <p class="board-card-text"> {{ board.name }} </p>
            </div>
        </div>
    </div>
</template>

<script>
import { UserStore } from '../DataHolders/User'

export default {
    name: 'BoardsListView',

    data: () => ({
        boards: [
            { index: 1, name: "Paw", urlName: "paw" },
			{ index: 2, name: "PGiAnUP 1", urlName: "pgianup1" },
			{ index: 3, name: "PGiAnUP 2", urlName: "pgianup2" },
			{ index: 4, name: "PGiAnUP 3", urlName: "pgianup3" },
			{ index: 5, name: "PGiAnUP 4", urlName: "pgianup4" },
			{ index: 6, name: "PGiAnUP 5", urlName: "pgianup5" },
			{ index: 7, name: "PGiAnUP 6", urlName: "pgianup6" },
        ]
    }),

    methods: {
        showExactBoard: function(id, url) {          
            this.$router.push('/b/' + UserStore.getCurrentUser() + '/' + url)
        }
    },
}
</script>