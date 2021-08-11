$(document).ready(function () {
    console.log("sdfsfsdf");

    $(".gallery-item").on("click", function () {
        console.log("sdfsfsdf");
    });
});



getApprove();


async function getApprove(){

    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];

    const web3 = new Web3(DATASEED);

    petGamesTokenContract = new web3.eth.Contract(petGamesTokenAbi, PETGAMES);

    var approveAmount = await petGamesTokenContract.methods.allowance(myAddress, BUYEGG).call();

    amount = 1000000 * 1000000000000000000;

    //approve
    if(approveAmount < amount){
        //approve(petGamesTokenContract, amount);
    }
    
    //buyEgg(1,3);
    //buyEggRandom(3);

    getEggPrice();
}


async function approve(petGamesTokenContract, amount){

    encoded = petGamesTokenContract.methods.approve(BUYEGG, "1000000000000000000000000").encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: PETGAMES, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x00', // Only required to send ether to the recipient from the initiating external account.
      data: encoded
    };


    const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });

    console.log(txHash);

}

async function buyEgg(tribe, amount){

    const web3 = new Web3(DATASEED);

    buyEggContract = new web3.eth.Contract(buyEggAbi, BUYEGG);

    encoded = buyEggContract.methods.buyBox(tribe,amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: BUYEGG, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x00', // Only required to send ether to the recipient from the initiating external account.
      data: encoded
    };

     const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });

    console.log(txHash);

}



async function buyEggRandom(amount) {

    const web3 = new Web3(DATASEED);

    buyEggContract = new web3.eth.Contract(buyEggAbi, BUYEGG);

    encoded = buyEggContract.methods.buyBoxRandom(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: BUYEGG, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x00', // Only required to send ether to the recipient from the initiating external account.
      data: encoded
    };

     const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });

    console.log(txHash);


}


async function buyEgg(tribe, amount){

    const web3 = new Web3(DATASEED);

    buyEggContract = new web3.eth.Contract(buyEggAbi, BUYEGG);

    encoded = buyEggContract.methods.buyBox(tribe,amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: BUYEGG, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x00', // Only required to send ether to the recipient from the initiating external account.
      data: encoded
    };

     const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });

    console.log(txHash);

}

async function getEggPrice(){

    const web3 = new Web3(DATASEED);

    petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

    eggPrice = await petNFTContract.methods.getBoxPrice().call();

    console.log(eggPrice);
}