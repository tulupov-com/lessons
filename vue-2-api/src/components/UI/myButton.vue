<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    margin: .5rem;
    padding: 10px 15px;
    background: none;
    border: 1px solid darkgreen;
    cursor: pointer;
}
</style>