<template>
	<div>
		<BoardTitleBar v-bind:boardName="boardName"/>
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
    }),
	// https://github.com/SortableJS/Vue.Draggable
    methods: {
		didDrag() {
			/* eslint-disable no-console */
			console.log("List Order Changed!");
			console.log(this.sections);
             /* eslint-enable no-console */
		},
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