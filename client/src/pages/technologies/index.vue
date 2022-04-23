<script setup lang="ts">
import vueImg from '../../assets/images/vue.png'
import piniaImg from '../../assets/images/pinia.svg'
import vuexImg from '../../assets/images/vuex.png'
import nuxtImg from '../../assets/images/nuxt.png'
import viteImg from '../../assets/images/vite.svg'
import reactImg from '../../assets/images/react.png'
import reduxImg from '../../assets/images/redux.png'
import nextImg from '../../assets/images/next.png'
import htmlImg from '../../assets/images/html.png'
import cssImg from '../../assets/images/css.png'
import sassImg from '../../assets/images/sass.png'
import lessImg from '../../assets/images/less.png'
import javascriptImg from '../../assets/images/javascript.png'
import typescriptImg from '../../assets/images/typescript.png'
import nodeImg from '../../assets/images/node.png'
import expressImg from '../../assets/images/express.png'
import postgreImg from '../../assets/images/postgresql.png'
const techList = [
    {
        label: 'Vue',
        img: vueImg
    },
    {
        label: 'Pinia',
        img: piniaImg
    },
    {
        label: 'Vite',
        img: viteImg
    },
    {
        label: 'Vuex',
        img: vuexImg
    },
    {
        label: 'Nuxt',
        img: nuxtImg
    },
    {
        label: 'React',
        img: reactImg
    },
    {
        label: 'Redux',
        img: reduxImg
    },
    {
        label: 'Next',
        img: nextImg
    },
    {
        label: 'Typescript',
        img: typescriptImg
    },
    {
        label: 'Javascript',
        img: javascriptImg
    },
    {
        label: 'HTML 5',
        img: htmlImg
    },
    {
        label: 'CSS 3',
        img: cssImg
    },
    {
        label: 'Sass',
        img: sassImg
    },
    {
        label: 'Less',
        img: lessImg
    },
    {
        label: 'Node',
        img: nodeImg
    },
    {
        label: 'Express',
        img: expressImg
    },
    {
        label: 'PostgreSql',
        img: postgreImg
    },
]
</script>

<template>
    <Window>
        <div style="min-width: 100%">
            <h1>Estas son las tecnologias que manejo</h1>
            <div class="techs-container">
                <span class="tech-container" v-for="tech in techList" :key="tech.label">
                    <span class="img" :style="{'background-image': 'url(' +tech.img+')'}" />
                    <span>{{tech.label}}</span>
                </span>
            </div>
        </div>
    </Window>
</template>

<style lang="scss" scoped>
    h1{
        text-align: center;
    }
    .techs-container{
        display: grid;
        min-width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
        gap: 24px 32px;
        box-sizing: border-box;
        padding: 24px 40px;
        min-width: 100%;
    }
    .tech-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
            max-width: 7rem;
            min-width: 7rem;
            aspect-ratio: 1;
            margin-bottom: 16px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
</style>