<template>
    <div class="form-group details-group">
        <div class="row">
            <span>
                <span id="user" class="user-span">{{ user }}</span> <span id="comment" class="comment-span"> {{ content }}</span>
            </span>
        </div>
        <div class="row">
            <span>
                <span class="date-span">dnia </span><span id="date" class="data-span">{{ date }}</span>
            </span>
        </div>
    </div>
</template>
<script>

    export default {
        name: "Detail",
        props: ["date", "content", "user"],
    }



</script>

<style scoped>
    .details-group {
        margin-left: 20px;
    }
    .user-span {
        font-weight: bold;
    }
    .comment-span {
    }
    .date-span {
        font-size: 14px;
    }
</style>