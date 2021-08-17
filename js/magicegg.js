$(".button-game-bg-mid span").on( "click", function() {
    if($(this).text()=="Approve"){
        const web3 = new Web3(DATASEED);
         approve(new web3.eth.Contract(petGamesTokenAbi, PETGAMES));
        location.reload();

    }else{
      //  console.log($(this).parent().parent().parent().find('input').val());
        if($(this).parent().parent().parent().find('input').val().length >0)
        {
            if(Number.isInteger(Number($(this).parent().parent().parent().find('input').val())) && Number($(this).parent().parent().parent().find('input').val()) >0)
            {
                num = triberToNumber($(this).attr("id"));
                amount = Number($(this).parent().parent().parent().find('input').val());
                if (num > 0)buyEgg(num,amount);
                else {
                    buyEggRandom(amount);
                }
            }
        }
    }

});

function triberToNumber(tribername)
{
    if(tribername=="egg-water") return 1;
    else if(tribername=="egg-fire") return 2;
    else if(tribername=="egg-wood") return 3;
    else if(tribername=="egg-metal") return 4;
    else if(tribername=="egg-earth") return 5;
    else{
       return 0;
    }

}

getApprove();


async function getApprove(){

    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];

    const web3 = new Web3(DATASEED);

    petGamesTokenContract = new web3.eth.Contract(petGamesTokenAbi, PETGAMES);

    var approveAmount = await petGamesTokenContract.methods.allowance(myAddress, BUYEGG).call();

    amount = 1000000 * 100000000000;

    //approve
    if(approveAmount < amount){
     // $(".button-game-bg-mid").html("<span class=\"btn-approve\" style=\"font-size: 20px\">Approve</span>");
         $(".button-game-bg-mid span").text("Approve");
        //approve(petGamesTokenContract, amount);
    }
    getEggPrice();
}


async function approve(petGamesTokenContract){

    encoded = petGamesTokenContract.methods.approve(BUYEGG, "1000000000000000000000000000000").encodeABI();

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

    getTransaction(web3, txHash, "APPROVE");

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

    getTransaction(web3, txHash, "BUY EGG");

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

    getTransaction(web3, txHash, "BUY EGG");
}

async function getEggPrice(){

    const web3 = new Web3(DATASEED);

    petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

    eggPrice = await petNFTContract.methods.getBoxPrice().call();

    $(".panel-item__text p").append(eggPrice);
    console.log(eggPrice);
}



