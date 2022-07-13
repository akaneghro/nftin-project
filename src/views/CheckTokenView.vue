<template>
    <div class="container-check">
        <div class="loading">
        </div>
        <p class="text-wait">NFTin is authenticating your account...</p>
    </div>
    <FooterComponent />
</template>

<script>
import { defineComponent } from "vue";
import FooterComponent from "../components/FooterComponent.vue";
import router from '../router'
import { useCheckStore } from '../store/check';
import { useConnectStore } from '../store/connect';

export default defineComponent({
    name: "CheckWalletView",
    components: {
        FooterComponent 
    },
    setup() {        
        const checkStore = useCheckStore();
        const connectStore = useConnectStore();

        const checkToken = async () => {   
            if (connectStore.isConnected){
                setTimeout(function(){           
                    checkStore.checkToken();
                }, 2000);
            } else {
                alert('Your wallet is not connected')
                router.push('/1')
            }
        };
        
        checkToken()
    },
});
</script>

<style scoped lang="scss">
.container-check{
    padding-top: 10%;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
