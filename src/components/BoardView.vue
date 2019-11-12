<template>
    <div class="board-main d-flex flex-row">
        <BoardSection v-for="section in sections" v-bind:key="section.id" v-bind:sectionName="section.name"
                        v-bind:tasksList="section.taskList"/>
    </div>
</template>

<script>
import BoardSection from './BoardSection.vue'

export default {
    name: 'BoardView',
    components: {
        BoardSection,
    },

    data: () => ({
        sections: [
			{ name: "Todo", id: 1, taskList: [
				{ name: 'Task 1.1', id: 1 },
				{ name: 'Task 1.2', id: 2 },
				{ name: 'Task 1.3', id: 3 },
			] },
			{ name: "In progress", id: 2, taskList: [
				{ name: 'Task 2.1', id: 3 },
				{ name: 'Task 2.2', id: 4 },
				{ name: 'Task 2.3', id: 5 },
				{ name: 'Task 2.4', id: 6 },
			] },
			{ name: "Done", id: 3, taskList: [
				
			] },
		],
    }),

    methods: {

    },
}
</script>