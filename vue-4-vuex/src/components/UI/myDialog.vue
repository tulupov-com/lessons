<template>
    <div
        class="dialog" 
        v-if="show" 
        @click.stop="hideDialog"
    >
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
    name: 'my-dialog',
    // props: {
    //     show: {
    //         type: Boolean,
    //         default: false
    //     }
    // },
    // methods: {
    //     hideDialog() {
    //         this.$emit('update:show', false)
    //     }
    // }
    // переносим эту функциональность в mixin:
    mixins: [toggleMixin],
    mounted() {
        // console.log('Dialog mounted')
    }
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    display: flex;
}
.dialog__content {
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
}
</style>