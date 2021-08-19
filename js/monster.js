document.write('<script type="text/javascript" src="js/loadpet.js" ></script>');

var lstMyPet = new Array();

loadMyPet();

function sortByNftId(a, b) {

    return a['nftId'] - b['nftId']
}

async function loadMyPet(){
    // var myAddress =await ethereum.selectedAddress;
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];

    // testnet
    const web3 = new Web3(DATASEED);

    petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

    myBalance = await petNFTContract.methods.balanceOf(myAddress).call();
    console.log(myBalance);

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

        if(petNFTInfo['active'] == true)
        {
            console.log(petNFTInfo['active']);

            lstMyPet.push(petNFTInfo);
        }
    }


    if(to == myBalance){
        lstMyPet.sort(sortByNftId);
        console.log(lstMyPet);
        forLstMyPet();
    }
}
function forLstMyPet() {
    var count =0;

    for(let i=0; i<lstMyPet.length;i++)

    {
        var content="";
        var petNFTInfo=lstMyPet[i];
        if(i==0)
        {
            content +="  <div class=\"item active\">\n" +
                "                <div class=\"row items-container\">";
        }else{
            content +="  <div class=\"item\">\n" +
                "                <div class=\"row items-container\">";
        }

            content += pet(1,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'],"")
            content +=" </div>\n" +
                "\n" +
                "\n" +
                "            </div>";
        count++;
        $(".carousel-inner").append(content);

    }


}


function pet(i,exp,tribe,scarce,owner,price,active,id,modalwalletormarket) {
    var id_hidden = (active==true)?"":";display:none";
    var class_special = (modalwalletormarket == "") ? "item-special":"";
    content = " <div\n" +
        "                                id=\"item-"+ i + "\"\n" +
        "                                class=\"col-sm-7 col-xs-12 gallery-item itemmonster-1 thumbnail-50 background-config "+ class_special +"\""+
        "                                style=\"background-image: url(img/imageframe/imageframe-"+tribe+".png); \"\n" +
        "                                data-toggle=\"modal\"\n" +
        "                                data-target=\"#shop-modal"+modalwalletormarket+"\"\n" +
        "                        >\n" +
        "                             <button style=\"background-color: #9e7293"+id_hidden+"\" class=\"pet-no\">#"+id+"</button>\n" +
        "                            <img src=\""+imagePetOrEgg(tribe,scarce,exp,active)+"\" alt=\"Avatar Pet\" width=\"400\" height=\"750\"  class=\""+classimage(active)+"\"/>\n" +
        "                            <span id=\"item-price-caption\" class=\"item-price-caption hidden-xs\" >"+price+"</span>\n" +
        "                            <span id=\"item-tribe-caption\" class=\"item-price-caption hidden-xs\" >"+tribe+"</span>\n" +
        "                            <span id=\"item-scarce-caption\" class=\"item-price-caption hidden-xs\" >"+scarce+"</span>\n" +
        "                            <span id=\"active-pet\" class=\"item-price-caption hidden-xs\" >"+ active +"</span>\n" +
        "                            <span id=\"item-name-caption\" class=\"item-name-caption hidden-xs\">"+ petName(scarce,active,tribe)+"</span>\n" +
        "                            <div class=\"panel-item__text\">\n" +
        "                                <h4 class=\"panel-item__title\">"+ petName(scarce,active,tribe)+"</h4>\n" +
        petInfo(active,price,exp,tribe,scarce,modalwalletormarket) +
        "                            </div>\n" +

        "                            <a xmlns=\"http://www.w3.org/1999/xhtml\" class=\"button-game\">\n" +
        "                                <span class=\"button-game-bg-left-buy\"></span>\n" +
        "                                <span class=\"button-game-bg-mid\">\n" +
        "                    <span style=\"font-size: 20px\">Detail</span>\n" +
        "                  </span>\n" +
        "                                <span class=\"button-game-bg-right-buy\"></span>\n" +
        "                            </a>\n" +
        "                        </div>";
    return content;
}
function imagePetOrEgg(tribe,scarce,exp,active) {
    if(active == true)
    {
        if(scarce == 7 || scarce == 8)
        {
            return  "img/ASSET/scarce-"+ scarce +"/a"+ scarce + "-"+ levelimage(exp) +".png";
        }else{
            return  "img/ASSET/scarce-"+ scarce +"/a"+ tribe + "-"+ levelimage(exp) +".png";
        }
    }
    else{
        if(scarce == 7 || scarce == 8)
        {
            return "img/egg/0-egg.png";

        }else{
            return "img/egg/"+tribe+"-egg.png";

        }
    }

}
function classimage(active){
    if(active == false)
    {
        return "image-egg-magic";
    }else{
        return "image-pet";
    }
}
function petOrEgg(active){
    if(active == true ) return "Pet";
    else{
        return "Egg";
    }
}
function petInfo(active,price,exp,tribe,scarce,modalwalletormarket){
    var content = "";
    if(active == true) {
        content = "<table class=\"info-pet\" >\n";

    }
    else{
        content = "<table class=\"info-pet\" style='display:none' >\n";
    }
    var content1 =  " <tr >\n" +
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
        "                                    </tr>\n"  +
        "                                </table>\n";
    if(modalwalletormarket == "")
    {
        return content+  content1;

    }else{
        return content+  content1 +
            "<p style=\"text-align: center\"> <img src=\"img/logo.png\" class=\"imagemoney\"/>"+ price +"</p>\n";

    }

}
