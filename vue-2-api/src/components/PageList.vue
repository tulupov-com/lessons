<template>
    <page-item
        v-for="page in pages"
        :page="page"
        :key="page"
        @changePage="$emit('changePage', page)"
    />
</template>

<script>
import PageItem from '@/components/PageItem.vue'
export default {
    components: { PageItem },
    // в дочернем элементе props изменять НЕЛЬЗЯ !!!
    props: {
        pages: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
</style>