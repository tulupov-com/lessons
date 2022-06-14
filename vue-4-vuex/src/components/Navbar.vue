<template>
    <div class="navbar">
        <div @click="$router.push('/')" style="cursor:pointer;">Vue 3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')">О нас</my-button>
            <my-button style="color:darkred;font-weight:bold;" @click="$router.push('/store')">Store</my-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar {
    height: 58px;
    background-color: gray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-self: center;
    padding: 0 15px;
}
.navbar__btns {
    margin-left: auto;
}
</style>