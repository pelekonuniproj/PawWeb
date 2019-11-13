<template>
  <div class="navbar-main">
    <nav id="navBar" class="navbar navbar-light mynavbar">
				<form class="form-inline">
					<button type="button" class="btn btn-info mynavbarform" v-on:click="goToMainPage">{{ home }}</button>
					<button type="button" class="btn btn-info mynavbarform" v-on:click="goToBoards">{{ storyboards }}</button>
					<a class="navbar-brand navtitle">{{ title }}</a>
          <button type="button" class="btn btn-light" v-on:click="showCreateNewBoard"> + </button>
				</form>
				
		</nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data: () => ({
    home: 'Home',
    storyboards: 'Tablice',
    title: 'Trello',
  }),

  methods: {
    goToMainPage: function() {
       if (this.$router.current != "/") {
          this.$router.push('/')
        }
    },

    goToBoards: function() {
        if (this.$router.current != "/") {
          this.$router.push('/')
        }
    },

    showCreateNewBoard: function() {
      this.$emit("new-board")
    }
  }
}
</script>
