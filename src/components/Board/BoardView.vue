<template>
	<div>
		<BoardTitleBar v-bind:boardName="boardName"/>
	<div class="board-main d-flex flex-row">
		<BoardSection v-for="section in sections" v-bind:key="section.id" v-bind:sectionName="section.name" v-bind:id="section.id"/>
		<AddList></AddList>
    </div>
	</div>
</template>

<script>
import BoardSection from './BoardSection.vue'
import BoardTitleBar from './BoardTitleBar.vue'
import AddList from "./AddList"
import { ApiClient } from '../Api/ApiClient'

export default {
    name: 'BoardView',
    components: {
		AddList,
		BoardSection,
		BoardTitleBar,
    },

    data: () => ({
		sections: [],
		boardId: null,
		boardName: "",
    }),

    methods: {

	},
	
	mounted() {
		var self = this
		ApiClient.getBoardDetails(this.$route.params.user, this.$route.params.boardname, function(response) {
			if (response.isPublic == true) {
				self.sections = response.lists
				self.boardId = response.id
				self.boardName = response.name
			}
		})
	}
}
</script>

<style scoped>

	.board-main {
		width: 100%;
		height: 100%;
	}

</style>