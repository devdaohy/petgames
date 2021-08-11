var lstPetSale = new Array(), lstMyPet = new Array();
loadMarket();
loadMyPet();

async function loadMarket(){

	// testnet
	const web3 = new Web3(DATASEED);

	petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

	marketSize = await petNFTContract.methods.balanceOf(PETNFT).call();

	myBalance = await petNFTContract.methods.balanceOf(myAddress).call();

	for(let from=0;from<marketSize;){
		to = Math.min(from+12, marketSize);
		readMarket(from, to, PETNFT);
		from = to;
	}
}

async function readMarket(from, to, sender){

	for(let i = from; i < to; i++){

		var nftId = await petNFTContract.methods.tokenOfOwnerByIndex(sender, Number(i)).call();

		var petNFTInfo = await petNFTContract.methods.getPetNFTInfo(nftId).call();

		lstPetSale.push(petNFTInfo);
	}

	if (lstPetSale.length==marketSize){
		console.log(lstPetSale);
	}
}



async function loadMyPet(){

	var myAddress = ethereum.selectedAddress;

	// testnet
	const web3 = new Web3(DATASEED);

	petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

	myBalance = await petNFTContract.methods.balanceOf(myAddress).call();

	for(let from=0;from<myBalance;){
		to = Math.min(from+12, myBalance);
		readMyPet(from, to, myAddress);
		from = to;
	}
}


async function readMyPet(from, to, sender){
	for(let i = from; i < to; i++){

		var nftId = await petNFTContract.methods.tokenOfOwnerByIndex(sender, Number(i)).call();

		var petNFTInfo = await petNFTContract.methods.getPetNFTInfo(nftId).call();

		lstMyPet.push(petNFTInfo);
	}

	if (lstMyPet.length==myBalance){
		console.log(lstMyPet);
	}
}