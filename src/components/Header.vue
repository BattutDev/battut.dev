
<template>

    <div class="header_container" id="header">
        <div class="navbar_container">
            <div class="title">
                <span>A</span>ntoine <span>B</span>attut<span>.</span>
            </div>
            <ul class="navigation_container">
                <li class="element">
                    <a href="#portfolio">
                        <font-awesome-icon icon="palette" /> <p>Portfolio</p>
                    </a>
                </li>
                <li class="element">
                    <a href="#skills">
                        <font-awesome-icon icon="terminal" /> <p>Compétences</p>
                    </a>
                </li>
                <li class="element">
                    <a href="/cv">
                        <font-awesome-icon icon="user-graduate" /> <p>CV</p>
                    </a>
                </li>
            </ul>
            <div class="right_container">
                <div class="menu">

                    <div class="image">
                        <font-awesome-icon icon="bars" />
                    </div>
                    <div class="image">
                        <font-awesome-icon icon="xmark" />
                        <!--
                        <ul>
                            <li class="element">
                                <a href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li class="element">
                                <a href="#skills">
                                    Compétences
                                </a>
                            </li>
                            <li class="element">
                                <a href="/cv">
                                    CV
                                </a>
                            </li>
                        </ul>
                        -->
                    </div>

                </div>

                <div class="contact">
                    <a href="#contact">
                        <font-awesome-icon icon="envelope" /> <p>CONTACT</p>
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .header_container {
        width: 100vw;
        height: auto;

        background-color: #16161a;



        position: fixed;

        top: 0;

        z-index: 25;
    }




    .header_container .navbar_container {
        background-color: #111114;
        border-radius: 20px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin: 50px 56px 0 50px;

        width: 100%;
        max-width: calc(100vw - 6px - 100px);

        transition: ease 0.7s ;

    }

    .header_container.scrolled .navbar_container {
        border-radius: 0;
        max-width: 100%;
        margin: 0;
    }


    /* Title */
    .header_container .navbar_container .title {

        padding: 30px 0 30px 30px;
        font-size: 2em;
        font-weight: 600;
        color: #fffffe;
    }
    .header_container.scrolled .navbar_container .title {
        padding-left: 100px
    }
    .header_container .navbar_container .title span {
        color: #7f5af0;
    }


    /* Navigation */
    .header_container .navbar_container .navigation_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.3em;
        letter-spacing: 1px;
    }
    .header_container.scrolled .navbar_container .navigation_container {
        font-size: 1.5em;
    }

    .header_container .navbar_container .navigation_container .element {
        margin: 0 17px;
        transition: ease all 2s;
    }
    .header_container.scrolled .navbar_container .navigation_container .element {
        margin: 0 3em;
    }

    .header_container .navbar_container .navigation_container .element a {
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .header_container .navbar_container .navigation_container .element a p {
        margin-left: 7px;

    }

    .header_container.scrolled .navbar_container .navigation_container .element a p {
        display: none;
    }

    /* Right Part */
    .header_container .navbar_container .right_container {
        font-size: 1.5em;
    }

    /* Responsive Buttons */
    .header_container .navbar_container .right_container .menu {
        color: #fffffe;
        visibility: hidden;
        z-index: 30;
        padding-right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header_container .navbar_container .right_container .menu .image {
        position: absolute;
        font-size: 2.3em;
    }

    /* Contact Button */
    .header_container .navbar_container .right_container .contact {
        padding-right: 30px;
        z-index: 31;
    }
    .header_container.scrolled .navbar_container .right_container .contact {
        padding-right: 100px;
    }

    .header_container .navbar_container .right_container .contact a {
        background-color: #7f5af0;

        border-radius: 10px;

        padding: 7px 10px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header_container .navbar_container .right_container .contact a p {
        font-weight: 600;
        margin-left: 7px;
    }

    .header_container.scrolled .navbar_container .right_container .contact a p {
        display: none;
    }







    @media screen and (max-width: 1300px) {

        .header_container .navbar_container .title {
            font-size: 1.9em;
        }

        .header_container .navbar_container .navigation_container {
            font-size: 1.2em;
        }
        .header_container .navbar_container .right_container {
            font-size: 1.4em;
        }


    }

    @media screen and (max-width: 1100px) {

        .header_container .navbar_container .title {
            font-size: 1.7em;
        }

        .header_container .navbar_container .navigation_container {
            font-size: 1em;
        }
        .header_container .navbar_container .right_container {
            font-size: 1.2em;
        }

    }

    @media screen and (max-width: 1000px) {

        .header_container .navbar_container .title {
            font-size: 2em;
        }

        .header_container .navbar_container .navigation_container .element {
            display: none;
        }




        .header_container .navbar_container .right_container .contact {
            display: none;
        }
        .header_container .navbar_container .right_container .menu {

            visibility: visible;
            margin-right: 20px;
        }
        .container .right .menu:hover {
            font-size: 45px;
        }


    }


</style>

<script setup lang="ts">
    import { onMounted } from 'vue';
    onMounted(()=> {
        const container = document.getElementById("header");
        window.addEventListener("scroll", (e)=> {
            if (window.scrollY >= 50) {
                container?.classList.add("scrolled");
            } else {
                container?.classList.remove("scrolled");
            }
        });
    });
</script>