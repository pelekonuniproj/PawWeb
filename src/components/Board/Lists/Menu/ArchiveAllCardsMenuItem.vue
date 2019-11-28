<template>
    <div class="modal block-modal" tabindex="-1" id="archiveAllCards" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <div style="text-align: center;">Zarchiwizować wszystkie karty z...</div>
                    </h5>
                    <button type="button" class="close" v-on:click="handleArchiveAllCards" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="div-text">
                    Ta opcja usunie wszystkie karty z listy na tablicy. Żeby zobaczyć zarchiwizowane karty i je przywrócić, kliknij "Menu" > "Zarchiwizowane karty"
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-danger copy-list-button-form">Zarchiwizuj wszystko</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArchiveAllCards",
        methods:{
            handleArchiveAllCards(){
                this.$emit("show")
            }
        }
    }
</script>

<style scoped>
    .div-text{
        margin: 5px;
    }
    .copy-list-button-form{
        margin: 6px;
        background-color: lightblue;
        border: none;
    }
    .block-modal{
        display: block;
    }
</style>