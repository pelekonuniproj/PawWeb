<template>
    <div class="row">
        <div class="modal-dialog details-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Aktywność</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                                    <button type="button" class="btn btn-info my-button">Zapisz</button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group details-group">
                            <div class="row">
                                <span>
                                    <span id="user" class="user-span">Użytkownik</span> <span id="comment" class="comment-span"> utworzył zadanie</span>
                                </span>
                            </div>
                            <div class="row">
                                <span>
                                    <span class="data-span">dnia </span><span id="date" class="data-span">13.12.2019</span>
                                </span>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Details",
    }
</script>

<style scoped>
    .details-dialog {
        width: 460px;
        padding: 20px;
    }
    .details-group {
        margin-left: 20px;
    }
    .user-span {
        font-weight: bold;
    }
    .comment-span {
    }
    .data-span {
        font-size: 14px;
    }
</style>