<template>
	<div>
		<BoardTitleBar v-bind:boardName="boardName" v-bind:canEdit="canEditTitle" @onTitleChange="changedTitleName"/>
	<div class="board-main d-flex flex-row">
		<draggable v-model="sections" @end="didDrag" class="board-main d-flex flex-row">
			<BoardSection v-for="section in sections" v-bind:key="section.id" v-bind:sectionName="section.name" v-bind:id="section.id"/>
			<AddList></AddList>
		</draggable>
    </div>
	</div>
</template>

<script>
import BoardSection from './Lists/BoardSection.vue'
import BoardTitleBar from '../BoardTitleBar.vue'
import AddList from "./Lists/AddList"
import { ApiClient } from '../../Api/ApiClient'
import draggable from 'vuedraggable'
import { UserStore } from '../../DataHolders/User'

export default {
    name: 'BoardView',
    components: {
		AddList,
		BoardSection,
		BoardTitleBar,
		draggable,
    },

    data: () => ({
		sections: [],
		boardId: null,
		boardName: "",
		canEditTitle: false,
    }),
	// https://github.com/SortableJS/Vue.Draggable
    methods: {
		didDrag() {
			var index = 1
			this.sections.forEach(element => {
				element.numberOnBoard = index
				index += 1
			});

			this.makeApiCallBody()
		},

		changedTitleName(newName) {
			ApiClient.updateBoardName(newName, this.boardId)
		},

		makeApiCallBody() {
			var bodyArray = []
			this.sections.forEach(element => {
				bodyArray.push({
					listId: element.id,
					numberOnBoard: element.numberOnBoard
				})
			})

			ApiClient.updateBoardListOrder(this.boardId, bodyArray)
		}
	},
	
	mounted() {
		var self = this
		ApiClient.getBoardDetails(this.$route.params.user, this.$route.params.boardname, function(response) {
			if (response.isPublic == true) {
				self.sections = response.lists
				// sort elements by numberOnBoard as API don't do that by default
				self.sections.sort( (a, b) => (a.numberOnBoard < b.numberOnBoard) ? -1 : ((a.numberOnBoard > b.numberOnBoard) ? 1 : 0))
				self.boardId = response.id
				self.boardName = response.name
				self.canEditTitle = UserStore.isOwningBoard(response.id)
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