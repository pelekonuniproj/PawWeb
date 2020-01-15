<template>
    <div class="form-group details-group">
        <div class="row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="taskDone">
                <label class="form-check-label" for="taskDone">{{ description }}</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Task",
        props: ["isDone", "description"],
    }



</script>

<style scoped>

</style>