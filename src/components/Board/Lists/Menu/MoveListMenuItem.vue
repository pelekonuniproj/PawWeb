<template>
    <div class="modal block-modal" tabindex="-1" id="moveList" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <div style="text-align: center;">Przenieś listę</div>
                    </h5>
                    <button type="button" class="close" v-on:click="handleShowMoveList" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <select class="form-control" name="Tablica">
                            <option>Paw</option>
                            <option>PGiAnUP 1</option>
                            <option>PGiAnUP 2</option>
                            <option>PGiAnUP 3</option>
                            <option>PGiAnUP 4</option>
                            <option>PGiAnUP 5</option>
                            <option>PGiAnUP 6</option>
                        </select>
                    </form>
                    <form>
                        <select class="form-control" name="Pozycja">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </form>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light move-list-button-form">Przenieś</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MoveListMenuItem",
        methods:{
            handleShowMoveList(){
                this.$emit("show")
            }
        }
    }
</script>

<style scoped>
    .move-list-button-form {
        margin: 6px;
        background-color: lightblue;
        border: none;
    }
    .block-modal{
        display: block;
    }
</style>