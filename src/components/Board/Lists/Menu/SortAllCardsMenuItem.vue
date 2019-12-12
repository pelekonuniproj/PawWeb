<template>
    <div class="modal block-modal" tabindex="-1" id="sortAllCards" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <div style="text-align: center;">Przenieś listę</div>
                    </h5>
                    <button type="button" class="close" v-on:click="handleSortAllCards" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <button class="btn-move-all-cards btn-light">Data utworzenia (od najnowszych)</button>
                <button class="btn-move-all-cards btn-light">Data utworzenia (od najstarszych)</button>
                <button class="btn-move-all-cards btn-light">Nazwy kart (alfabetycznie)</button>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SortAllCardsMenuItem",
        methods:{
            handleSortAllCards(){
                this.$emit("show")
            }
        }
    }
</script>

<style scoped>
    .btn-move-all-cards{
        border: none;
        width: 100%;
    }
    .block-modal{
        display: block;
    }
</style>