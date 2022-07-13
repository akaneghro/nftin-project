import { defineStore } from 'pinia';
import router from '../router'
import Web3 from 'web3/dist/web3.min.js'
import ERC721 from '../contracts/ERC721.json'

export const useMintStore = defineStore('mint', {
    state: () => {
        return { isMinting: false }
    },
    actions: {
        async mint() {
            try {
                if (window.ethereum) {                
                    const web3 = await new Web3(window.ethereum);
                    
                    let accounts = await web3.eth.getAccounts();
                    let currentWallet = Web3.utils.toChecksumAddress(accounts[0])
                    
                    const contract = new web3.eth.Contract(ERC721.abi, ERC721.contract)
                    let result = await contract.methods.safeMint(currentWallet).call()

                    if (result) {
                        this.isMinting = true
                        setTimeout(function(){
                            router.push('/minting')
                        }, 1000);
                    }                                
                }
            } catch (error){
                alert('Something went wrong');
                console.log(error)
            }     
        }
    }
})