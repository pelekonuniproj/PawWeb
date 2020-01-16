<template>
    <div class="row">
        <div class="col-10">
            <div class="card">
                <div class="card-body">{{ name }}</div>
            </div>
        </div>
        <div class="col-0">
            <i class="material-icons task-icon icon" v-on:click="downloadFile">file_download</i>
            <i class="material-icons task-icon icon" style="margin-left: 5px" v-on:click="deleteFile">delete_forever</i>
        </div>
    </div>
</template>

<script>

    import {ApiClient} from '../../../Api/ApiClient'

    export default {
        name: "Attachment",
        props: ["id", "name", "attachment"],
        methods: {
            downloadFile() {
                //TODO
            },
            deleteFile() {
                ApiClient.deleteAttachment(this.id, function () {
                    /* eslint-disable no-console */
                    console.log("Success - task deleted");
                }, function (response) {
                    /* eslint-disable no-console */
                    console.log("Fail - task deleted: " + response);
                })
            },
        }
    }
</script>

<style scoped>
    .icon {
        cursor: pointer;
        color: #17A2B8;
    }
</style>