<template>
    <div>
        <h2>Страница с постами</h2>
        <my-input
            v-model="searchQuery"
            placeholder="Поиск..."
        />
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
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <!-- :posts="posts" в случае watch, :posts="sortedPosts" в случае computed -->
        <div v-else>Идёт загрузка...</div>
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
        </div-->
        <div ref="observer" class="observer"></div>
        <!-- вместо v-bind: можно использовать просто : вместо v-on: можно использовать @ -->
    </div>
</template>

<script>
import axios from 'axios';
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PageList from "@/components/PageList.vue";

export default {
    components: {
        PostForm,
        PostList,
        PageList
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            pages: [],
            sortOptions: [
                { value: 'id', name: 'По номеру' },
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' },
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
            // console.log('removePost', post);
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        //     // this.fetchPosts();
        // },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                // setTimeout(async () => {
                    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    // console.log(response);
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                    this.posts = response.data;
                    // for (var number = 1; number < this.totalPages+1; number++) {
                    //     const newPage = {
                    //         number: number
                    //     }
                    //     this.pages.push(newPage);
                    // }
                    this.pages = [...Array(this.totalPages + 1).keys()].slice(1)
                // }, 1000)
            } catch (error) {
                alert('Ошибка ', error);
            } finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                // this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = [...this.posts, ...response.data];
            } catch (error) {
                alert('Ошибка ', error);
            } finally {
                // this.isPostsLoading = false;
                pass;
            }
        }
    },
    mounted() {
        this.fetchPosts();
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        };
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && this.page < this.totalPages) {
                // console.log('Пересечен')
                this.loadMorePosts()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
        sortedPosts() {
            if(this.selectedSort === 'id')
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort] > post2[this.selectedSort])
            else
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
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