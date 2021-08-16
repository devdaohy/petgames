document.write('<script type="text/javascript" src="js/loadpet.js" ></script>');

$(".store .container").on("click",".gallery-item", function () {
	var label = $("#myModalLabel");
	var img = $("#showcase-img");
	var price = $("#modal-price-tag");
	var body = $("#modalBody");
	var dataModel = $(this).find("img");
	var modelfeats = $("#model-feats").find("li");
	label.text($(this).find("#item-name-caption").text());
	img.attr("src", dataModel.attr("src"));
	$(".detail-info-pet").html($(this).find(".panel-item__text").html());
	$(".btn-nft-id").text($(this).find("button").text().replace('#',''));
});

$(".store .container").on("click",".btn-cancel", function () {
	var nft_id=$(this).parent().parent().parent().find("button").text().replace('#','');
	 cancelOrder(nft_id);
});
$(".button-game-bg-mid").on("click", function () {
	buyOrder($(this).parent().parent().find("button").text());

});



var lstPetSale = new Array();
var lstPetSaleFilter = new Array();
var amount = 1000000 * 1000000000000000000;
var approveAmount ="";
var petGamesTokenContract="";
getApprove();
loadMarket();

async function loadMarket(){
	// testnet
 await getApprove();
	const web3 = new Web3(DATASEED);

	petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

	marketSize = await petNFTContract.methods.balanceOf(PETNFT).call();
	$("#amount-pet-sale").text(marketSize+" Pets For Sales");
	myBalance = await petNFTContract.methods.balanceOf(myAddress).call();

	for(let from=0;from<marketSize;){

		to = Math.min(from+4, marketSize);
		readMarket(from, to, PETNFT);
		from = to;
	}

}

async function readMarket(from, to, sender){
	var content="";
	for(let i = from; i < to; i++){
		var nftId = await petNFTContract.methods.tokenOfOwnerByIndex(sender, Number(i)).call();

		var petNFTInfo = await petNFTContract.methods.getPetNFTInfo(nftId).call();

		lstPetSale.push(petNFTInfo);
	}

	if(lstPetSale.length == marketSize){

		console.log(lstPetSale);
		lstPetSale.sort(sortFunction);
		forLstPetSale()
		if(approveAmount < amount){
			$(".btn-buy").text("Approve");

			$(".btn-buy").on("click",function () {
				approve(petGamesTokenContract);
			});
		}
	}
}

function forLstPetSale()
{
	var content="";
	console.log(scarce);
	if(scarce >0)
	{
		lstPetSaleFilter =lstPetSale.filter(function (a) {
			return a['scarce'] === scarce;
		});
	}else{
		lstPetSaleFilter=lstPetSale;
	}

	console.log(lstPetSaleFilter);
	if(page == null )page=1;
	var count =0;
	for(let i=((page - 1) * limitPage); i<Math.min(page*limitPage,lstPetSaleFilter.length);i++)
	{

		var petNFTInfo=lstPetSaleFilter[i];

		if(count % 4 ==0)
		{
			content +=" <div class=\"row items-container\">";
			content += pet(1,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],petNFTInfo['nftOwner'],petNFTInfo['salePrice'],petNFTInfo['nftId'])
		}
		else if(count % 4 == 1){
			content += pet(2,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],petNFTInfo['nftOwner'],petNFTInfo['salePrice'],petNFTInfo['nftId'])
			if(count == lstPetSale.length -1)
			{
				content +=" </div>";
			}
		}
		else if(count % 4 == 2){
			content += pet(3,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],petNFTInfo['nftOwner'],petNFTInfo['salePrice'],petNFTInfo['nftId'])
			if(count == lstPetSale.length -1)
			{
				content +=" </div>";
			}
		}
		else if (count % 4 == 3){
			content += pet(4,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],petNFTInfo['nftOwner'],petNFTInfo['salePrice'],petNFTInfo['nftId'])

			content +=" </div>";
		}
		count++;

	}
	$(content).insertBefore(".store .container .pickup-pagination");
	$(".total-page").text(Math.ceil(lstPetSaleFilter.length / limitPage));
}

function sortFunction(a, b) {
	return a['salePrice'] - b['salePrice'];
}

