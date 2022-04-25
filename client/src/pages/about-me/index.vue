<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../../components/Button.vue';

const router = useRouter()
const fullPhrase = 'Llevemos tus proyectos más allá de los limites de la imaginación.'
let currentLetter = ref(0)
let addLetterInterval:any

const phrase = computed(() => { 
    return fullPhrase.slice(0, currentLetter.value)
 })

function addLetter(){
    if (currentLetter.value < fullPhrase.length){
        currentLetter.value++
    } else {
        clearInterval(addLetterInterval)
    }
}
function goToContact(){
    router.push('/contact-me')
}

setTimeout(() => {addLetterInterval = setInterval(addLetter, 50)}, 2000)

</script>

<template>
    <Window>
        <div class="about-me-container">
            <div class="about-me-info">
                <h1>Víctor Orellano</h1>
                <h4>Desarrollador web</h4>
                <p>{{phrase}}<span class="about-me-dash">_</span></p>
                <Button style="margin: auto" @click="goToContact">Contáctame</Button>
            </div>
            <div class="about-me-image" />
        </div>
    </Window>
</template>

<style lang="scss" scoped>
.about-me-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    min-height: 100%;
    min-width: 100%;
}

.about-me-image {
    background-image: url('../../assets/images/about-me.jpg');
    background-position: center;
    background-size: cover;
}

.about-me-info {
    box-sizing: border-box;
    padding: 24px;
    padding-right: 48px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    h4{
       margin-block: 0;
    }
    p,
    h1, h4 {
        text-align: center;
    }
    h4{
        color: $color-16;
    }
    .about-me-dash{
        animation: fade;
        animation-iteration-count: infinite;
        animation-direction: alternate-reverse;
        animation-duration: 0.5s;
    }
}
@keyframes fade { 
    from{
        opacity: 1;
    } 
    to{
        opacity: 0
    }
}
</style>