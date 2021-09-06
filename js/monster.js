document.write('<script type="text/javascript" src="js/loadpet.js" ></script>');
getTimeClaimAndReward();

// $("#shop-modal-fight").modal('toggle');
// $("#shop-modal-win").modal('toggle');
// $("#shop-modal-lose").modal('toggle');
$("#shop-modal-win .button-game-bg-mid").on("click",function () {
    $("#shop-modal-win").modal('toggle');

});
$("#shop-modal-lose .button-game-bg-mid").on("click",function () {
    $("#shop-modal-lose").modal('toggle');

});

$("#btn-fight-1").on("click",function () {
    var nft_id= $('.carousel-inner').find('.active').find('.pet-no').text().replace('#','');
    var level =1;
    $("#shop-modal-fight").modal('toggle');

    fightMonster(nft_id, level);
});
$("#btn-fight-2").on("click",function () {
    var nft_id= $('.carousel-inner').find('.active').find('.pet-no').text().replace('#','');
    var level =2;
    $("#shop-modal-fight").modal('toggle');

    fightMonster(nft_id, level);

});
$("#btn-fight-3").on("click",function () {
    var nft_id= $('.carousel-inner').find('.active').find('.pet-no').text().replace('#','');
    var level =3;
    $("#shop-modal-fight").modal('toggle');

    fightMonster(nft_id, level);

});
$("#btn-fight-4").on("click",function () {
    var nft_id= $('.carousel-inner').find('.active').find('.pet-no').text().replace('#','');
    var level =4;
    $("#shop-modal-fight").modal('toggle');

    fightMonster(nft_id, level);

});

expFightMonster(1);
expFightMonster(2);
expFightMonster(3);
expFightMonster(4);

async function expFightMonster(monsterLv){

    // testnet
    const web3 = new Web3(DATASEED);

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    var expFight = await monsterContract.methods._expFightMonster1(monsterLv).call();

    $("#item-"+ monsterLv +" .info-monster tr:nth-child(4) td:nth-child(2)").text( Math.floor(0.75*expFight) +" - " + expFight);


}


$(".carousel-control-next-icon").on("click",function () {
    setTimeout(function(){
        // $("#btn-fight-1").removeClass("disable-click");
        // $("#btn-fight-2").removeClass("disable-click");
        // $("#btn-fight-3").removeClass("disable-click");
        // $("#btn-fight-4").removeClass("disable-click");
        var nft_id= $('.carousel-inner').find('.active').find('.pet-no').text().replace('#','');
        rewardFightMonster(nft_id,1);
        rewardFightMonster(nft_id,2);
        rewardFightMonster(nft_id,3);
        rewardFightMonster(nft_id,4);
        getTimeFightMonster1(nft_id);
    }, 700);
});

$(".carousel-control-prev-icon").on("click",function () {
    setTimeout(function(){
        // $("#btn-fight-1").removeClass("disable-click");
        // $("#btn-fight-2").removeClass("disable-click");
        // $("#btn-fight-3").removeClass("disable-click");
        // $("#btn-fight-4").removeClass("disable-click");
        var nft_id= $('.carousel-inner').find('.active').find('.pet-no').text().replace('#','');
        rewardFightMonster(nft_id,1);
        rewardFightMonster(nft_id,2);
        rewardFightMonster(nft_id,3);
        rewardFightMonster(nft_id,4);
        getTimeFightMonster1(nft_id);
    }, 700);
});

async function rewardFightMonster(nftId, monsterLv){

    // testnet
    const web3 = new Web3(DATASEED);

    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    bootMode = await monsterContract.methods.getBootMode(myAddress).call();

    rewardFight = await monsterContract.methods._rewardFightMonster1(nftId, monsterLv, bootMode['bootLv']).call();

    $("#item-"+ monsterLv +" .info-monster tr:nth-child(3) td:nth-child(2)").text(Math.floor(0.75*rewardFight) +" - " + rewardFight);

}



