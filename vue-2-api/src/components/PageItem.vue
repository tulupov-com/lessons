<template>
    <div
        class="page"
        :class="{
            'current__page': current
        }"
        @click="$emit('changePage', page)"
    > 
        {{ page }}
    </div>
</template>

<script>
export default {
    props: {
        page: {
            type: Object,
            required: true,
        },
        current: {
            type: Boolean,
            required: true,
        }
    }
}
</script>

<style scoped>
.page {
    border: 1px solid black;
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
}
.current__page {
    background: teal;
}
</style>