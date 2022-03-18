<template>
    <div class="main_container">
        <div class="text">
            <p>Etant passionné par l'informatique depuis mon plus jeune âge, j'ai décidé de travailler dans ce domaine, plus particulierement dans le Développpement Informatique de Logiciels et d'applications Web.
                <br>
                <br>
                Actuellement en premiere année de <a href="https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers">BTS SIO (<strong class="underline">S</strong>ervice <strong class="underline">I</strong>nformatique aux <strong class="underline">O</strong>rganisation)</a> avec pour projet de devenir Développeur Web FullStack.
                <br>
                <br>
                Je pratique le Développement Web depuis maintenant bientôt 3 ans, je maîtrise pleins de technologies et d'outils de développement
            </p>
        </div>
        <div class="image">
            <img src="../assets/gradient.svg" alt="gradient" height="100%">
            <img src="../assets/antoine.png" alt="Antoine" height="100%">
        </div>
    </div>
    <div class="scrollAnimation"><div class="bar"></div><p>Scroll</p></div>
</template>

<script setup lang="ts">

</script>

<style scoped>

    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-20px);
        }
        100% {
            transform: translatey(0px);
        }
    }

    .main_container {
        z-index: 1;


        margin: 25vh 50px 0 50px;



        display: flex;
        justify-content: space-between;
        align-items: center;



    }

    .main_container .text {
        margin-left: 2em;
        width: 60vw;
        font-size: 27px;
        color: #fffffe;
    }

    .main_container .text a{
        color: #7f5af0;
    }

    .main_container .text a:visited{
        color: #a58cf5;
    }

    .main_container .image {
        margin: 0 100px;
        width: 421px;
        height: 421px;
        position: relative;
        animation: float 6s ease-in-out infinite;


    }
    .main_container .image img {
        position: absolute;
    }

    @media screen and (max-width: 1300px) {

        .main_container {
            justify-content: center;
        }

        .main_container .image {
            display: none;
        }
        .main_container .text {

            font-size: 20px;
        }

    }

</style>