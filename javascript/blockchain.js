async function Connect(){

    await window.ethereum.enable();
    if(!web3){
        web3 = new Web3(window.ethereum);
    }

    if(window.ethereum.chainId=='0x61'){ //BSC 38 //TESTNET 61
        document.getElementById("bnb").innerHTML = ethereum.selectedAddress.substring(0, 5);
    }else if(window.ethereum.chainId=='0x5'){
        document.getElementById("eth").innerHTML = ethereum.selectedAddress.substring(0, 5);
    }else{
        alert("Only support for BSC Testnet & ETH Goerli");
    }
}