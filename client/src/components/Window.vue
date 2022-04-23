<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
function closeWindow(){
    router.push('/')
}
</script>

<template>
    <div class="window">
        <span class="action-buttons" @click="closeWindow">
            <span class="material-symbols-outlined">
                Close
            </span>
        </span>
        <slot/>
    </div>
</template>

<style scoped lang="scss">
.window {
    display: flex;
    position: relative;
    flex: 1;
    margin: 1% 2%;
    background-color: rgba($color: $color-7, $alpha: .7);
    border-radius: 8px;
    backdrop-filter: blur(8px);
}

.action-buttons {
    display: flex;
    position: absolute;
    right: 0;
    padding: 10px 40px;
    border-bottom-left-radius: 8px;
    cursor: pointer;
    background-color: $color-16;
    opacity: .6;
    transition: all 0.3s ease;
    &:hover{
        opacity: 1;
    }
}

.material-symbols-outlined{
    color: white;
}

.window-subcontainer{
    margin: 24px;
    display: flex;
    flex: 1;
}
</style>