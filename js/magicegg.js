$(".container").on( "click",".button-game-bg-mid span" ,function() {
    if($(this).text()=="Approve"){
        const web3 = new Web3(DATASEED);
         approve(new web3.eth.Contract(petGamesTokenAbi, PETGAMES));
        // location.reload();

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
    loadPage();

}
// loadPage();
function loadPage(){
    getAccount();
    $("div").remove(".item-egg");
    $(".egg").append("                <div class=\"row items-container item-egg\">\n" +
        "                    <div id=\"item-1\" class=\"col-xs-5 col-sm-3 gallery-item item-1 thumbnail-50 background-config\" style=\"background-image: url(img/imageframe/imageframe-1.png); \" data-toggle=\"modal\" data-target=\"#shop-modal\">\n" +
        "\n" +
        "                        <img src=\"img/egg/1-egg.png\" class=\"image-egg-magic\" alt=\"Avatar Pet\" width=\"400\" height=\"750\" />\n" +
        "                         <div class=\"panel-item__text\">\n" +
        "                            <h4 class=\"panel-item__title\">Water Egg</h4>\n" +
        "\n" +
        "                            <p style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/></img></p>\n" +
        "                            <div class=\"div-amount\">\n" +
        "                                <form>\n" +
        "                                    <label>Amount</label>\n" +
        "                                    <input type=\"number\" class=\"amount\" value=\"1\"/>\n" +
        "                                </form>\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "\n" +
        "                        <a xmlns=\"http://www.w3.org/1999/xhtml\" class=\"button-game\">\n" +
        "                            <span class=\"button-game-bg-left-buy\"></span>\n" +
        "                            <span class=\"button-game-bg-mid\">\n" +
        "                                <span id=\"egg-water\" style=\"font-size: 20px\">Buy</span>\n" +
        "                            </span>\n" +
        "                            <span class=\"button-game-bg-right-buy\"></span>\n" +
        "                        </a>\n" +
        "                    </div>\n" +
        "                    <div id=\"item-2\" class=\"col-xs-5  col-sm-3 col-sm-offset-1  gallery-item item-2 thumbnail-50 background-config\" style=\"background-image: url(img/imageframe/imageframe-2.png);\" data-toggle=\"modal\" data-target=\"#shop-modal\">\n" +
        "\n" +
        "                        <img src=\"img/egg/2-egg.png\" class=\"image-egg-magic\" alt=\"Avatar Pet\" width=\"440\" height=\"750\"  />\n" +
        "                         <div class=\"panel-item__text\">\n" +
        "                            <h4 class=\"panel-item__title\">Fire Egg</h4>\n" +
        "                            <p style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/></img></p>\n" +
        "                              <div class=\"div-amount\">\n" +
        "                                <div>\n" +
        "                                    <label>Amount</label>\n" +
        "                                    <input type=\"number\" class=\"amount\" value=\"1\"/>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <a xmlns=\"http://www.w3.org/1999/xhtml\" class=\"button-game\">\n" +
        "                            <span class=\"button-game-bg-left-buy\"></span>\n" +
        "                            <span class=\"button-game-bg-mid\">\n" +
        "                                <span id=\"egg-fire\" style=\"font-size: 20px\">Buy</span>\n" +
        "                              </span>\n" +
        "                            <span class=\"button-game-bg-right-buy\"></span>\n" +
        "                        </a>\n" +
        "                    </div>\n" +
        "                    <div id=\"item-3\" class=\"col-xs-5 col-sm-3 col-sm-offset-1 gallery-item item-3 thumbnail-50 background-config\" style=\" background-image: url(img/imageframe/imageframe-3.png);\" data-toggle=\"modal\" data-target=\"#shop-modal\">\n" +
        "\n" +
        "                        <img src=\"img/egg/3-egg.png\" class=\"image-egg-magic\" alt=\"Avatar Pet\" width=\"440\" height=\"750\"/>\n" +
        "                        <div class=\"panel-item__text\">\n" +
        "                            <h4 class=\"panel-item__title\">Wood Egg</h4>\n" +
        "                            <p style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/></img></p>\n" +
        "                              <div class=\"div-amount\">\n" +
        "                                <div>\n" +
        "                                    <label>Amount</label>\n" +
        "                                    <input type=\"number\" class=\"amount\" value=\"1\"/>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <a xmlns=\"http://www.w3.org/1999/xhtml\" class=\"button-game\">\n" +
        "                            <span class=\"button-game-bg-left-buy\"></span>\n" +
        "                            <span class=\"button-game-bg-mid\">\n" +
        "                                <span id=\"egg-wood\" style=\"font-size: 20px\">Buy</span>\n" +
        "                              </span>\n" +
        "                            <span class=\"button-game-bg-right-buy\"></span>\n" +
        "                        </a>\n" +
        "                    </div>\n" +
        "                    <div id=\"item-4\" class=\"col-xs-5 col-sm-3  col-sm-offset-1 gallery-item  item-4  thumbnail-50 background-config\" style=\" background-image: url(img/imageframe/imageframe-4.png);\" data-toggle=\"modal\" data-target=\"#shop-modal\">\n" +
        "\n" +
        "                        <img src=\"img/egg/4-egg.png\" class=\"image-egg-magic\" alt=\"Avatar Pet\" width=\"440\" height=\"750\"/>\n" +
        "                       <div class=\"panel-item__text\">\n" +
        "                            <h4 class=\"panel-item__title\">Metal Egg</h4>\n" +
        "                            <p style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/></img></p>\n" +
        "                              <div class=\"div-amount\">\n" +
        "                                <div>\n" +
        "                                    <label>Amount</label>\n" +
        "                                    <input type=\"number\" class=\"amount\" value=\"1\"/>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <a xmlns=\"http://www.w3.org/1999/xhtml\" class=\"button-game\">\n" +
        "                            <span class=\"button-game-bg-left-buy\"></span>\n" +
        "                            <span class=\"button-game-bg-mid\">\n" +
        "                    <span id=\"egg-metal\" style=\"font-size: 20px\">Buy</span>\n" +
        "                  </span>\n" +
        "                            <span class=\"button-game-bg-right-buy\"></span>\n" +
        "                        </a>\n" +
        "                    </div>\n" +
        "                </div>\n");
    $(".egg").append("                <div class=\"row items-container item-egg\">\n" +
        "                    <div id=\"item-5\" class=\"col-xs-5 col-sm-3 gallery-item item-1 thumbnail-50 background-config\" style=\"background-image: url(img/imageframe/imageframe-5.png);\" data-toggle=\"modal\" data-target=\"#shop-modal\">\n" +
        "                        <img src=\"img/egg/5-egg.png\" class=\"image-egg-magic\" alt=\"Avatar Pet\" width=\"440\" height=\"750\" />\n" +
        "                        <div class=\"panel-item__text\">\n" +
        "                            <h4 class=\"panel-item__title\">Earth Egg</h4>\n" +
        "                            <p style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/></img></p>\n" +
        "                              <div class=\"div-amount\">\n" +
        "                                <div>\n" +
        "                                    <label>Amount</label>\n" +
        "                                    <input type=\"number\" class=\"amount\" value=\"1\"/>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <a xmlns=\"http://www.w3.org/1999/xhtml\" class=\"button-game\">\n" +
        "                            <span class=\"button-game-bg-left-buy\"></span>\n" +
        "                            <span class=\"button-game-bg-mid\">\n" +
        "                    <span id=\"egg-earth\" style=\"font-size: 20px\">Buy</span>\n" +
        "                  </span>\n" +
        "                            <span class=\"button-game-bg-right-buy\"></span>\n" +
        "                        </a>\n" +
        "                    </div>\n" +
        "                    <div id=\"item-6\" class=\"col-xs-5  col-sm-3 col-sm-offset-1 gallery-item   item-2  thumbnail-50  background-config \" style=\" background-image: url(img/imageframe/imageframe-6.png);\" data-toggle=\"modal\" data-target=\"#shop-modal\">\n" +
        "                        <img src=\"img/egg/0-egg.png\" class=\"image-egg-magic\" alt=\"Avatar Pet\" width=\"440\" height=\"750\"/>\n" +
        "                       <div class=\"panel-item__text\">\n" +
        "                            <h4 class=\"panel-item__title\">Random Egg</h4>\n" +
        "                            <p style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/></img></p>\n" +
        "                            <div class=\"div-amount\">\n" +
        "                                <div>\n" +
        "                                    <label>Amount</label>\n" +
        "                                    <input type=\"number\" class=\"amount\" value=\"1\"/>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <a xmlns=\"http://www.w3.org/1999/xhtml\" class=\"button-game\">\n" +
        "                            <span class=\"button-game-bg-left-buy\"></span>\n" +
        "                            <span class=\"button-game-bg-mid\">\n" +
        "                    <span id=\"egg-random\" style=\"font-size: 20px\">Buy</span>\n" +
        "                  </span>\n" +
        "                            <span class=\"button-game-bg-right-buy\"></span>\n" +
        "                        </a>\n" +
        "                    </div>\n" +
        "\n" +
        "                </div>\n");
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

    // getTransaction(web3, txHash, "BUY EGG");
    var receipt;
    while(1){
        receipt = await web3.eth.getTransactionReceipt(txHash);
        if (receipt != null) break;
    }

    if (receipt.status == true){
        getDialog("BUY EGG DONE !");
    }else{
        $(".shop-modal").attr("style","display:none");
        getDialog(mess+" FAIL !");
    }

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
    $("#shop-modal").modal('toggle');

    getTransaction(web3, txHash, "BUY EGG");
}

async function getEggPrice(){

    const web3 = new Web3(DATASEED);

    petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

    eggPrice = await petNFTContract.methods.getBoxPrice().call();

    $(".panel-item__text p").append(eggPrice);
    console.log(eggPrice);
}



