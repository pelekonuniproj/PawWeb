
const navBar = new Vue({
	el: '#navBar',
	data: {
		home: 'Home',
		storyboards: 'Tablice',
		title: 'Trello',
	},
	methods: {
		goToMainPage: function(){
			router.push({ path: '/'})
		},

		goToBoards: function() {
			router.push('/pelekon/boards')
		}
		
	}
})

var sideMenu = new Vue({
	el: '#sideMenu',
	data: {
		boards: 'Tablice',
		main: 'Strona główna',
		isVisible: true,
	},
	methods: {
		sideMenuShowBoards: function() {
			console.log("Side menu boards clicked!")
			router.push('/pelekon/boards')
		},
		sideMenuShowMain: function() {
			router.push({ path: '/'})
		},
	},
})

// Object representing list of available obards for current user

var boardsList  = new Vue({
	//el: '#boardsList',
	data: {
		myList: [
			{ index: 1, name: "Paw", urlName: "paw" },
			{ index: 2, name: "PGiAnUP 1", urlName: "pgianup1" },
			{ index: 3, name: "PGiAnUP 2", urlName: "pgianup2" },
			{ index: 4, name: "PGiAnUP 3", urlName: "pgianup3" },
			{ index: 5, name: "PGiAnUP 4", urlName: "pgianup4" },
			{ index: 6, name: "PGiAnUP 5", urlName: "pgianup5" },
			{ index: 7, name: "PGiAnUP 6", urlName: "pgianup6" },
		]
	},
});

Vue.component('boards-list', {
	template: `<div class="d-flex">
		<div class="card board-card" v-for='board in boards'>
			<div class="board-card" v-on:click="showExactBoard(board.index, board.urlName)">
				<p class="board-card-text"> {{ board.name }} </p>
			</div>
		</div>
	</div>
	`,

	data: function() {
		return {
			boards: boardsList.myList
		}
	},

	methods: {
		showExactBoard: function(id, url) {
			console.log("OnClick! Board nr: " + id)
			sideMenu.isVisible=false
			router.push('/b/' + this.$route.params.username + '/' + url)
		}
	}
})

var Boards = {
	template: `<boards-list></boards-list>`,

	mounted: function() {
		sideMenu.isVisible=true
	}
}

//////////////////////////////////////////////////////////////////

// Object representing data for certain bard which contains tasts etc

var boardData = new Vue({
	//el: '#userBoard',
	data: {
		sections: [
			{ name: "Todo", id: 1, taskList: [
				{ name: 'Task 1.1' },
				{ name: 'Task 1.2' },
				{ name: 'Task 1.3' },
			] },
			{ name: "In progress", id: 2, taskList: [
				{ name: 'Task 2.1' },
				{ name: 'Task 2.2' },
				{ name: 'Task 2.3' },
				{ name: 'Task 2.4' },
			] },
			{ name: "Done", id: 3, taskList: [
				
			] },
		],
	}
})

Vue.component('board-task-item', {
	props: ['taskName'],

	template: `<div class="board-task">
		<p class="board-task-title">{{ taskName }}</p>
	</div>`,

	// data: function() {
	// 	return {s
	// 		//tasks: boardData.tasks[0]
	// 	}
	// },

	methods: {
		showTask: function(taskId) {

		}
	}
})

Vue.component('user-board', {
	template: `<div class="board-main d-flex flex-row">
	<div v-for='section in sections'>
		<div class='board-section'>
			<p class="board-section-title"> {{ section.name }} </p>

			<div class="d-flex flex-column board-section-task-holder" v-for='task in section.taskList'>
				<board-task-item v-bind:taskName="task.name"></board-task-item>
			</div>
		</div>
	</div>
	</div>`,

	data: function() {
		return {
			sections: boardData.sections
		}
	}	
})

var BoardPage = {
	template: '<user-board>Nic tu nie ma</user-board>',

	mounted: function() {
		sideMenu.isVisible=false
	}
}

/////////////////////////////////////////////////////////////////

var MainPage = {
	template: `<div class="card">
	<img src="" class="card-img-top" />
	<div class="card-body">
	<p class="card-text">Wygląda na to, że nic to nie ma</p>
	</div>
	</div>`,

	mounted: function() {
		sideMenu.isVisible=true
	}
}

// https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
var router = new VueRouter({
	routes: [
		{path: '/:username/boards', component: Boards},
		{path: '', component: MainPage},
		{path: '*', component: MainPage},
		{path: '/b/:user/:boardname', component: BoardPage}
	]
})

var mainApp = new Vue({
	router
}).$mount('#mainApp')