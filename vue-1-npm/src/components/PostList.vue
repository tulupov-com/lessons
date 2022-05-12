<template>
    <div v-if="posts.length > 0">
        <h3>Список постов:</h3>
        
        <post-item 
            v-for="post in posts" 
            :post="post" 
            :key="post.id" 
            @remove="$emit('remove', post)"
        />
    </div>
    <div v-else>
        <h3>Постов нет: добавьте первый...</h3>
    </div>
    <!-- v-if удаляет элемент полностью из DOM дерева, если этого не нужно то надо использовать v-show который отвечает за display св-во -->
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