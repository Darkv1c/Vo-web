import components from './components'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
      NavBar: typeof components.NavBar,
      Wallpaper: typeof components.Wallpaper,
      Window: typeof components.Window
    }
  }