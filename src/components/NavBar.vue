<script setup lang="ts">

    import { onMounted } from 'vue';
    onMounted(()=> {
        const container = document.getElementById("nav");
        window.addEventListener("scroll", (e)=> {


            if (window.scrollY >= 50) {

                container?.classList.add("scrolled");
            } else {

                container?.classList.remove("scrolled");

            }
        });
    });









</script>
<template>
    <div class="nav_container">
        <div class="container" id="nav">
            <div class="header">
                <h1>
                    <span>A</span>ntoine <span>B</span>attut<span>.</span>
                </h1>
            </div>
            <ul class="elements" id="links">
                <li class="element">

                    <a href="#"><font-awesome-icon icon="house" /> <p>Acceuil</p></a>
                </li>
                <li class="element">
                    <a href="#"><font-awesome-icon icon="palette" /> <p>Portfolio</p></a>
                </li>
                <li class="element">
                    <a href="#"><font-awesome-icon icon="terminal" /> <p>Compétences</p></a>
                </li>
                <li class="element">
                    <a href="#"><font-awesome-icon icon="user-graduate" /> <p>CV</p></a>
                </li>
            </ul>
            <div class="right">
                <div class="menu">
                    <div class="image">
                        <font-awesome-icon icon="bars" />
                    </div>
                    <div class="image">
                        <font-awesome-icon icon="xmark" class="hidden" />
                    </div>


                </div>
                <div class="contact ">
                    <a href=""><font-awesome-icon icon="envelope" /> <p>CONTACT</p></a>

                </div>


            </div>
        </div>
    </div>

</template>



<style scoped>

    .nav_container {
        background-color: #16161a;
        z-index: 20;
        height: auto;
        position: fixed;
        top: 0;
    }

    .hidden {
        display: none;

    }

    .nav_container a {
        color: #fffffe;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav_container a p {
        margin-left: 5px;
    }

    .nav_container a:visited {
        color: #fffffe;

    }

    .container {
        z-index:21;
        width: calc(100vw - 100px);
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: 30px;
        background-color: #111114;

        border-radius: 20px;

        padding: 20px 10px;

        transition: ease all 0.4s;
    }

    .container.scrolled {
        width: 100vw;
        margin: 0;
        padding: 20px 0;
        border-radius: 0;

    }

    .container.scrolled .header {
        margin-left: 50px;
    }

    .container.scrolled .elements .element {
        margin: 0 50px;
    }

    .container.scrolled .elements .element a p {
        display: none;
    }


    .container.scrolled .right .contact a p {
        display: none;
    }

    .container.scrolled .right .contact {
        margin-right: 50px;
        background-color: #7f5af0;

        padding: 10px;
        border-radius: 10px;
    }
    .container.scrolled .right .contact a {
        color: #fffffe;
    }

    .container .header span {
        color: #7f5af0;
    }
    .container .header {
        color: #fffffe;
        margin-left: 20px;
    }

    .container .elements {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container .elements .element {
        margin: 0 20px;
        font-size: 24px;
        transition: ease all 0.4s;
    }

    .container .elements .element:hover {
        font-size: 26px;
    }

    .container .right {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-right: 20px;

        position: relative;


    }

    .container .right .menu {
        visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        color: #fffffe;
        font-size: 40px;
        cursor: pointer;
    }
    .container .right .menu .image {
        position: absolute;
    }

    .container .right .contact {

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        font-family: 'Montserrat', sans-serif;
        font-size: 2em;
    }


    .container .right .contact a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #7f5af0;
    }

    @media screen and (max-width: 1300px) {
        .container .elements .element {
            font-size: 21px;
        }

        .container .right .contact {
            height: 38px;
            font-size: 17px;
        }

    }

    @media screen and (max-width: 1100px) {
        .container .header {
            font-size: 14px;
        }
        .container .elements .element {
            font-size: 19px;
        }
        .container .right .contact {
            height: 36px;
            font-size: 15px;
        }

    }

    @media screen and (max-width: 1000px) {
        .elements .element {
            display: none;
        }




        .container .right .contact {
            display: none;
        }
        .container .right .menu {
            visibility: visible;
            margin-right: 20px;
            transition: ease 0.2s;
        }
        .container .right .menu:hover {
            font-size: 45px;
        }


    }


</style>