function pet(i,exp,tribe,scarce,owner,price,id)
{
	content = " <div\n" +
	"                                id=\"item-"+ i + "\"\n" +
	"                                class=\""+ positionClass(i) + "\""+
	"                                style=\"background-image: url(img/khung/khung-"+tribe+".png); \"\n" +
		modalEnable(owner)+
	"                        >\n" +
	"                            <button style=\"background-color: #9e7293\" class=\"pet-no\">#"+id+"</button>\n" +
	"                            <img src=\""+imagePetOrEgg(tribe,scarce,exp,true)+"\" alt=\"Avatar Pet\" width=\"400\" height=\"750\"  class=\"image-pet\"/>\n" +
	"                            <span id=\"item-price-caption\" class=\"item-price-caption hidden-xs\" >"+price+"</span>\n" +
	"                            <span id=\"item-name-caption\" class=\"item-name-caption hidden-xs\">"+petName(scarce,true,tribe)+"</span>\n" +
	"                            <div class=\"panel-item__text\">\n" +
	"                                <h4 class=\"panel-item__title\">"+ petName(scarce,true,tribe) +"</h4>\n" +
	"                                <table class=\"info-pet\" >\n" +
	"                                    <tr >\n" +
	"                                        <td>\n" +
	"                                            <p class=\"panel-item__summary\">\n" +
	"                                                <i style=\"margin-right: 5px\" class=\"bx bxs-graduation\"></i>Lv: "+ level(exp)+"\n" +
	"                                            </p>\n" +
	"                                        </td>\n" +
	"                                        <td>\n" +
	"                                            <p class=\"panel-item__summary\" >\n" +
	"                                                <i style=\"margin-right: 5px\" class=\"bx bxs-flag-alt\"></i>Tribe: "+tribename(tribe)+"\n" +
	"                                            </p>\n" +
	"                                        </td>\n" +
	"                                    </tr>\n" +
	"                                    <tr>\n" +
	"                                        <td>\n" +
	"                                            <p class=\"panel-item__summary\" >\n" +
	"                                                <i style=\"margin-right: 5px\" class=\"bx bxs-droplet\"></i>Exp:<br> "+exp+"\n" +
	"                                            </p>\n" +
	"                                        </td>\n" +
	"                                        <td>\n" +
	"                                            <p class=\"panel-item__summary\"  >\n" +
	"                                                <i style=\"margin-right: 5px\" class=\"bx bxl-sketch\"></i>Scarce: "+scarce+"\n" +
	"                                            </p>\n" +
	"                                        </td>\n" +
	"                                    </tr>\n" +
	"                                </table>\n" +
	"                                <p class=\"panel-item__summary\" style=\"text-align: center\"><b>Owner: </b>" +encryptAccount(owner)+"</p>\n" +
	"                                <p style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/>"+ price +"</p>\n" +
	"                            </div>\n" +
	"                            <a xmlns=\"http://www.w3.org/1999/xhtml\" class=\"button-game\">\n" +
	"                                <span class=\"button-game-bg-left-buy\"></span>\n" +
	"                                <span class=\"button-game-bg-mid\">\n" +
									buttonBuyOrCancle(owner)+
	"                  </span>\n" +
	"                                <span class=\"button-game-bg-right-buy\"></span>\n" +
	"                            </a>\n" +
	"                        </div>";
	return content;
}

//getApprove();

async function getApprove(){
    // var myAddress = await ethereum.selectedAddress;
	const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
	var myAddress = accounts[0];
    const web3 = new Web3(DATASEED);
    petGamesTokenContract = new web3.eth.Contract(petGamesTokenAbi, PETGAMES);
     approveAmount = await petGamesTokenContract.methods.allowance(myAddress, PETNFT).call();

}

async function approve(petGamesTokenContract){

    encoded = petGamesTokenContract.methods.approve(PETNFT, "1000000000000000000000000000000").encodeABI();

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

    const web3 = new Web3(DATASEED);

    getTransaction(web3,txHash, "APPROVE");

}

async function buyOrder(nftId){

    const web3 = new Web3(DATASEED);

    petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

    encoded = petNFTContract.methods.buyOrderNFT(nftId).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: PETNFT, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x00', // Only required to send ether to the recipient from the initiating external account.
      data: encoded
    };

     const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });
    getTransaction(web3, txHash, "BUY PET SALE");
}

async function cancelOrder(nftId){

        const web3 = new Web3(DATASEED);

        petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

        encoded = petNFTContract.methods.cancelOrderNFT(nftId).encodeABI();

        const transactionParameters = {
          nonce: '0x00', // ignored by MetaMask
          to: PETNFT, // Required except during contract publications.
          from: ethereum.selectedAddress, // must match user's active address.
          value: '0x00', // Only required to send ether to the recipient from the initiating external account.
          data: encoded
        };

         const txHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
        
		getTransaction(web3, txHash, "CANCEL SALE");

    }
 function buttonBuyOrCancle(owner){
		 var myAddress = ethereum.selectedAddress;
	 if(approveAmount < amount){
		 return "<span class=\"btn-buy\" style=\"font-size: 20px\">Buy</span>\n";
	 }else{
		if(myAddress.toString().trim().toUpperCase() == owner.toString().trim().toUpperCase()){
			console.log(owner);

			return "<span class=\"btn-cancel\" style=\"font-size: 20px\">Cancle</span>\n";

		}else {
			return "<span class=\"btn-buy\" style=\"font-size: 20px\">Buy</span>\n";

		}
	 }
	}

function modalEnable(owner){
	var myAddress = ethereum.selectedAddress;

	if(approveAmount < amount){
		return "";
	}else{
		if(myAddress.toString().trim().toUpperCase() == owner.toString().trim().toUpperCase()){
			return "";

		}else{
			return 	"data-toggle=\"modal\"\n" +
				"data-target=\"#shop-modal\"\n";
		}
	}

}

