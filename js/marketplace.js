document.write('<script type="text/javascript" src="js/loadpet.js" ></script>');

var lstPetSale = new Array();
var lstPetSaleFilter = new Array();
var amount = 1000000 * 100000000000;
var approveAmount ="";
var petGamesTokenContract="";
var levelPet=0;
var scarce = 0;
var count_btn_buy_order=0;
var count_btn_cancel_order = 0;
page=1;


$(".store .container").on("click",".gallery-item", function () {
	var label = $("#myModalLabel");
	var img = $("#showcase-img");
	var price = $("#modal-price-tag");
	var body = $("#modalBody");
	var dataModel = $(this).find("img");
	var modelfeats = $("#model-feats").find("li");
	label.text($(this).find("#item-name-caption").text());
	img.attr("src", dataModel.attr("src"));
	img.attr("style", "background-image: url(img/backgroundpet/background-"+$(this).find("#item-tribe-caption").text()+".png);background-size: 100%;");

	$(".detail-info-pet").html($(this).find(".panel-item__text").html());
	$(".detail-info-pet").find("h4").remove();
	$(".btn-nft-id").text($(this).find("button").text().replace('#',''));

	var detail_btn_buy=$("#detail-btn-buy");
	var detail_btn_cancel_market=$("#detail-btn-cancel-market");
	var item_btn_buy_or_cancel=$(this).find("#item-btn-buy-or-cancel");

	if(item_btn_buy_or_cancel.text()== "cancel")
	{
		detail_btn_buy.attr("style","display:none");
		detail_btn_cancel_market.attr("style","display:block");
	}else{

		detail_btn_buy.attr("style","display:block");
		detail_btn_cancel_market.attr("style","display:none");
	}
});

$(".store .container").on("click","#detail-btn-cancel-market", function () {
	var nft_id=$(this).parent().parent().find("button").text();
	$('#shop-modal').modal('hide');
	count_btn_cancel_order++;
	cancelOrder(nft_id);
});
$(".store .container").on("click", "#detail-btn-buy",function () {
	$('#shop-modal').modal('hide');
	count_btn_buy_order++;
	buyOrder($(this).parent().parent().find("button").text());

});

$(".current-page").keyup(function(event){
	$(".error-input").attr("style","display:none");

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		if(Number($(this).val()))
		{
			page = Number($(this).val());

			if(page > Number($(".total-page").text()))
			{
				page = Number($(".total-page").text());
			}
			else if(page == 0 )
			{
				page = page + 1;
			}
			else if (page < 0)
			{
				page =1;
			}
			$(this).val(page);
			$("div").remove(".item-pet");
			forLstPetSale();
		}else{
			$(".error-input").attr("style","display:block");
		}
	}else{

	}
});

getApprove();
// loadMarket();

async function loadMarket(){
	// testnet
	getAccount();
    await getApprove();
	$("#mySelectLevel").val(0);
	$("div").remove(".item-pet");
	$(".pickup-pagination").attr("style","display:none");
	lstPetSale = new Array();
	lstPetSaleFilter = new Array();
	const web3 = new Web3(DATASEED);

	petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);
	myBalance = await petNFTContract.methods.balanceOf(myAddress).call();

	marketSize = await petNFTContract.methods.balanceOf(PETNFT).call();
	$("#amount-pet-sale").text(marketSize+" Pets For Sales");
	if(marketSize == 0)
	{
		$(".image-load").attr("style","display:none");

	}
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


		lstPetSale.sort(sortFunction);
		forLstPetSale();
		if(approveAmount < amount){
			$(".btn-buy").text("Approve");
			$(".btn-buy").on("click",function () {
				approve(petGamesTokenContract);
			});
		}
		$(".image-load").attr("style","display:none");
		$("#mySelectLevel").removeAttr("disabled");
		$("#mySelectScarce").removeAttr("disabled");


	}
}

function forLstPetSale() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	scarce = Number(scarce);
	if(scarce >0)
	{
		lstPetSaleFilter =lstPetSale.filter(function (a) {
			return Number(a['scarce']) === Number(scarce);
		});
	}else{
		lstPetSaleFilter=lstPetSale;
	}
	if(levelPet !=0)
	{
		lstPetSaleFilter =lstPetSaleFilter.filter(function (a) {
			if(level(Number(a['exp'])) === Number(levelPet)){
				return true;
			}
		});
	}


	if(page == null )page=1;
	var count =0;
	var content="";

	for(let i=((page - 1) * limitPage); i<Math.min(page*limitPage,lstPetSaleFilter.length);i++)
	{

		var petNFTInfo=lstPetSaleFilter[i];

		if(count % 4 ==0)
		{
			content +=" <div class=\"row items-container item-pet\">";
			content += pet(1,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],petNFTInfo['nftOwner'],petNFTInfo['salePrice'],petNFTInfo['nftId'])

			if(count == lstPetSaleFilter.length -1 || count ==limitPage -1)
			{


				content +=" </div>";
				}
		}
		else if(count % 4 == 1){
			content += pet(2,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],petNFTInfo['nftOwner'],petNFTInfo['salePrice'],petNFTInfo['nftId'])
			if(count == lstPetSaleFilter.length -1 || count ==limitPage -1)
			{
				content +=" </div>";

			}
		}
		else if(count % 4 == 2){
			content += pet(3,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],petNFTInfo['nftOwner'],petNFTInfo['salePrice'],petNFTInfo['nftId'])
			if(count == lstPetSaleFilter.length -1 || count ==limitPage -1)
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
	$(".pickup-pagination").attr("style","display:flex");
}

