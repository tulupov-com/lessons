<template>
    <div class="app">
        <h2>Добавление поста:</h2>
        <my-button @click="fetchPosts">Получить посты</my-button>
        <my-button
            @click="showDialog"
            style="margin: 15px 0;"
        >Создать пост</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form 
                @create="createPost"
            />
        </my-dialog>
        <post-list 
            :posts="posts" 
            @remove="removePost"
        />
        <!-- вместо v-bind: можно использовать просто : вместо v-on: можно использовать @: -->
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/myDialog.vue";
import MyButton from "@/components/UI/myButton.vue";
import axios from 'axios';

export default {
    components: {
        PostForm,
        PostList,
        MyDialog,
        MyButton
    },
    data() {
        return {
            posts: [
                { id: 1, title: "JavaScript 1", body: "Описание поста 1" }
                // не забывайте, что в массиве не как в объекте нельзя оставлять последнюю запятую
            ],
            dialogVisible: false
        }
    },
    methods: {
        createPost(post) {
            // console.log(post, second, third);
            const newPost = {
                id: Date.now(),
                title: post.outTitle,
                body: post.outBody
            };
            this.posts.push(newPost);
            this.dialogVisible = false;
        },
        removePost(post) {
            // console.log('removePost', post)
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1');
                // console.log(response);
                this.posts = response.data;
            } catch (error) {
                alert('Ошибка ', error);
            }
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
h2 {
    padding: 1rem 0;
}
</style>