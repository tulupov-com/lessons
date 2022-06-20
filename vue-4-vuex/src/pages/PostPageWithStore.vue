<template>
    <div>
        <h1>{{ $store.state.post.limit }}</h1>
        <!-- {{ $store.commit('user/setLoading') }} это пример вызова функции из определённого модуля -->
        <h1>{{ $store.state.likes }}</h1>
        <h1>{{ $store.getters.doubleLikes }}</h1>
        <div>
            {{ $store.state.isAuth ? "Пользователь авторизован" : "Пользователь не авторизован" }}
            <my-button @click="$store.commit('Auth')">Авторизация</my-button>
        </div>
        <div>
            <my-button @click="$store.commit('incLikes')">Лайк</my-button>
            <my-button @click="$store.commit('decLikes')">Дизлайк</my-button>
        </div>
        <h2>Страница с постами</h2>
        <!-- <my-input
            v-focus
            v-model="searchQuery"
            placeholder="Поиск..."
        /> -->
        <div class="app__btns">
            <my-button @click="fetchPosts">Получить посты</my-button>
            <my-button
                @click="showDialog"
            >
                <!-- style="margin: 15px 0;" -->
                Создать пост
            </my-button>
            <!-- <my-select 
                v-model="selectedSort"
                :options="sortOptions"
            /> -->
        </div>
        
        <my-dialog v-model:show="dialogVisible">
            <post-form 
                @create="createPost"
            />
        </my-dialog>
        <post-list 
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <!-- :posts="posts" в случае watch, :posts="sortedPosts" в случае computed -->
        <!-- <div v-else>Идёт загрузка...</div> -->
        <!--div class="page__wrapper">
            <div 
                v-for="pageNumber in totalPages" 
                :key="pageNumber"
                class="page"
                :class="{
                    'current__page': page === pageNumber
                }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
            <page-list
                :pages="pages"
                :current="this.page"
                @changePage="changePage"
            />
        </div--> <!-- пагинация, которую поменяли на бесконечную ленту -->
        <!--div ref="observer" class="observer"></div-->
        <!--div v-intersection="{name: 'это Vue.js'}" class="observer"-->
        <!-- можно даже функцию вводить в значение intersection -->
        <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
        <!-- вместо v-bind: можно использовать просто : вместо v-on: можно использовать @ -->
    </div>
</template>

<script>
import axios from 'axios';
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PageList from "@/components/PageList.vue";
import MyButton from '@/components/UI/myButton.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    components: {
    PostForm,
    PostList,
    PageList,
    MyButton
},
    data() {
        return {
            dialogVisible: false
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),
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
            // console.log('removePost', post);
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        }
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        // sortedPosts() {
        //     if(this.selectedSort === 'id')
        //         return [...this.posts].sort((post1, post2) => post1[this.selectedSort] > post2[this.selectedSort])
        //     else
        //         return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        // },
        // sortedAndSearchedPosts() {
        //     return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        // }
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
    },
    watch: {
    //     selectedSort(newValue) {
    //         // console.log(newValue);
    //         this.posts.sort((post1, post2) => {
    //             // return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
    //             return post1[newValue]?.localeCompare(post2[newValue]);
    //         })
    //     }
        // page() {
        //     this.fetchPosts();
        // }
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
h2 {
    padding: 1rem 0;
}
.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}
.page__wrapper {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
}
.current__page {
    background: teal;
}
.observer {
    height: 38px;
    /* background: green; */
}
</style>