<template>
    <div v-if="posts.length > 0">
        <h3>Список постов:</h3>
        <transition-group name="post-list">
            <post-item 
                v-for="post in posts" 
                :post="post" 
                :key="post.id" 
                @remove="$emit('remove', post)"
            />
        </transition-group>
        
    </div>
    <div v-else>
        <h3>Постов нет: добавьте первый...</h3>
    </div>
    <!-- v-if удаляет элемент полностью из DOM дерева, если этого не нужно то надо использовать v-show, который отвечает за display св-во -->
</template>

<script>
import PostItem from '@/components/PostItem.vue';
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
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>