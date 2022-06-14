<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
button {
    margin: .5rem;
    padding: 10px 15px;
    background: none;
    border: 1px solid teal;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.33s;
}
button:hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
    transition: all 0.33s;
}
</style>