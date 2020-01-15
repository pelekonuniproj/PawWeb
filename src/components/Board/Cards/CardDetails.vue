<template>
        <div class="modal-dialog details-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ cardName }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="closeDetails">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-9">
                                    <input type="text" class="form-control" id="comment-label"
                                           placeholder="Napisz komentarz...">
                                </div>
                                <div class="col-3">
                                    <button type="button" v-on:click="addComment" class="btn btn-info my-button">Zapisz</button>
                                </div>
                            </div>
                        </div>
                        <Detail class="form-group details-group" v-for="detail in detailsList" v-bind:key="detail.id"
                                v-bind:content="detail.content" v-bind:date="detail.addDate" v-bind:user="detail.userName" />
                    </form>
                </div>
            </div>
        </div>
</template>

<script>

    import { ApiClient } from '../../../Api/ApiClient'
    import Detail from './CardDetail.vue'

    export default {
        name: "CardDetails",
        props: ['cardId', 'cardDescription', 'cardName'],
        components: {
            Detail
        },

        data: () => ({
            areVisible: false,
            detailsList: [],
        }),

        methods:{
            closeDetails() {
                this.$emit("close-details")
            },
            addComment() {

            },
            downloadComments() {
                var self = this;
                ApiClient.getCommentsForCard(function(response) {
                    self.detailsList = response;
                    for(var i = 0; i < self.detailsList.length; i++) {
                        var date = new Date(self.detailsList[i].addDate);
                        self.detailsList[i].addDate =date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
                    }
                }, self.cardId)
            }
        },

        mounted () {
            this.downloadComments();
        },

    }

</script>

<style scoped>

    .details-dialog {
        display: block;
        width: 460px;
        padding: 20px;
        position: fixed;
        left: 0;
        top: 200px;
        right: 0;
    }
    .details-group {
        margin-left: 20px;
    }

</style>