async function updateRealTimeFight(){
    $('.carousel-inner').find('.item').each(function (index)
    {
        var  timeFight = $(this).find('.info-pet tr:nth-child(4) td:nth-child(1)').find('p').text();
        if(timeFight != 0)
        {
            if( Number(Math.floor($.now()/1000)) < Number(timeFight)){
                totalSeconds =  Math.floor(timeFight-($.now()/1000 ));
                hours = Math.floor(totalSeconds / 3600);
                totalSeconds %= 3600;
                minutes = Math.floor(totalSeconds / 60);
                seconds = totalSeconds % 60;
                $(this).find('.info-pet tr:nth-child(3) td:nth-child(1)').find('p').text(hours +" : "+ minutes+" : "+ seconds );
                if($(this).hasClass("active")){
                    $("#btn-fight-1").addClass("disable-click");
                    $("#btn-fight-2").addClass("disable-click");
                    $("#btn-fight-3").addClass("disable-click");
                    $("#btn-fight-4").addClass("disable-click");
                }
            }else{
                $(this).find('.info-pet tr:nth-child(3) td:nth-child(1)').find('p').text("Can fight");
                if($(this).hasClass("active")){
                    $("#btn-fight-1").removeClass("disable-click");
                    $("#btn-fight-2").removeClass("disable-click");
                    $("#btn-fight-3").removeClass("disable-click");
                    $("#btn-fight-4").removeClass("disable-click");
                }

            }
        }
         });

}

setInterval(updateRealTimeFight, 1000);

async function getTimeFightMonster1(nftId){

    const web3 = new Web3(DATASEED);

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    timeFight = await monsterContract.methods.getTimeFightMonster1(nftId).call();
    if( Number(Math.floor($.now()/1000)) < Number(timeFight)){
        totalSeconds =  Math.floor(timeFight-($.now()/1000 ));
        hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        minutes = Math.floor(totalSeconds / 60);
        seconds = totalSeconds % 60;
        $('.carousel-inner').find('.active').find('.info-pet tr:nth-child(3) td:nth-child(1)').find('p').text(hours +" : "+ minutes+" : "+ seconds );
        $('.carousel-inner').find('.active').find('.info-pet tr:nth-child(4) td:nth-child(1)').find('p').text(timeFight);
        $("#btn-fight-1").addClass("disable-click");
        $("#btn-fight-2").addClass("disable-click");
        $("#btn-fight-3").addClass("disable-click");
        $("#btn-fight-4").addClass("disable-click");

    }else{
        $('.carousel-inner').find('.active').find('.info-pet tr:nth-child(3) td:nth-child(1)').find('p').text("Can fight");
        $('.carousel-inner').find('.active').find('.info-pet tr:nth-child(4) td:nth-child(1)').find('p').text(timeFight);
        $("#btn-fight-1").removeClass("disable-click");
        $("#btn-fight-2").removeClass("disable-click");
        $("#btn-fight-3").removeClass("disable-click");
        $("#btn-fight-4").removeClass("disable-click");
    }

}

async function fightMonster(nftId, monsterLv){

    const web3 = new Web3(DATASEED);

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    encoded = monsterContract.methods.fightMonster1(nftId, monsterLv).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: MONSTER, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x00', // Only required to send ether to the recipient from the initiating external account.
      data: encoded
    };

    const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });

    await getFightResult(web3, txHash, monsterContract);
    $("#shop-modal-fight").modal('toggle');
   await getTimeFightMonster1(nftId);
    getAccount();
}


