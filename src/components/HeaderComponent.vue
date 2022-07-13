<template>
    <div class="cabecera">
        <div class="welcome-logo">
            <p style="margin:0px 40px 0px 0px">Welcome to </p>
            <img
                alt="NFTin logo"
                src="../assets/nftin-logo.png"
                style="width: 270px"
            />
        </div>        
        <p class="phrase">The easiest and safest way to Sign In</p>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "HeaderComponent",
    setup() {},
});
</script>

<style scoped lang="scss">
.cabecera {
    padding: 30px;
    padding-top: 10%;
}
.welcome-logo{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    font-style: italic;
    font-weight: 900;
    font-size: 60px;
    color: rgba(0, 0, 0, 0.8);
}
.phrase{
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 26px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
}
</style>
