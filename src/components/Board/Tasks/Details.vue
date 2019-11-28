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
                        <Detail class="form-group details-group" v-for="detail in detailsList" v-bind:key="detail.id"
                                v-bind:comment="detail.comment" v-bind:date="detail.date" v-bind:user="detail.user" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Detail from './Detail.vue'

    export default {
        name: "Details",
        components: {
            Detail
        },

        data: () => ({
            detailsList: [
                {id: 1, date: "14.12.2019", comment: "zmienił nazwę", user: "Inny użytkownik"},
                {id: 2, date: "13.12.2019", comment: "utworzył zadanie", user: "Użytkownik"},
            ],
        }),

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

</style>