async function getFightResult(web3, txHash, monsterContract){

  var receipt;

  while(1){
    receipt = await web3.eth.getTransactionReceipt(txHash);

    if (receipt != null) break;

  }

  if (receipt.status == true){

    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];

    lastFight = await monsterContract.methods.getLastFightMonster(myAddress).call();

    if(lastFight['win']==true){
        $("#shop-modal-win").modal('toggle');
        $("#shop-modal-win .detail-info-pet").html("You win <br>Exp: "+lastFight['exp']+"<br>Reward: "+lastFight['reward']+" PETG");
    }else{
        $("#shop-modal-lose").modal('toggle');
        $("#shop-modal-lose .detail-info-pet").html("You lose <br>Exp: "+lastFight['exp']);
    }
    var exp = Number(lastFight['exp']) + Number($('.carousel-inner').find('.active').find('.info-pet tr:nth-child(2) td:nth-child(1)').find('p').text().split('Exp:')[1]);

    var lv = level(exp);
      $('.carousel-inner').find('.active').find('.info-pet tr:nth-child(1) td:nth-child(1)').find('p').html("<i style=\"margin-right: 5px\" class=\"bx bxs-graduation\"></i>Lv: "+lv);
      $('.carousel-inner').find('.active').find('.info-pet tr:nth-child(2) td:nth-child(1)').find('p').html("<i style=\"margin-right: 5px\" class=\"bx bxs-droplet\"></i>Exp: <br>" + exp);


  }else{
    getDialog("Fight Monster FAIL !");
  }

}


var lstMyPet = new Array();
var lstMyPetD = new Array();
var lstMyPetTimeFight = new Array();
var countPetHack = 0;

var banContract = "";

loadMyPet();

function sortByNftId(a, b) {

    return Number(a['nftId']) - Number(b['nftId']);
}

async function loadMyPet(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];

    // testnet
    const web3 = new Web3(DATASEED);

    petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

    myBalance = await petNFTContract.methods.balanceOf(myAddress).call();

    banContract =  new web3.eth.Contract(bannedAbi, PETGAMESBANNED);
    countPetHack = 0;
    var checkAddr = await banContract.methods.checkBanAddress(myAddress).call();

    for(let from=0;from<myBalance;){
        if(checkAddr){
            break;
        }
        to = Math.min(from+6, myBalance);
        readMyPet(from, to, myAddress);
        from = to;
    }
}
async function readMyPet(from, to, sender){
    for(let i = from; i < to; i++){
        var nftId = await petNFTContract.methods.tokenOfOwnerByIndex(sender, Number(i)).call();
        var petNFTInfo = await petNFTContract.methods.getPetNFTInfo(nftId).call();
        var checkNft = await banContract.methods.checkNftHack(petNFTInfo['nftId']).call();

        if (!checkNft){
            lstMyPetD.push(petNFTInfo);
            if(petNFTInfo['active'] == true)
            {
                lstMyPet.push(petNFTInfo);
            }
        }else{
            countPetHack ++;
        }
    }
    if(lstMyPetD.length == myBalance- Number(countPetHack)){

        lstMyPet.sort(sortByNftId);

         forLstMyPet();
        $(".carousel-control-prev").attr("style","display:flex");
        $(".carousel-control-next").attr("style","display:flex");
    }
}
async function forLstMyPet() {
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
        content +=" </div>\n" + "\n" + "\n" + "</div>";
        count++;
        $(".carousel-inner").append(content);

        if(i==0)
        {
            await  getTimeFightMonster1(petNFTInfo['nftId']);
            rewardFightMonster(petNFTInfo['nftId'],1);
            rewardFightMonster(petNFTInfo['nftId'],2);
            rewardFightMonster(petNFTInfo['nftId'],3);
            rewardFightMonster(petNFTInfo['nftId'],4);

        }
    }
}


