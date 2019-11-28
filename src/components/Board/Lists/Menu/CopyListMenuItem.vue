<template>
    <div class="modal block-modal" tabindex="-1" id="showCopyForm" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <div style="text-align: center;">Kopiuj listę</div>
                    </h5>
                    <button type="button" class="close" v-on:click="handleShowCopyList" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <input type="text" class="copy-list-form" id="copy-list-form">
                    </form>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light copy-list-button-form">Utwórz listę</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CopyListMenuItem",
        methods:{
            handleShowCopyList(){
                this.$emit("show")
            }
        },
        mounted() {
            this.$el.querySelector("#copy-list-form").setAttribute("value", this.$parent.sectionName)
        }
    }
</script>

<style scoped>
    .copy-list-button-form {
        margin: 6px;
        background-color: lightblue;
        border: none;
    }

    .copy-list-form {
        background: #FFFFFF;
        border: 2px solid lightblue;
        border-radius: 5px;
        width: 250px;
        margin: 6px;
    }
    .block-modal{
        display: block;
    }
</style>