<template>
  <div class="navbar-main">
    <nav id="navBar" class="navbar navbar-light mynavbar">
		<ul class="navbar-nav mr-auto">
			<form class="form-inline">
<!--				<button type="button" class="btn btn-info my-button mynavbarform" v-on:click="goToMainPage" v-if="isLogged">{{ home }}</button>-->
				<button type="button" class="btn btn-info my-button  mynavbarform" v-on:click="goToBoards" v-if="isLogged">{{ storyboards }}</button>
				<a class="navbar-brand navtitle">{{ title }}</a>
				<button type="button" class="btn btn-info my-button  btn-add" v-on:click="showCreateNewBoard" v-if="isLogged"> + </button>
			</form>
		</ul>
		<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<label class="user-label" v-if="isLogged">{{ user }}</label>
				<button type="button" class="btn btn-info my-button btn-add" v-on:click="logoutClicked" v-if="isLogged">Wyloguj</button>
			</li>
		</ul>
		</nav>
  </div>
</template>

<script>
import { UserStore } from '../DataHolders/User.js'
import { Events } from '../States/EventObserver.js'

export default {
  name: 'NavBar',

  data: () => ({
    home: 'Home',
    storyboards: 'Tablice',
    title: 'Trello',
	user: "Użytkownik " + UserStore.getCurrentUser(),
	isLogged: false,
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
	},
	
	logoutClicked: function() {
		UserStore.logoutUser()
		this.refreshVisibility()
		this.$router.push("/login")
	},

	refreshVisibility: function() {
		this.user = "Użytkownik " + UserStore.getCurrentUser()
		this.isLogged = UserStore.isLoggedIn()
	}
  },

  mounted () {
        Events.assingNavBarRefresh(this.refreshVisibility)
    },

    beforeDestroy() {
        Events.clearNavBarRefresh()
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