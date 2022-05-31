<template>
    <div
        class="page"
        :class="{
            'current__page': page.number === 1
        }"
        @click="$emit('changePage', page.number)"
    > 
        {{ page.number }}
    </div>
</template>

<script>
export default {
    props: {
        page: {
            type: Object,
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