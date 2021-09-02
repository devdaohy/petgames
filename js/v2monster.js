document.write('<script type="text/javascript" src="js/loadpet.js" ></script>');
getTimeClaimAndReward();


async function claim(){

    const web3 = new Web3(DATASEED);

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTERV2);

    encoded = monsterContract.methods.claimReward().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: MONSTERV2, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x00', // Only required to send ether to the recipient from the initiating external account.
      data: encoded
    };

    const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });
    var receipt;
    while(1){
        receipt = await web3.eth.getTransactionReceipt(txHash);
        if (receipt != null) break;
    }

    if (receipt.status == true){
        getAccount();

    }else{
        $(".shop-modal").attr("style","display:none");
        getDialog("CLAIM "+" FAIL !");
    }

}

async function getTimeClaimAndReward(){

    // testnet
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];
    const web3 = new Web3(DATASEED);

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTERV2);

    var timeClaim = await monsterContract.methods.getTimeClaim(myAddress).call();
    var rewardClaim = await monsterContract.methods.getRewardClaim(myAddress).call();
    // var feePercent = await monsterContract.methods.getFeePercent(myAddress).call();
    // var feeClaim = await monsterContract.methods.getFeeClaim(myAddress).call();

    if( Number(Math.floor($.now()/1000)) < Number(timeClaim)){
        totalSeconds =  Math.floor(timeClaim-($.now()/1000 ));
        hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        minutes = Math.floor(totalSeconds / 60);
        seconds = totalSeconds % 60;
        $(".time_claim").text(hours +" : "+ minutes+" : "+ seconds );
        $(".money_claim").text(rewardClaim);
        // $(".fee").text(feeClaim +"%");


    }else{
        // $(".fee").text(feeClaim +"%");
        $(".time_claim").text("0 : 0 : 0");
        $(".money_claim").text(rewardClaim);

    }
}

$('.btn-claim').on('click',function () {
    claim();


});


setInterval(getTimeClaimAndReward, 1000);


