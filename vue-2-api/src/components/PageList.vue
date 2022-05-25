<template>
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
</template>

<script>
export default {
    
}
</script>

<style scoped>
div {
    display: flex;
    margin-top: 15px;
}
</style>