<template>
    <HeaderComponent />
    <div class="container">
        <p class="p-connect">Connect with one of our available wallet providers.</p>
        <div class="button-group">
            <ul class="ul-first-last">
                <li>
                    <button @click="connect">
                        <div class="button-container">
                            <div>
                                <img src="../assets/metamask-fox.svg" alt="metamask" style="width: 24px; margin-right: 20px">
                            </div>
                            <div>
                                <p>MetaMask</p>
                            </div> 
                        </div>                       
                    </button>
                </li>
                <li>
                    <button>
                        <div class="button-container">
                            <div>
                                <img src="../assets/coinbase-wallet.png" alt="coinbase" style="width: 24px; margin-right: 20px">
                            </div>
                            <div>
                                <p>Coinbase Wallet</p>
                            </div>  
                        </div>
                    </button>
                </li>
            </ul>
        </div>    
        <router-link to="/about" target="_blank">    
            <a class="link-info">
                <font-awesome-icon icon="fa-solid fa-circle-chevron-right" />
                <p style="margin:0px 0px 0px 10px">Learn more about NFTin</p>
            </a>   
        </router-link>     
    </div>   
    <FooterComponent />
    <router-view/>
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { useConnectStore } from '../store/connect';

export default defineComponent({
    name: "ConnectWalletView",
    components: {
        HeaderComponent,
        FooterComponent
    },
    setup() {
        const connectStore = useConnectStore();        

        const connect = async () => {
            connectStore.connect();            
        }

        return {connect}
    },    
});
</script>

<style scoped lang="scss">
.container{
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    padding-top: 30px;
}
.p-connect{
    font-size: 20px;
    max-width: 330px;
}
.button-group{
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    border-color: $color-border;    
}
ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.ul-first-last > :not(:last-child) {
    border-bottom: 1px solid rgb(229, 232, 235);
}
.ul-first-last > :first-child, .ul-first-last > :first-child > button:first-of-type, .ul-first-last > :first-child > a:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.ul-first-last > :last-child, .ul-first-last > :last-child > button:last-of-type, .ul-first-last > :last-child > a:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
li{
    list-style-type: none;
    width: 100%;
}
.button-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: rgb(53, 56, 64);
    text-align: left;
}
button{
    border: none;
    overflow: hidden;
    width: 100%;    
    background-color: transparent;    
    padding: 16px;
    cursor: pointer;
}
button:hover{
    box-shadow: 0px 0px 8px 3px $button-shadow;
}
.link-info{
    display: flex;
    align-items: center;
    font-size: 22px;
    color: $color-principal;
    margin-top: 15%;
    cursor: pointer;
    text-decoration:none;
}
.link-info:hover{
    color: RGB(2, 103, 255, 0.8);
}

@media screen and (max-width: 900px) {
    .container{
        max-width: 370px;
    }
}
</style>
