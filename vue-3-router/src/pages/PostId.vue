<template>
    <div>
        {{ this.fetchPost($route.params.id) }}
        <h1>Это пост с ID = {{ this.post.id }}, который равен параметру из URL {{ $route.params.id }}</h1>
        <p><b>Заголовок:</b> {{ this.post.title }}</p>
        <p><b>Содержимое:</b> {{ this.post.body }}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            post: {
                id: '',
                title: '',
                body: ''
            }
        }
    },
    methods: {
        async fetchPost(id) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        id: id
                    }
                });
                // console.log(response.data);
                // console.log(response.data[0]['id']);
                this.post.id = response.data[0]['id'];
                this.post.title = response.data[0]['title'];
                this.post.body = response.data[0]['body'];
            } catch (error) {
                alert('Ошибка ', error);
            }
        }
    },
    computed: {
        getpost() {
            this.fetchPost($route.params.id)
        }
    }
}
</script>

<style scoped>
    
</style>