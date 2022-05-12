<template>
    <div class="app">
        <div style="margin-bottom: .5rem;">
            <button class="btn" v-on:click="addLike">Like</button>
            <button class="btn" @click="addDislike">Dislike</button>
        </div>
        <div>Кол-во лайков: <strong>{{ likes }}</strong></div>
        <div>Кол-во дизлайков: <strong>{{ dislikes }}</strong></div>
        <h2>Добавление поста из App.vue:</h2>
        <form @submit.prevent>
            <input 
                v-bind:value="inTitle"
                @input="inTitle = $event.target.value" 
                class="input" 
                type="text" 
                placeholder="Название" 
            >
            <input 
                :value="inBody"
                @input="inputBody" 
                class="input" 
                type="text" 
                placeholder="Описание" 
            >
            <button class="btn" @click="createPost">Добавить</button>
            <!-- не забыть <form @submit.prevent> чтобы страница не перерисовывалась -->
        </form>
        <div class="post" v-for="post in posts" v-bind:key="post.id">
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div><strong>Описание: </strong>{{ post.body }}</div>
        </div>
        <h2>Добавление поста из PostForm.vue:</h2>
        <my-button
            @click="showDialog"
        >Создать пост</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form 
                @create="createPostNew"
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
import MyDialog from "./components/UI/myDialog.vue";
import MyButton from "./components/UI/myButton.vue";
export default {
    components: {
    PostForm,
    PostList,
    MyDialog,
    MyButton
},
    data() {
        return {
            likes: 0,
            dislikes: 0,
            posts: [
                { id: 1, title: "JavaScript 1", body: "Описание поста 1" }
                // не забывайте, что в массиве не как в объекте нельзя оставлять последнюю запятую
            ],
            inTitle: '',
            inBody: '',
            dialogVisible: false
        }
    },
    methods: {
        addLike() {
            this.likes += 1;
        },
        addDislike() {
            this.dislikes += 1;
        },
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.inTitle,
                body: this.inBody
            };
            this.posts.push(newPost);
            this.inTitle = '';
            this.inBody = '';
        },
        inputBody(event) {
            // console.log(event)
            this.inBody = event.target.value;
        },
        createPostNew(post, second, third) {
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
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
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
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
form {
    display: flex;
    flex-direction: column;
}
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 10px;
}
.btn {
    margin: 15px 5px 0;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    border: 1px solid teal;
    cursor: pointer;
}
</style>