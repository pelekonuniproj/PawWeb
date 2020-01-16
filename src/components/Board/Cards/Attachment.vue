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
    export default {
        name: "Attachment",
        props: ["id", "name", "attachment"],
        methods: {
            downloadFile() {
                //TODO
            },
            deleteFile() {
                //TODO
            }
        }
    }
</script>

<style scoped>
    .icon {
        cursor: pointer;
        color: #17A2B8;
    }
</style>