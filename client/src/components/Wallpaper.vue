<script setup lang="ts">
import { Ref, ref } from 'vue';

const props = defineProps({
    linesNumber: { type: Number, default: 100 }
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
        display: flex;
        justify-content: center;
        background-color: $color-13;
        min-height: 100vh;
        min-width: 100vw;
        max-height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        font-family: 'Orbitron', cursive;
        color: $color-5;
        font-size: 12px;
        font-weight: 600;
        pointer-events: none;
        z-index: -10;
    }
    .main-bg-container{
        min-height: 100%;
        min-width: 100%;
        position: relative;
        display: flex;
    }
    .bg-string{
        min-width: 30px;
        font-size: 12px;
        line-height: 10px;
        overflow-inline: hidden;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
        writing-mode: vertical-lr;
    }
</style>