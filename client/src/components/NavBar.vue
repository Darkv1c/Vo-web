<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { PropType, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { navBarOptions } from './types'

const router = useRouter()
const route = useRoute()

const props = defineProps({
    options: { type: Object as PropType<navBarOptions>, default: () => [] }
})
const optionSelected = computed(() => { 
    return route.path
 })

function doAction(option: typeof props.options[0]) {
    if (typeof option.action === 'string') router.push(option.action)
    else option.action()
}
function getOptionClasses(option: typeof props.options[0]) {
    return 'nav-bar-options' + (option.action === optionSelected.value ? ' nav-bar-option-selected' : '')
}
</script>

<template>
    <div id="nav-bar">
        <span :class="getOptionClasses(option)" v-for="option in options" :key="option.label"
            @click="() => doAction(option)">
            {{ option.label }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
#nav-bar {
    display: flex;
    align-items: center;
    min-height: 3rem;
    background-color: rgba($color: $color-5, $alpha: .8);
    color: black;
    font-weight: 600;
}

.nav-bar-options {
    padding: 0 16px;
    font-size: 1.5rem;
    transition: all ease-in-out 0.1s;

    &:hover {
        cursor: pointer;
        font-size: 1.8rem;
    }
}

.nav-bar-option-selected {
    position: relative;

    &::after {
        content: '';
        display: block;
        padding: .2rem;
        background: $color-8;
        position: absolute;
        top: 50%;
        width: 80%;
        right: .7rem;
        animation: stella;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: alternate; 
    }
}

@keyframes stella {
    $i: 0;
    $step: .01;

    @while ($i * 100) <= 100 {
        #{$i*100 + "%"} {
            background: linear-gradient(to right, rgba($color-2, 1 - $i), rgba($color-1, $i), rgba($color-8, 1 - $i))
        }
        $i: $i + $step
    }
}
</style>