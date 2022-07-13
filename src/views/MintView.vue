<template>
    <div class="container-mint">        
        <img class="img-nftin" alt="success" src="../assets/nftin-logo.png" style="width: 300px"/>
        <p class="p-create">Create your personal NFT for a simple and secure LogIn</p>
        <div class="loading" v-if="mintStore.isMinting"></div>
        <button class="button-mint" @click="mint" v-if="!mintStore.isMinting">Mint</button>        
    </div>    
    <FooterComponent />
</template>

<script>
import { defineComponent } from "vue";
import FooterComponent from "../components/FooterComponent.vue";
import router from '../router'
import { useConnectStore } from '../store/connect';
import { useMintStore } from '../store/mint';

export default defineComponent({
    name: "MintView",
    components: {
        FooterComponent 
    },
    setup() {
        const connectStore = useConnectStore();
        const mintStore = useMintStore();

        const mint = async() => {
            if (connectStore.isConnected){
                mintStore.mint();
            } else {
                alert('Your wallet is not connected')
                router.push('/2')
            }
            
        }

        return {mintStore, mint}
    },
});
</script>

<style scoped lang="scss">
.container-mint{
    padding-top: 10%;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.p-create{
    margin: 0;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.65);
    max-width: 365px;
    margin-top: 60px;
    letter-spacing: 1px;
}
.button-mint{
    background-color: $color-principal;
    color: white;
    border-radius: 50px;
    font-size: 20px;
    margin-top: 60px;
    padding: 15px;
    border-color: transparent;
    width: 200px;
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
}
.button-mint:hover{
    background-color: $color-hover-button;
}
.loading{
    width: 50px;
    height: 50px;
}
</style>
