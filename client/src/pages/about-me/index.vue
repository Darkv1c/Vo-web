<script setup lang="ts">

</script>

<template>
    <Window>
        <div class="about-me-container">
            <div class="about-me-info">
                <H1>Esto es un titulo</H1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quisquam pariatur saepe nemo cumque
                    dolore minus perferendis iste voluptatem, temporibus laboriosam omnis velit corrupti eligendi sunt
                    quae dolor dolores nesciunt.</p>
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
    justify-content: center;

    p,
    h1 {
        text-align: center;
    }

    ;
}
</style>