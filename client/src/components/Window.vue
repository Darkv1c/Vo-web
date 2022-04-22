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
    </div>
</template>

<style scoped lang="scss">
.window {
    display: flex;
    position: relative;
    flex: 1;
    margin: 1% 2%;
    background-color: rgba($color: $color-9, $alpha: .8);
    border: 5px solid $color-5;
    backdrop-filter: blur(4px);
}

.action-buttons {
    display: flex;
    position: absolute;
    right: 0;
    padding: 10px 40px;
    border-bottom: 5px solid $color-5;
    border-left: 5px solid $color-5;
    border-bottom-left-radius: 8px;
}

.material-symbols-outlined{
    color: white;
}
</style>