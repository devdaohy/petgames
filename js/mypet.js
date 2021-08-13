

    $(".store .container").on("click",".gallery-item", function () {
        var label = $("#myModalLabel");
        var img = $("#showcase-img");
        var price = $("#modal-price-tag");
        var body = $("#modalBody");
        var dataModel = $(this).find("img");
        var modelfeats = $("#model-feats").find("li");
        var detail_btn_sell=$("#detail-btn-sell");
        var detail_btn_crack=$("#detail-btn-crack");
        var active_pet=$("#active-pet");

        if(active_pet.text()== "true")
        {
            detail_btn_crack.attr("style","display:none");
            detail_btn_sell.attr("style","display:block");
        }else{

            detail_btn_crack.attr("style","display:block");
            detail_btn_sell.attr("style","display:none");
        }
        label.text($(this).find("#item-name-caption").text());
        price.text($(this).find("#item-price-caption").text());
        img.attr("src", dataModel.attr("src"));
        $("#btn-nft").text($(this).find(".pet-no").text().replace('#',''));
        $("#btn-nft-price").text($(this).find("#item-price-caption").text());


    });
    $("#detail-btn-crack").on('click',function () {

        if($(this).parent().find("#btn-nft").text().length >=1){
            crackEgg($(this).parent().find("#btn-nft").text());
        }else{
        }

    });
    $("#detail-btn-sell").on('click',function () {
        if($(this).parent().parent().find(".amount").val().length >0)
        {
            // console.log(Number($(this).parent().parent().find(".amount").val()));

            if(Number.isInteger(Number($(this).parent().parent().find(".amount").val())) && Number($(this).parent().parent().find(".amount").val()) > 0)
            {
                createOrder($(this).parent().find("#btn-nft").text(),Number($(this).parent().parent().find(".amount").val()));
            }
        }

    });
    var lstMyPet = new Array();
    loadMyPet();
    function sortFunction(a, b) {

        return a['salePrice'] - b['salePrice']
    }

    function pet(i,exp,tribe,scarce,owner,price,active,id)
    {
    var id_hidden = (active==true)?"":";display:none";
        content = " <div\n" +
            "                                id=\"item-"+ i + "\"\n" +
            "                                class=\""+ positionClass(i) + "\""+
            "                                style=\"background-image: url(img/khung/khung-"+tribe+".png); \"\n" +
            "                                data-toggle=\"modal\"\n" +
            "                                data-target=\"#shop-modal\"\n" +
            "                        >\n" +
            "                             <button style=\"background-color: #9e7293"+id_hidden+"\" class=\"pet-no\">#"+id+"</button>\n" +
            "                            <img src=\""+imagePetOrEgg(tribe,scarce,exp,active)+"\" alt=\"Avatar Pet\" width=\"400\" height=\"750\"  class=\""+classimage(active)+"\"/>\n" +
            "                            <span id=\"item-price-caption\" class=\"item-price-caption hidden-xs\" >"+price+"</span>\n" +
            "                            <span id=\"active-pet\" class=\"item-price-caption hidden-xs\" >"+ active +"</span>\n" +
            "                            <span id=\"item-name-caption\" class=\"item-name-caption hidden-xs\">"+ tribename(tribe) +" "+petOrEgg(active)+"</span>\n" +
            "                            <div class=\"panel-item__text\">\n" +
            "                                <h4 class=\"panel-item__title\">"+ tribename(tribe) +" "+petOrEgg(active)+"</h4>\n" +
                                            petInfo(active,price,exp,tribe,scarce) +
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

    function levelimage(exp)
    {
        if(exp < 300) return 1;
        else if(exp >=300 && exp <1800) return 2;
        else return 3;
    }

    function tribename(tribe)
    {
        if(tribe == 1) return "Water";
        else if(tribe == 2) return "Fire";
        else if(tribe == 3) return "Wood";
        else if(tribe == 4) return "Metal";
        else if(tribe == 5) return "Earth";
    }

    function positionClass(i)
    {
        var width = $(window).width();
        if (width >= 600 && width <= 1024) {

            if(i ==1) return "col-sm-5 col-xs-5 gallery-item item-1 thumbnail-50 background-config";
            else if(i ==2) return "col-sm-5 col-xs-5 col-xs-offset-2 col-sm-offset-1 gallery-item item-2 thumbnail-50 background-config";
            else if(i ==3) return "col-sm-5 col-xs-5  gallery-item item-3 thumbnail-50 background-config";
            else if(i ==4) return "col-sm-5 col-xs-5 col-xs-offset-2 col-sm-offset-1 gallery-item item-4 humbnail-50 background-config";


        } else if(width >= 10 && width <= 599){


            if(i ==1) return "col-sm-3 col-xs-12 gallery-item item-1 thumbnail-50 background-config";
            else if(i ==2) return "col-sm-3 col-xs-12 col-sm-offset-1 gallery-item item-2 thumbnail-50 background-config";
            else if(i ==3) return "col-sm-3 col-xs-12 col-sm-offset-1 gallery-item item-3 thumbnail-50 background-config";
            else if(i ==4) return "col-sm-3 col-xs-12 col-sm-offset-1 gallery-item item-4 humbnail-50 background-config";

        }
        else{
            if(i ==1) return "col-sm-3 col-xs-5 gallery-item item-1 thumbnail-50 background-config";
            else if(i ==2) return "col-sm-3 col-xs-5 col-sm-offset-1 gallery-item item-2 thumbnail-50 background-config";
            else if(i ==3) return "col-sm-3 col-xs-5 col-sm-offset-1 gallery-item item-3 thumbnail-50 background-config";
            else if(i ==4) return "col-sm-3 col-xs-5 col-sm-offset-1 gallery-item item-4 humbnail-50 background-config";
        }
    }

    function imagePetOrEgg(tribe,scarce,exp,active)
    {
        if(active == true)
        {
            if(tribe == 7 || tribe == 8)
            {
                return  "img/ASSET/scarce-"+ scarce +"/a"+ tribe + "-"+ levelimage(exp) +".png";

            }else{
                return  "img/ASSET/scarce-"+ scarce +"/a"+ tribe + "-"+ levelimage(exp) +".png";

            }
        }
        else{
            return "img/egg/"+tribe+"-egg.png";
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
    function petInfo(active,price,exp,tribe,scarce){
        if(active == true) {
            return "<table class=\"info-pet\" >\n" +
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
            "                                    </tr>\n"  +
            "                                </table>\n";
        }
        else{
            return "";
        }
    }

    function level(exp){
        if(exp < 100) return 1;
        if(exp < 300) return 2;
        if(exp < 900) return 3;
        if(exp < 1800) return 4;
        if(exp < 3600) return 5;
        if(exp < 7200) return 6;
        if(exp < 12000) return 7;

        return 8;
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
        console.log(from);
        for(let i = from; i < to; i++){

            var nftId = await petNFTContract.methods.tokenOfOwnerByIndex(sender, Number(i)).call();

            var petNFTInfo = await petNFTContract.methods.getPetNFTInfo(nftId).call();

            lstMyPet.push(petNFTInfo);
        }


        if(lstMyPet.length == myBalance){

            console.log(lstMyPet);
            var content="";

            for(let i=0; i<lstMyPet.length;i++)
            {
                var petNFTInfo=lstMyPet[i];

                if(i % 4 ==0)
                {
                    content +=" <div class=\"row items-container\">";
                    content += pet(1,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'])
                }
                else if(i % 4 == 1){
                    content += pet(2,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'])
                    if(i == lstMyPet.length -1)
                    {
                        content +=" </div>";
                    }
                }
                else if(i % 4 == 2){
                    content += pet(3,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'])
                    if(i == lstMyPet.length -1)
                    {
                        content +=" </div>";
                    }
                }
                else if (i % 4 == 3){
                    content += pet(4,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'])

                    content +=" </div>";
                }


            }
            $(content).insertBefore(".store .container .pickup-pagination");

        }
    }


    async function crackEgg(nftId){

        const web3 = new Web3(DATASEED);

        petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

        encoded = petNFTContract.methods.openBox(nftId).encodeABI();

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

        console.log(txHash);
    }


    async function createOrder(nftId, price){

        const web3 = new Web3(DATASEED);

        petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

        encoded = petNFTContract.methods.createOrderNFT(nftId,price).encodeABI();

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

        console.log(txHash);
    }

