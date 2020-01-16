<template>
<div class="d-flex flex-row">
<!--    <SideMenu @menu-change="updateMenuState" v-bind:showMenu="boardsVisible" v-bind:showMain="mainViewVisible"/>-->
    <BoardsListView v-if="boardsVisible"/>
    <MainView v-if="mainViewVisible"/>
</div>
</template>

<script>
// import SideMenu from './SideMenu.vue'
import BoardsListView from './BoardsListView.vue'
import MainView from './MainView.vue'

export default {
    name: 'HomePage',
    components: {
        // SideMenu,
        BoardsListView,
        MainView,
    },

    data: () => ({
        boardsVisible: true,
        mainViewVisible: false,
    }),

    methods: {
        updateMenuState(showBoards) {
            this.boardsVisible = showBoards
            this.mainViewVisible = !showBoards
        }
    }
}
</script>