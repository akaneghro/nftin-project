<template>
    <div class="container-failed">
        <p class="ups">Ups...</p>
        <p class="p-not-auth">You are not authenticating</p>
        <p class="p-not-own">This account doesn't own a valid NFT</p>
        <button class="button-back" @click="goHome">Go Back</button>
    </div>
    <FooterComponent />
</template>

<script>
import { defineComponent } from "vue";
import FooterComponent from "../components/FooterComponent.vue";

export default defineComponent({
    name: "SignInFailedView",
    components: {
        FooterComponent 
    },
    setup() {
        const goHome = () => {
            window.location.href = "http://localhost:8081/"
        }

        return{goHome}
    },
});
</script>

<style scoped lang="scss">
.container-failed{
    padding-top: 10%;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.ups{
    margin: 0;
    margin-bottom: 5%;
    font-size: 100px;
    font-weight: 600;
    letter-spacing: 4px;
    font-style: italic;
}
.p-not-auth{
    margin: 0;
    font-size: 26px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
}
.p-not-own{
    font-size: 20px;
}
.button-back{
    background-color: $color-principal;
    color: white;
    border-radius: 50px;
    font-size: 20px;
    margin-top: 30px;
    padding: 15px;
    border-color: transparent;
    width: 200px;
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
}
.button-back:hover{
    background-color: $color-hover-button;
}
</style>
