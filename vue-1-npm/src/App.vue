<template>
    <div class="app">
        <div>
            <button class="btn" v-on:click="addLike">Like</button>
            <button class="btn" @click="addDislike">Dislike</button>
        </div>
        <div>Кол-во лайков: <strong>{{ likes }}</strong></div>
        <div>Кол-во дизлайков: <strong>{{ dislikes }}</strong></div>
        <form>
            <h3>Добавление поста:</h3>
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
            <button class="btn" @click="createPost" type="button">Добавить</button>
            <!-- не забыть type="button" чтобы страница не перерисовывалась -->
        </form>
        <div class="post" v-for="post in posts" v-bind:key="post.id">
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div><strong>Описание: </strong>{{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            likes: 0,
            dislikes: 0,
            posts: [
                { id: 1, title: "JavaScript 1", body: "Описание поста 1" },
                { id: 2, title: "JavaScript 2", body: "Описание поста 2" },
                { id: 3, title: "JavaScript 3", body: "Описание поста 3" },
                { id: 4, title: "JavaScript 4", body: "Описание поста 4" }
            ],
            inTitle: '',
            inBody: ''
        }
    },
    methods: {
        addLike() {
            this.likes += 1
        },
        addDislike() {
            this.dislikes += 1
        },
        createPost() {
            
            this.inTitle = ''
            this.inBody = ''
        },
        inputBody(event) {
            // console.log(event)
            this.inBody = event.target.value
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
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