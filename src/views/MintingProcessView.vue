<template>
    <div class="container-minting">
        <img alt="success" src="../assets/hourglass.png" style="width: 150px"/>
        <p class="p-minting">Minting Process Started</p>
        <p class="p-executed">This transaction is being executed on the Polygon network. When the transaction is complete, your NFT will show on your wallet.</p>
        <a class="button-go" href="">Track Progress</a>        
        <a class="button-go">Back Home</a>        
    </div>
    <FooterComponent/>
</template>

<script>
import { defineComponent } from "vue";
import FooterComponent from "../components/FooterComponent.vue";

export default defineComponent({
    name: "MintingProcessView",
    components: {
        FooterComponent,
    },
    setup() {},
});
</script>

<style scoped lang="scss">
.container-minting{
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.p-minting{
    font-size: 30px;
    color: black;
    font-weight: 500;
}
.p-executed{
    margin: 0;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.7);
    max-width: 630px;
    margin-bottom: 40px;
}
.button-go{
    background-color: $color-principal;
    color: white;
    border-radius: 50px;
    font-size: 20px;
    margin-top: 20px;
    padding: 15px;
    border-color: transparent;
    width: 200px;
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
}
.button-go:hover{
    background-color: $color-hover-button;
}
</style>
