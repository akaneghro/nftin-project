import { defineStore } from 'pinia';
import router from '../router';

export const useConnectStore = defineStore('connect', {
    state: () => {
        return { isConnected: false, isPolygon: false}
    },
    actions: {
        async connect() {
            try {
                if(window.ethereum) {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                            chainId: "0x13881",
                            chainName: "Mumbai",
                            rpcUrls: ["https://rpc-mumbai.matic.today"],
                            nativeCurrency: {
                                name: "MATIC",
                                symbol: "MATIC",
                                decimals: 18,
                                },
                            blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                            },
                        ],
                    })
                    .then(() => {
                        this.isPolygon = true
                    })
                    .catch( (error) => {
                        console.log(error)
                    });

                    if (this.isPolygon){
                        await window.ethereum.request({ method: 'eth_requestAccounts' })
                        .then(() => {
                            this.isConnected = true

                            if (document.URL.includes("/1")){
                                router.push('/checkToken')
                            } else {
                                router.push('/mint')
                            }                     
                        });
                    }                    
                }else{
                    alert('You need have installed a wallet provider')
                }
            }catch (error){
                alert('Something went wrong');
                console.log(error);
            }
        }        
    }
})