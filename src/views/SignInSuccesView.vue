<template>
    <div class="container-success">
        <img
            alt="success"
            src="../assets/check-mark.png"
            style="width: 270px"
        />
        <p class="p-auth">You are authenticated!</p>
        <p class="p-redirect">Redirecting to home page</p>
    </div>
    <FooterComponent />
</template>

<script>
import { defineComponent } from "vue";
import FooterComponent from "../components/FooterComponent.vue";

export default defineComponent({
    name: "SignInSuccesView",
    components: {
        FooterComponent,
    },
    setup() {},
});
</script>

<style scoped lang="scss">
.container-success {
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.p-auth {
    font-size: 30px;
    color: black;
    font-weight: 500;
}
.p-redirect {
    font-size: 20px;
    letter-spacing: 1px;
    text-align: center;
}
.p-redirect:after {
    content: ".";
    animation: dots 1s steps(5, end) infinite;
}

@keyframes dots {
    0%,
    20% {
        color: white;
        text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;
    }
    40% {
        color: black;
        text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;
    }
    60% {
        text-shadow: 0.25em 0 0 black, 0.5em 0 0 white;
    }
    80%,
    100% {
        text-shadow: 0.25em 0 0 black, 0.5em 0 0 black;
    }
}
</style>
