<script setup lang="ts">
import { Ref, ref } from 'vue';

const props = defineProps({
    linesNumber: { type: Number, default: 50 }
})

const text:Ref<String[]> = ref([])

function fillText() {
    text.value = text.value.map(line => { 
        const charNumber = Math.random() * 94 + 32;
        let response = line.length > 200 ? line.slice(0, -5) : line
        response = String.fromCharCode(charNumber) + response
        return response
     })
}

for (let index = 0; index < props.linesNumber; index++) {
    text.value[index] = ''
}

let filltextPromise = setInterval(fillText, 20)
</script>

<template>
    <div class="main-bg-container container">
        <div class="main-bg">
            <div class="bg-string" v-for="(string, index) in text" :key="index">{{string}}</div>
        </div>
        <slot/>
    </div>
</template>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
    .main-bg{
        position: fixed;
        background-color: $color-13;
        min-height: 100vw;
        min-width: 100%;
        max-height: 100vw;
        max-width: 100%;
        overflow: hidden;
        font-family: 'Orbitron', cursive;
        color: $color-5;
        font-size: 12px;
        font-weight: 600;
        transform: rotateZ(90deg);
        pointer-events: none;
        z-index: -10;
    }
    .main-bg-container{
        min-height: 100%;
        min-width: 100%;
        position: relative;
    }
    .bg-string{
        line-height: 40px;
        overflow-inline: hidden;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
    }
</style>