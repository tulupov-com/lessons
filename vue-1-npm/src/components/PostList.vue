<template>
    <div>
        <h3>Список постов:</h3>
        <post-item 
            v-for="post in posts" 
            :post="post" 
            :key="post.id" 
        />
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
export default {
    components: { PostItem },
    // в дочернем элементе props изменять НЕЛЬЗЯ !!!
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
</style>