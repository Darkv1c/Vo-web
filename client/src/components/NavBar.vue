<script setup lang="ts">
import { PropType } from 'vue';
import { navBarOptions } from './types'

const props = defineProps({
    options: { type: Object as PropType<navBarOptions>, default: ( ) => { } }
})


</script>

<template>
    <div id="nav-bar">
        <span v-for="(option, n) in options" v-key="'option-' + n">
            {{options.label}}
        </span>
    </div>
</template>

<style lang="scss" scoped>
    #nav-bar{
        display: flex;
        align-items: center;
        min-height: 3rem;
        background-color: rgba($color: $color-5, $alpha: .8);
    }
</style>