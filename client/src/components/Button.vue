<script setup lang="ts">

</script>

<template>
    <div class="button">
        <slot/>
    </div>
</template>

<style lang="scss" scoped>
    .button{
        background-color: $color-11;
        padding: 24px;
        display: flex;
        max-width: fit-content;
        color: $color-7;
        cursor: pointer;
        &:hover{
            animation: shine;
            animation-duration: .1s;
            animation-iteration-count: 2;
            animation-direction: alternate-reverse;
            animation-fill-mode: forwards;
        }
    }
    @keyframes shine {
    $i: 0;
    $step: .01;

    @while ($i * 100) <= 100 {
        #{$i*100 + "%"} {
            background: linear-gradient(to bottom right, rgba($color-5, 1 - $i), rgba($color-15, $i), rgba($color-5, 1 - $i))
        }
        $i: $i + $step
    }
}
</style>