function pet(i,exp,tribe,scarce,owner,price,active,id,modalwalletormarket) {
    var id_hidden = (active==true)?"":";display:none";
    var class_special = (modalwalletormarket == "") ? "item-special":"";
    content = " <div\n" +
        "                                id=\"item-"+ i + "\"\n" +
        "                                class=\"gallery-item itemmonster-1 thumbnail-50 background-config "+ class_special +"\""+
        "                                style=\"background-image: url(img/imageframe/imageframe-"+tribe+".png);margin: 23px \"\n" +
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
        petInfo(active,price,exp,tribe,scarce,modalwalletormarket,id) +
        "                            </div>\n" +


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
function petInfo(active,price,exp,tribe,scarce,modalwalletormarket,id){
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
        "                                    <tr>\n" +
        "                                        <td colspan=\"2\">\n" +
        "                                            <p style='    background-color: #ff9900d1;\n" +
        "    width: 50%;\n" +
        "    text-align: center;\n" +
        "    margin: auto;\n" +
        "    border-radius: 10px;\n" +
        "    padding: 2px;' class=\"panel-item__summary\" >\n" +
        "                                            </p>\n" +
        "                                        </td>\n" +

        "                                    </tr>\n"  +
        "                                    <tr style='display: none'>\n" +
        "                                        <td colspan=\"2\">\n" +
        "                                            <p  class=\"panel-item__summary\" >\n" +
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
var width = $(window).width();
if(width >= 10 && width <= 599){
    $(".item1-1")
        .removeClass("col-sm-4 col-sm-6 col-xs-6 col-xs-12")
        .addClass("col-sm-6 col-xs-12");

}
else if (width >= 600 && width <= 1024) {
    $(".item1-1")
        .removeClass("col-sm-4 col-sm-6 col-xs-6 col-xs-12")
        .addClass("col-sm-6 col-xs-6");
}
else{
    $(".item1-1")
        .removeClass("col-sm-4 col-sm-6 col-xs-12 col-xs-12")
        .addClass("col-sm-4 col-xs-6");
}

$(window)
    .resize(function () {
        var width = $(window).width();
        if(width >= 10 && width <= 599){
            $(".item1-1")
                .removeClass("col-sm-4 col-sm-6 col-xs-6 col-xs-12")
                .addClass("col-sm-6 col-xs-12");

        }
        else if (width >= 600 && width <= 1024) {
            $(".item1-1")
                .removeClass("col-sm-4 col-sm-6 col-xs-6 col-xs-12")
                .addClass("col-sm-6 col-xs-6");


        }
        else{
            $(".item1-1")
                .removeClass("col-sm-4 col-sm-6 col-xs-12 col-xs-12")
                .addClass("col-sm-4 col-xs-6");


        }
    }).resize();

async function claim(amount){

    const web3 = new Web3(DATASEED);

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    encoded = monsterContract.methods.claimReward(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: MONSTER, // Required except during contract publications.
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
        getDialog("CLAIM "+" DONE !");

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

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    var timeClaim = await monsterContract.methods.getTimeClaim(myAddress).call();
    var rewardClaim = await monsterContract.methods.getRewardClaim(myAddress).call();
    // var feeClaim = await monsterContract.methods.getFeeClaim(myAddress).call();
    var feePercent = await monsterContract.methods.getFeePercent(myAddress).call();


    if( Number(Math.floor($.now()/1000)) < Number(timeClaim)){
        totalSeconds =  Math.floor(timeClaim-($.now()/1000 ));
        date = Math.floor(totalSeconds / (3600*24));
        totalSeconds %= (3600*24);
        hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        minutes = Math.floor(totalSeconds / 60);
        seconds = totalSeconds % 60;
        $(".time_claim").text(date+ " : " + hours +" : "+ minutes+" : "+ seconds );
        $(".money_claim").text(rewardClaim);
        $(".fee").text(feePercent +"%");

    }else{

        $(".time_claim").text("0 : 0 : 0 : 0");
        $(".money_claim").text(rewardClaim);
        $(".fee").text(feePercent +"%");

    }
}
async function getRewardClaim(){

    // testnet
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];
    const web3 = new Web3(DATASEED);

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    var rewardClaim = await monsterContract.methods.getRewardClaim(myAddress).call();
    $('.current-reward').val(Number(rewardClaim));
    $('.current-reward').width((15+(rewardClaim.toString().length + 1) * 10));


}

setInterval(getTimeClaimAndReward, 1000);

async function buyBoxWithReward(){

    const web3 = new Web3(DATASEED);

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    encoded = monsterContract.methods.buyBoxWithReward().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: MONSTER, // Required except during contract publications.
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
        getDialog("BUY RANDOM EGG"+" DONE !");

        getAccount();

    }else{
        $(".shop-modal").attr("style","display:none");
        getDialog("BUY EGG "+" FAIL !");
    }

}

$(".current-reward").keyup(function(event){
    $(".error-price-syntax").attr("style","display:none");
    $(".error-0-claim").attr("style","display:none");
    if($(".current-reward").val().charAt(0)=="0")
    {
        $(".current-reward").val($(".current-reward").val().slice(1,$(".current-reward").val().length));
    }
    if(Number($('.current-reward').val().length)==0)
    {
        $('.current-reward').val("0");
        $('.current-reward').width((15+($('.current-reward').val().toString().length + 1) * 10));

    }
});
if(Number($('.current-reward').val().length)==0)
{
    $('.current-reward').val("0");
}

$('.btn-max-reward-claim').on('click',function () {
    getRewardClaim();
});
// $(".error-0-claim").clickOutsideThisElement(function() {
//     $(".error-0-claim").attr("style","display:none");
//
// });
$('.btn-claim').on('click',function () {
    if($('.current-reward').val().toString().length==0)
    {
        $('.current-reward').val('0');
    }else{
        if(Number.isInteger(Number($('.current-reward').val())))
        {
            if(Number($('.current-reward').val()) ==0){
                $(".error-0-claim").attr("style","display:block;color: red;font-size: 70%;");

            } else{
                claim(Number($('.current-reward').val()));
            }
        }
        else{
            $(".error-price-syntax").attr("style","display:block;color: red;font-size: 70%;");

        }
    }

});
$('.btn-buyboxwithreward').on('click',function () {
    buyBoxWithReward();
});

async function getBootMode(){

    // testnet
    const web3 = new Web3(DATASEED);

    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    bootMode = await monsterContract.methods.getBootMode(myAddress).call();
    console.log(bootMode[0] +' - ' + bootMode[1]);

    $('#mySelectLevel option[value="'+ bootMode[0] +'"]').attr('selected','selected');

    if(bootMode[1]==0){
        $(".btn-update-super-mode").removeClass("disable-click-claim");
    }else{
        $(".btn-update-super-mode").addClass("disable-click-claim");

    }
}
$(".btn-update-super-mode").on('click',function () {
    settingBootMode(Number($('#mySelectLevel').val()));
});

getMaxBootLv();
// setInterval(getBootMode,1000);

async function getMaxBootLv(){

    // testnet
    const web3 = new Web3(DATASEED);

    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    myAddress = accounts[0];

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    maxBootLv = await monsterContract.methods._maxBootLv().call();
    $('#mySelectLevel').find('option').remove().end();
    for(i=0;i<=maxBootLv;i++)
    {
        $('#mySelectLevel').append('<option value='+ i +'>Level '+ (i+1) + '</option>');
    }
    $('#mySelectLevel').removeAttr("disabled");
    getBootMode();
}


async function settingBootMode(lv){

    const web3 = new Web3(DATASEED);

    monsterContract = new web3.eth.Contract(monsterAbi, MONSTER);

    encoded = monsterContract.methods.settingBootMode(lv).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      to: MONSTER, // Required except during contract publications.
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
        getDialog("UPDATE SUPER MODE"+" DONE !");

        getAccount();
        getMaxBootLv();
        var nft_id= $('.carousel-inner').find('.active').find('.pet-no').text().replace('#','');
        rewardFightMonster(nft_id,1);
        rewardFightMonster(nft_id,2);
        rewardFightMonster(nft_id,3);
        rewardFightMonster(nft_id,4);
    }else{
        $(".shop-modal").attr("style","display:none");
        getDialog("UPDATE SUPER MODE"+" FAIL !");
    }

}