<template>
    <div class="button invisible" id="button">
        <font-awesome-icon icon="arrow-up" />
    </div>
    
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    onMounted(()=> {
        const button = document.getElementById('button');
        button?.addEventListener("click", (e) => {
            scrollTo({ top: 0, behavior: 'smooth' });
        })

        window.addEventListener("scroll", (e)=> {


            if (window.scrollY >= 200) {

                button?.classList.remove("invisible");
            } else {

                button?.classList.add("invisible");

            }
        });
    })



</script>

<style scoped>

    .invisible {
        display: none;
    }

    .button {
        position: fixed;
        bottom: 0;
        right: 0;
        color: #fffffe;
        font-size: 30px;

        padding: 10px 15px;

        border-radius: 10px;

        background-color: #7f5af0;

        cursor: pointer;

        margin: 3em;

        transition: ease all 0.4s;
    }

    .button:hover {
        background-color: #a58cf5;
    }

</style>