<template>
  <div id="app">
    <NavBar @new-board="showNewBoardView"/>
    <router-view/>
    <NewBoardView v-if="isModalVisible" @close-board="hideNewBoardView"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NewBoardView from './components/NewBoardView.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    NewBoardView,
  },

  data: () => ({
    isModalVisible: false,
  }),

  methods: {
    showNewBoardView: function() {
        this.isModalVisible = true
    },

    hideNewBoardView: function() {
        this.isModalVisible = false
    }
  }
}
</script>
