<template>
        <div class="card">
            <div class="card-body">{{ name }}</div>
    </div>
</template>

<script>
    export default {
        name: "Attachment",
        props: ["id", "name", "attachment"],
    }
</script>

<style scoped>

</style>