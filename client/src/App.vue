<template>
  <Wallpaper>
    <NavBar />
    <router-view />
  </Wallpaper>
</template>

<style lang="scss">
body {
  margin: 0;
  min-height: 100vh;
  @extend .container
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  flex: 1;
}
</style>