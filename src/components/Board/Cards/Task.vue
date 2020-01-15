<template>
    <div class="form-group details-group">
        <div class="row" style="margin-left: 10px" >
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="taskDone">
                <label class="form-check-label" for="taskDone">{{ name }}</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Task",
        props: ["done", "name"],
    }



</script>

<style scoped>

</style>