document.write('<script type="text/javascript" src="js/loadpet.js" ></script>');

$(".store .container").on("click",".gallery-item", function () {
	var label = $("#myModalLabel");
	var img = $("#showcase-img");
	var price = $("#modal-price-tag");
	var body = $("#modalBody");
	var dataModel = $(this).find("img");
	var modelfeats = $("#model-feats").find("li");

	label.text("Sweet World: " + $(this).find("#item-name-caption").text());
	price.text($(this).find("#item-price-caption").text());
	img.attr("src", dataModel.attr("src"));
});
var ele =$("<p id=\"demo\" href='#'>Link</p>");

$("#div_element").on("click","#demo",function(){
	console.log($(this).attr("id"));
});


$("#div_element").append(ele);


$(".next-btn").on("click",function () {

	if(document.location.href.indexOf('?') > -1) {
		console.log(document.location.href.indexOf('page'));
		if(document.location.href.indexOf('page') == -1) {
			var url = document.location.href + "&page=2";
		}else{
			var url = document.location.href;
		}
	}else{
			var url = document.location.href+"?page=2";
	}
	document.location = url;

});
var lstPetSale = new Array();
var lstPetSaleFilter = new Array();
loadMarket();

async function loadMarket(){

	// testnet
	const web3 = new Web3(DATASEED);

	petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

	marketSize = await petNFTContract.methods.balanceOf(PETNFT).call();

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
		forLstPetSale(lstPetSale.length)
		// for(let i=0; i<lstPetSale.length;i++)
		// {
		// 	if(scarce)
		// 	var petNFTInfo=lstPetSale[i];
		//
		// 	if(i % 4 ==0)
		// 	{
		// 		content +=" <div class=\"row items-container\">";
		// 		content += pet(1,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['nftId'])
		// 	}
		// 	else if(i % 4 == 1){
		// 		content += pet(2,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['nftId'])
		// 		if(i == lstPetSale.length -1)
		// 		{
		// 			content +=" </div>";
		// 		}
		// 	}
		// 	else if(i % 4 == 2){
		// 		content += pet(3,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['nftId'])
		// 		if(i == lstPetSale.length -1)
		// 		{
		// 			content +=" </div>";
		// 		}
		// 	}
		// 	else if (i % 4 == 3){
		// 		content += pet(4,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['nftId'])
		//
		// 		content +=" </div>";
		// 	}
		//
		//
		// }
		// $(content).insertBefore(".store .container .pickup-pagination");
		
	}
	// $(content).insertBefore(".store .container .pickup-pagination");
}

function forLstPetSale(length)
{

	var content="";
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
			content += pet(1,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['nftId'])
		}
		else if(count % 4 == 1){
			content += pet(2,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['nftId'])
			if(i == lstPetSale.length -1)
			{
				content +=" </div>";
			}
		}
		else if(count % 4 == 2){
			content += pet(3,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['nftId'])
			if(i == lstPetSale.length -1)
			{
				content +=" </div>";
			}
		}
		else if (count % 4 == 3){
			content += pet(4,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['nftId'])

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
	"                                data-toggle=\"modal\"\n" +
	"                                data-target=\"#shop-modal\"\n" +
	"                        >\n" +
	"                            <button style=\"background-color: #9e7293\" class=\"pet-no\">#"+id+"</button>\n" +
	"                            <img src=\""+"img/ASSET/scarce-"+ scarce +"/a"+ tribe + "-"+ levelimage(exp) +".png"+"\" alt=\"Avatar Pet\" width=\"400\" height=\"750\"  class=\"image-pet\"/>\n" +
	"                            <span id=\"item-price-caption\" class=\"item-price-caption hidden-xs\" >Pay as you go</span>\n" +
	"                            <span id=\"item-name-caption\" class=\"item-name-caption hidden-xs\">Online - Magic box</span>\n" +
	"                            <div class=\"panel-item__text\">\n" +
	"                                <h4 class=\"panel-item__title\">"+ petName(scarce) +"</h4>\n" +
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
	"                                <p class=\"panel-item__summary\" style=\"text-align: center\"><b>Owner: </b>" +owner+"</p>\n" +
	"                                <p style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/>"+ price +"</p>\n" +
	"                            </div>\n" +
	"                            <a xmlns=\"http://www.w3.org/1999/xhtml\" class=\"button-game\">\n" +
	"                                <span class=\"button-game-bg-left-buy\"></span>\n" +
	"                                <span class=\"button-game-bg-mid\">\n" +
	"                    <span style=\"font-size: 20px\">Buy</span>\n" +
	"                  </span>\n" +
	"                                <span class=\"button-game-bg-right-buy\"></span>\n" +
	"                            </a>\n" +
	"                        </div>";
	return content;
}



