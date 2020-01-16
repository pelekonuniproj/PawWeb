<template>
    <div class='board-section board-list'>
        <div class="d-flex flex-row justify-content-between">
            <form>
                <input class="board-section-title board-list-title" id="section-name" type="text" :value=sectionName>
            </form>
            <EditListMenu @showAddCard="handleShowAddCard" @showArchive="handleArchiveAllCards" @showCopyList="handleShowCopyList"
            @showMoveAllCards="handleMoveAllCards" @showSort="handleSortAllCards" @showMoveList="handleShowMoveList"/>
        </div>
        <component v-bind:is="componentName" @show="close"/>
        <draggable v-model="cards" @end="didDrag">
            <BoardCard class="d-flex flex-column board-section-card-holder" v-for="card in cards" v-bind:key="card.id"
                    v-bind:name="card.title" v-bind:id="card.id" v-bind:desc="card.description" />
        </draggable>
        <AddCard v-bind:listId="id" @refresh-cards="downloadCards" />
    </div>
</template>

<script>
import BoardCard from './BoardCard.vue'
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
            BoardCard,
            draggable,
        },
        
        props: ['sectionName', 'cardsList', 'id'],
        
        data: function () {
            return {
                componentName: null,
                cards: []
            }
        },
        
        mounted() {
            this.downloadCards()
        },
        
        methods: {
            downloadCards() {
                var self = this
                ApiClient.getCardsForBoardSection(this.id, function(response) {
                    self.cards = response
                    self.cards.sort( (a, b) => (a.numberOnList < b.numberOnList) ? -1 : ((a.numberOnList > b.numberOnList) ? 1 : 0))
                })
            },

            didDrag() {
                var index = 1
                this.cards.forEach(element => {
                    element.numberOnList = index
                    index += 1
                })

                this.createRequestBodyAndSend()
            },

            createRequestBodyAndSend() {
                var bodyArray = []

                this.cards.forEach(element => {
                    bodyArray.push({
                        cardId: element.id,
                        numberOnList: element.numberOnList
                    })
                })
                
                ApiClient.updateBoardCardOrder(this.id, bodyArray)
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
    .board-list {
        background: #048998;
    }
    .board-list-title {
        color: #FFFFFF;
    }
</style>