function sortFunction(a, b) {
	if(Number(a['salePrice']) > Number(b['salePrice']))
	{
		return 1;
	}else if(Number(a['salePrice']) == Number(b['salePrice'])){
		if(Number(a['scarce']) < Number(b['scarce']) )
		{
			return 1;
		}else if (Number(a['scarce']) == Number(b['scarce']) )
		{
			if(Number(a['exp']) < Number(b['exp'])){
				return 1;
			}else if(Number(a['exp']) == Number(b['exp'])){
				return 0;
			}else{
				return -1;
			}
		}else{
			return -1;
		}

	}else {
		return -1;
	}
	// return a['salePrice'] > b['salePrice'] ? 1:((a['salePrice'] == b['salePrice']) ? 1: ((a['exp'] < b['exp']) ? 1 : -1) );
	// return a['salePrice'] - b['salePrice'] ;

}

function pet(i,exp,tribe,scarce,owner,price,id) {
	content = " <div\n" +
	"                                id=\"item-"+ i + "\"\n" +
	"                                class=\""+ positionClass(i) + "\""+
	"                                style=\"background-image: url(img/imageframe/imageframe-"+tribe+".png); \"\n" +
		modalEnable(owner)+
	"                        >\n" +
	"                            <button style=\"background-color: #9e7293\" class=\"pet-no\">#"+id+"</button>\n" +
	"                            <img src=\""+imagePetOrEgg(tribe,scarce,exp,true)+"\" alt=\"Avatar Pet\" width=\"400\" height=\"750\"  class=\"image-pet\"/>\n" +
	"                            <span id=\"item-price-caption\" class=\"item-price-caption hidden-xs\" >"+price+"</span>\n" +
		"                            <span id=\"item-tribe-caption\" class=\"item-price-caption hidden-xs\" >"+tribe+"</span>\n" +
		"                            <span id=\"item-btn-buy-or-cancel\" class=\"item-price-caption hidden-xs\" >"+buyOrCancelText(owner)+"</span>\n" +
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
	"                                <p class=\"price-pet\" style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/>"+ price +"</p>\n" +
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
      gasPrice: '0x4A817C800', // customizable by user during MetaMask confirmation.
      gas: '0x186A0', // customizable by user during MetaMask confirmation.
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

   await getTransaction(web3,txHash, "APPROVE");
	loadMarket();
	// location.reload();

}
var count_buy_order =0;
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
	await getTransaction(web3, txHash, "BUY PET SALE");
	count_buy_order++;
	if(count_btn_buy_order == 1)
	{
		await loadMarket();
		setTimeout(function () {},6000);
	}else{
		if(count_buy_order == count_btn_buy_order)
		{
			count_btn_buy_order = 0;
			count_buy_order = 0;
			await loadMarket();
			setTimeout(function () {},6000);
		}
	}
}
var count_cancel_order =0;
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

		await getTransaction(web3, txHash, "CANCEL SALE");
		count_cancel_order++;
		if(count_btn_cancel_order == 1)
		{
			await loadMarket();
			setTimeout(function () {},6000);
		}else{
			if(count_cancel_order == count_btn_cancel_order)
			{
				count_btn_cancel_order = 0;
				count_cancel_order = 0;
				await loadMarket();
				setTimeout(function () {},6000);
			}
		}
    }

 function buttonBuyOrCancle(owner){
		 var myAddress = ethereum.selectedAddress;
	 if(approveAmount < amount){
		 return "<span class=\"btn-buy\" style=\"font-size: 20px\">Buy</span>\n";
	 }else{
		if(myAddress.toString().trim().toUpperCase() == owner.toString().trim().toUpperCase()){


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
			return 	"data-toggle=\"modal\"\n" + "data-target=\"#shop-modal\"\n";
		}else{
			return 	"data-toggle=\"modal\"\n" + "data-target=\"#shop-modal\"\n";
		}
	}
}
function buyOrCancelText(owner){
	var myAddress = ethereum.selectedAddress;
	if(approveAmount < amount){
		return "";
	}else{
		if(myAddress.toString().trim().toUpperCase() == owner.toString().trim().toUpperCase()){
			return "cancel"
		}else{
			return 	"buy";
		}
	}
}


$(".current-page").text(page >=1 ? page: "1");
$(".next-btn").on("click",function () {
	page=Number(page)+1;

	if(page > Number($(".total-page").text()))
	{
		page = page -1;
	}
	var url=new URLSearchParams(window.location.search);
	if(url.has("page"))
	{
		url.set("page",page);
	}else{
		url.append("page",page);
	}
	$("div").remove(".item-pet");

	// document.location = "?"+url.toString();
	$(".current-page").val(page);

	$("div").remove(".item-pet");
	forLstPetSale();
});
$(".prev-btn").on("click",function () {
	page=Number(page)-1;
	if(page == 0 )
	{
		page = page + 1;
	}
	var url=new URLSearchParams(window.location.search);
	if(url.has("page"))
	{
		url.set("page",page);
	}else{
		url.append("page",page);
	}
	$(".current-page").val(page);

	$("div").remove(".item-pet");
	forLstPetSale();
	// document.location = "?"+url.toString();
});
$('#mySelectLevel').change(function(){
		$("div").remove(".item-pet");
		$(".pickup-pagination").attr("style","display:plex");
		levelPet = Number($(this).val());
		$(".current-page").val("1");
		page=1;
		forLstPetSale();
})
$('#mySelectScarce').change(function(){
		$("div").remove(".item-pet");
		$(".pickup-pagination").attr("style","display:plex");
		scarce = Number($(this).val());
		$(".current-page").val("1");
		page=1;
		forLstPetSale();

});
