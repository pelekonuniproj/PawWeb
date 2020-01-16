<template>
<transition name="modal-fade">
    <div class="my-modal-backdrop">
        <div class="my-modal">
            <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Utwórz nową tablicę</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="closeView">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="text" placeholder="Nazwa tablicy..." v-model="typedName" v-on:change="onNameInputChange" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" v-bind:class="submitBtnStyle" v-on:click="createTable" v-bind:disabled="submitBtnDisabled">Utwórz tablice</button>
                    </div>
                </div>
        </div>
    </div>
</transition>
</template>

<script>
import { ApiClient } from '../Api/ApiClient.js'
import { Events } from '../States/EventObserver.js'

export default {
    name: 'NewBoardView',

    data: () => ({
        typedName: "",
        submitBtnDisabled: true,
        submitBtnStyle: "btn btn-secondary",
    }),

    methods: {
        createTable: function() {
            var self = this
            ApiClient.createBoard(this.typedName, function(response) {
                    /* eslint-disable no-console */
                    console.log("On board create success ");
                    console.log(response);
                    /* eslint-enable no-console */

                    if (response.status == 201) {
                        Events.callBoardRefresh();
                        self.$emit("close-board")
                    }
            })
        },

        onNameInputChange: function() {
            if (this.typedName != "") {
                this.submitBtnDisabled = false
                this.submitBtnStyle = "btn btn-success"
            }
            else {
                this.submitBtnDisabled = true
                this.submitBtnStyle = "btn btn-secondary"
            }
        },

        closeView: function() {
            this.$emit("close-board")
        }
    }
}
</script>

<style scoped>

    .my-modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .my-modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

</style>