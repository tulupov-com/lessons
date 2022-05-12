<template>
    <input 
        :value="modelValue"
        @input="updateInput"
        class="input" 
        type="text"
    >
    <!-- для v-model можно добавлять модификаторы .trim - убирает пробелы, .number - сразу преобразует в число, .lazy - позволяет отслеживать события onChange вместо Input -->
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    border: 1px solid darkgreen;
    padding: 10px 15px;
    margin-top: 10px;
}
</style>