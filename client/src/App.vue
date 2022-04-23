<script setup lang="ts">
const options: {label: string, action: string}[] = [
  {label: 'Sobre mi', action: '/about-me'},
  {label: 'Proyectos', action: '/welcome'}
]
</script>

<template>
  <Wallpaper>
    <NavBar :options="options"/>
    <Transition name="zoom">
      <router-view />
    </Transition>
  </Wallpaper>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=My+Soul&family=Source+Code+Pro:ital,wght@1,200&family=Water+Brush&family=Whisper&display=swap');
body {
  margin: 0;
  min-height: 100vh;
  color: $color-13;
  font-size: 24px;
  font-family: 'Source Code Pro', monospace;
  @extend .container
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

$animetion-time: 0.5s;
$animation-delay: 0.1s;
.zoom-enter-active{
  animation: zoom $animetion-time reverse;
  animation-delay: $animation-delay;
}

.zoom-leave-active {
  animation: zoom $animetion-time;
  animation-delay: $animation-delay;
}

@keyframes zoom {
  0% {
    transform: scale(100%);
  }
  25%{
    transform: scale(120%);
  }
  100%{
    transform: scale(0%);
  }
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(0%);
}
</style>