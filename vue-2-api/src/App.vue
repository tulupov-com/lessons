<template>
    <div class="app">
        <h2>Добавление поста:</h2>
        <div class="app__btns">
            <my-button @click="fetchPosts">Получить посты</my-button>
            <my-button
                @click="showDialog"
            >
                <!-- style="margin: 15px 0;" -->
                Создать пост
            </my-button>
            <my-select 
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        
        <my-dialog v-model:show="dialogVisible">
            <post-form 
                @create="createPost"
            />
        </my-dialog>
        <post-list 
            :posts="sortedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <!-- :posts="posts"  в случае watch, иначе в случае computed -->
        <div v-else>Идёт загрузка...</div>
        <!-- вместо v-bind: можно использовать просто : вместо v-on: можно использовать @: -->
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/myDialog.vue";
import MyButton from "@/components/UI/myButton.vue";
import MySelect from "@/components/UI/mySelect.vue";
import axios from 'axios';

export default {
    components: {
        PostForm,
        PostList,
        MyDialog,
        MyButton,
        MySelect
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По содержимому' },
            ],
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
            this.isPostsLoading = true;
            try {
                // setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1');
                    // console.log(response);
                    this.posts = response.data;
                    // this.isPostsLoading = false;
                // }, 1000)
            } catch (error) {
                alert('Ошибка ', error);
            } finally {
                this.isPostsLoading = false;
            }
        }
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        }
    }
    // watch: {
    //     selectedSort(newValue) {
    //         // console.log(newValue)
    //         this.posts.sort((post1, post2) => {
    //             // return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //             return post1[newValue]?.localeCompare(post2[newValue])
    //         })
    //     }
    // }
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
.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}
</style>