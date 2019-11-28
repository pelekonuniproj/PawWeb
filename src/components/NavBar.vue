<template>
  <div class="navbar-main">
    <nav id="navBar" class="navbar navbar-light mynavbar">
		<ul class="navbar-nav mr-auto">
			<form class="form-inline">
				<button type="button" class="btn btn-info my-button mynavbarform" v-on:click="goToMainPage">{{ home }}</button>
				<button type="button" class="btn btn-info my-button  mynavbarform" v-on:click="goToBoards">{{ storyboards }}</button>
				<a class="navbar-brand navtitle">{{ title }}</a>
				<button type="button" class="btn btn-info my-button  btn-add" v-on:click="showCreateNewBoard"> + </button>
			</form>
		</ul>
		<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<label class="user-label">{{ user }}</label>
				<button type="button" class="btn btn-info my-button btn-add">Wyloguj</button>
			</li>
		</ul>
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
	user: "Użytkownik",
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

<style scoped>
	.mynavbar {
		background-color: #048998;
		height: 60px;
		color: white;
		font-weight: bold;
	}

	.mynavbarform {
		margin-right: 10px;
	}

	.navtitle {
		align-self: center;
	}

	.user-label {
		margin-right: 20px;
	}

	.btn-add {
		background: none;
		border: none;
	}

	.my-button {
		background-color: #3bb4c1;
		border-width: 0;
		font-weight: bold;
	}
</style>