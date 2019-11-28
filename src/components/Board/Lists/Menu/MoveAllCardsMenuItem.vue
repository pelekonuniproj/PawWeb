<template>
    <div class="modal block-modal" tabindex="-1" id="moveAllCards" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <div style="text-align: center;">Przenieś listę</div>
                    </h5>
                    <button type="button" class="close" v-on:click="handleMoveAllCards" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div id="buttons-move-all-cards">
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MoveAllCardsMenuItem",
        data: function () {
            return {
                buttonsAdded: false,
            }
        },
        mounted() {
            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-block btn-move-all-cards")
            button.innerHTML = this.$parent.sectionName + "(aktualny)";
            button.disabled = true
            this.$el.querySelector("#buttons-move-all-cards").appendChild(button)
        },
        methods:{
            handleMoveAllCards(){
                this.$emit("show")
            }
        }
    }
</script>

<style scoped>
    .block-modal{
        display: block;
    }
</style>