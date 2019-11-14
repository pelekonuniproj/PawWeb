<template>
<transition name="modal-fade">
    <div class="my-modal-backdrop">
        <div class="my-modal">
            <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" v-on:click="closeView"> X </button>
                    </div>
                    <div class="modal-body">
                        <input type="text" placeholder="Dodaj nazwe tablicy" v-model="typedName" v-on:change="onNameInputChange" />
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
export default {
    name: 'NewBoardView',

    data: () => ({
        typedName: "",
        submitBtnDisabled: true,
        submitBtnStyle: "btn btn-secondary",
    }),

    methods: {
        createTable: function() {

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