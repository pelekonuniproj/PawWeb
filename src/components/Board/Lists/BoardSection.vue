<template>
    <div class='board-section'>
        <div class="d-flex flex-row justify-content-between">
            <form>
                <input class="board-section-title" id="section-name" type="text" :value=sectionName>
            </form>
            <EditListMenu @showAddCard="handleShowAddCard" @showArchive="handleArchiveAllCards" @showCopyList="handleShowCopyList"
            @showMoveAllCards="handleMoveAllCards" @showSort="handleSortAllCards" @showMoveList="handleShowMoveList"/>
        </div>
        <component v-bind:is="componentName" @show="close"/>
        <draggable v-model="tasks" @end="didDrag">
            <BoardTask class="d-flex flex-column board-section-task-holder" v-for="task in tasks" v-bind:key="task.id"
                    v-bind:name="task.title" v-bind:id="task.id" v-bind:desc="task.description" />
        </draggable>
        <AddCard/>
    </div>
</template>

<script>
import BoardTask from './BoardTask.vue'
import { ApiClient } from '../../../Api/ApiClient'
import AddCardMenuItem from "./Menu/AddCardMenuItem";
import ArchiveAllCardsMenuItem from "./Menu/ArchiveAllCardsMenuItem";
import CopyListMenuItem from "./Menu/CopyListMenuItem";
import EditListMenu from "./Menu/EditListMenu";
import MoveAllCardsMenuItem from "./Menu/MoveAllCardsMenuItem";
import MoveListMenuItem from "./Menu/MoveListMenuItem";
import SortAllCardsMenuItem from "./Menu/SortAllCardsMenuItem";
import AddCard from "./AddCard";
import draggable from 'vuedraggable'

    export default {
        name: "BoardSection",
        components: {
            AddCard,
            SortAllCardsMenuItem,
            MoveListMenuItem,
            MoveAllCardsMenuItem,
            EditListMenu,
            CopyListMenuItem,
            ArchiveAllCardsMenuItem,
            AddCardMenuItem,
            BoardTask,
            draggable,
        },
        
        props: ['sectionName', 'tasksList', 'id'],
        
        data: function () {
            return {
                componentName: null,
                tasks: []
            }
        },
        
        mounted() {
            var self = this
            ApiClient.getTasksForBoardSection(this.id, function(response) {
                self.tasks = response
                self.tasks.sort( (a, b) => (a.numberOnList < b.numberOnList) ? -1 : ((a.numberOnList > b.numberOnList) ? 1 : 0))
            })
        },
        
        methods: {
            didDrag() {
                var index = 1
                this.tasks.forEach(element => {
                    element.numberOnList = index
                    index += 1
                })

                this.createRequestBodyAndSend()
            },

            createRequestBodyAndSend() {
                // var bodyArray = []

                // this.tasks.forEach(element => {
                //     bodyArray.push({

                //     })
                // })
            },

            handleShowAddCard() {
                if(this.componentName===AddCardMenuItem){
                    this.componentName = null
                }
                else{
                    this.componentName = AddCardMenuItem
                }

            },
            close(){
                this.componentName = null
            },
            handleShowCopyList() {
                if(this.componentName===CopyListMenuItem){
                    this.componentName = null
                }
                else{
                    this.componentName = CopyListMenuItem
                }
            },
            handleShowMoveList() {
                if(this.componentName===MoveListMenuItem){
                    this.componentName = null
                }
                else{
                    this.componentName = MoveListMenuItem
                }
            },
            handleMoveAllCards() {
                if(this.componentName===MoveAllCardsMenuItem){
                    this.componentName = null
                }
                else{
                    this.componentName = MoveAllCardsMenuItem
                }
            },
            handleArchiveAllCards() {
                if(this.componentName===ArchiveAllCardsMenuItem){
                    this.componentName = null
                }
                else{
                    this.componentName = ArchiveAllCardsMenuItem
                }
            },
            handleSortAllCards() {
                if(this.componentName===SortAllCardsMenuItem){
                    this.componentName = null
                }
                else{
                    this.componentName = SortAllCardsMenuItem
                }
            }
        },        
    }
</script>
<style scoped>
</style>
