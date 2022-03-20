<script lang="ts">
  import Header from "./components/Header.vue";
  import BackToTop from './components/BackToTop.vue';
  import Presentation from './components/Presentation.vue';

  export default {
    components: {
      Header,
      BackToTop,
      Presentation
    }
  }

</script>

<template>
  <Header/>
  <BackToTop/>
  <Presentation/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

  /* Disable h* padding & margin */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  /* Disable href base style */
  a, a:visited {
    text-decoration: none;
    color: #fffffe;
  }
  /* Disable font-awesome icons padding & margin */
  a * {
    padding: 0;
    margin: 0;
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
