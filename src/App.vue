<script lang="ts">
  import NavBar from "./components/NavBar.vue";
  import BackToTop from './components/BackToTop.vue';
  import MainPage from './components/MainPage.vue';

  export default {
    components: {
      NavBar,
      BackToTop,
      MainPage
    }
  }

</script>

<template>
  <NavBar/>
  <BackToTop/>
  <MainPage/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }



  * {
    font-family: 'Fredoka', sans-serif;
    scrollbar-width: thin;
    scrollbar-color: #7f5af0 #16161a;
  }

  /* Marche sur Chrome, Edge, et Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: #111029;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #7f5af0;

  }

  #app {
    height: 150vh;
  }


  body {
    background-color: #16161a;

    margin: 0;

  }

  .scrollAnimation{
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    letter-spacing: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 15px;
  }
  .scrollAnimation .bar{
    height: 30px;
    width: 2px;
    background: #ffffff;
    margin-bottom: 10px;
    animation: trans 5s ease infinite;
  }

  @keyframes trans {
    0%{
      transform: translateY(-10px);
      opacity: 1;
    }
    100%{
      transform: translateY(20px);
      opacity: 0;
    }
  }
</style>
