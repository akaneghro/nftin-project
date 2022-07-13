import { defineStore } from 'pinia';
import router from '../router'
import Web3 from 'web3/dist/web3.min.js'
import ERC721 from '../contracts/ERC721.json'

export const useCheckStore = defineStore('check', {
    state: () => {
        return { isChecking: false }
    },
    actions: {
        async checkToken() {
            try{
                if (window.ethereum) {
                    this.isChecking = true
                    const web3 = await new Web3(window.ethereum);

                    await window.ethereum.enable();
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    let currentWallet = Web3.utils.toChecksumAddress(accounts[0])
                    console.log(currentWallet)
                    const contract = new web3.eth.Contract(ERC721.abi, ERC721.contract)
                    let result = await contract.methods.balanceOf(currentWallet).call()

                    if (parseInt(result) && parseInt(result) > 0) {
                        router.push('/signInSucces')
                    } else {
                        router.push('/signInFailed')
                    }
                }
            } catch (error){
                alert('Something went wrong');
                console.log(error);
            } finally {
                this.isChecking = false
            }            
        }
    }
})