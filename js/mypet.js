document.write('<script type="text/javascript" src="js/loadpet.js" ></script>');

    var pricePet ="";
    var amount="";
    page=1;
    var id="";
    var placPetIn ="";
    placPetIn = "wallet";
    var scarce =0;
    var lstMyPet = new Array();
    var lstMyPetMarket = new Array();
    var yourSaleSize;
    $(".store .container").on("click",".gallery-item", function () {
        var label = $(".modal-title");
        var img = $(".showcase-img");
        var price = $("#modal-price-tag");
        var body = $("#modalBody");
        var dataModel = $(this).find("img");
        var modelfeats = $("#model-feats").find("li");
        var detail_btn_sell=$("#detail-btn-sell");
        var detail_btn_crack=$("#detail-btn-crack");
        var active_pet=$(this).find("#active-pet");
        $("#detail-btn-transfer").removeClass("disable-click");
        detail_btn_crack.find(".button-game-bg-mid").find("span").text("Crack");
        detail_btn_crack.removeClass("disable-click");

        if(active_pet.text()== "true")
        {
            $(".detail-info-pet").attr("style","display:block");

            detail_btn_crack.attr("style","display:none");
            detail_btn_sell.attr("style","display:block");
            img.attr("style", "background-image: url(img/backgroundpet/background-"+$(this).find("#item-tribe-caption").text()+".png);background-size: 100%;");

        }else{
            $(".detail-info-pet").attr("style","display:none");
            detail_btn_crack.attr("style","display:block");
            detail_btn_sell.attr("style","display:none");
            img.attr("style", "background-image: url(img/backgroundpet/background-"+$(this).find("#item-tribe-caption").text()+".png);background-size: 100%;padding:10%");

        }
        label.text($(this).find("#item-name-caption").text());
        price.text($(this).find("#item-price-caption").text());
        pricePet =$(this).find("#item-price-caption").text();
        $(".price").val($(this).find("#item-price-caption").text());
        img.attr("src", dataModel.attr("src"));
        $(".btn-nft").text($(this).find(".pet-no").text().replace('#',''));
        $(".btn-nft-price").text($(this).find("#item-price-caption").text());
        $(".btn-nft-tribe").text($(this).find("#item-tribe-caption").text());
        $(".btn-nft-scarce").text($(this).find("#item-scarce-caption").text());
        $(".div-info-sell-tranfer").html("");
        $(".detail-info-pet").html($(this).find(".panel-item__text").html());
        $(".detail-info-pet").find("h4").remove();

    });

  $("#detail-btn-crack").on('click',async function () {
      $(this).parent().find("#detail-btn-crack").addClass("disable-click");
      $(this).parent().find("#detail-btn-transfer").addClass("disable-click");
      $(this).parent().find("#detail-btn-crack").find(".button-game-bg-mid").find("span").text("Cracking...");

      if ($(this).parent().find(".btn-nft").text().length >= 1) {
           crackEgg($(this).parent().find(".btn-nft").text(),$(this));
      } else {
      }

  });


    $("#detail-btn-sell").on('click',function () {
        $(".div-info-sell-tranfer").html(" <form>\n" +
            "                                            <input type=\"text\" class=\"amount\" placeholder=\"Price\" style=\"width: 21% !important;border-radius: 13px\"/>\n" +
            "                                            <img src=\"img/logo.png\" class=\"imagemoney\" style=\"margin-bottom: 0px !important;background: none;width: 8% !important;    box-shadow: none;\"/>\n" +
            "                                            <label id=\"btnsellpet\">Sell</label>\n" +
            "                                            <label id=\"btncancelsellpet\">Cancel</label>\n" +
            "<p class='error-price-empty' style='color: red;font-size: 70%;display: none'>Please enter price</p>"+
            "<p class='error-price-syntax' style='color: red;font-size: 70%;display: none'>Please enter only number</p>"+
            "                                        </form>");
    });
    $("#detail-btn-transfer").on('click',function () {
    $(".div-info-sell-tranfer").html("<form>\n" +
        "                                            <input type=\"text\" class=\"transfer\" placeholder=\"Address\"  style=\"width: 40% !important;border-radius: 13px\"/>\n" +
        "                                            <label id=\"btntransferpet\">Transfer</label>\n" +
        "                                            <label id=\"btncanceltransferpet\">Cancel</label>\n" +
        "<p class='error-transfer-empty' style='color: red;font-size: 70%;display: none'>Please enter address</p>"+
        "                                        </form>");
});


    $(".div-info-sell-tranfer").on("keyup",".amount",function () {
        $(".error-price-empty").attr("style","display:none;color: red;font-size: 70%;");
        $(".error-price-syntax").attr("style","display:none;color: red;font-size: 70%;");
        amount = $(this).val();
    });
    $(".div-info-sell-tranfer").on("keyup",".transfer",function () {
        $(".error-transfer-empty").attr("style","display:none;color: red;font-size: 70%;");
        id =$(this).val();

    });


    $(".div-info-sell-tranfer").on('click',"#btncancelsellpet",function () {
        $(".div-info-sell-tranfer").html("");
    });
    $(".div-info-sell-tranfer").on('click',"#btncanceltransferpet",function () {
        $(".div-info-sell-tranfer").html("");
    });


    $(".div-info-sell-tranfer").on('click',"#btnsellpet",function () {
        amount= amount.trim();
        if(amount.length >0)
        {
            if(Number.isInteger(Number(amount)) && Number(amount) > 0)
            {
                $("#shop-modal").modal('toggle');

                createOrder($("#detail-btn-sell").parent().find(".btn-nft").text(),amount);
            }else{
                $(".error-price-syntax").attr("style","display:block;color: red;font-size: 70%;");
            }
        }else{

            $(".error-price-empty").attr("style","display:block;color: red;font-size: 70%;");
        }
    });
    $(".div-info-sell-tranfer").on('click',"#btntransferpet",function () {
       id = id.trim();
         if(id.length >0)
        {
            $("#shop-modal").modal('toggle');
            transfer($("#detail-btn-sell").parent().find(".btn-nft").text(),id);
        }else{
             $(".error-transfer-empty").attr("style","display:block;color: red;font-size: 70%;");

         }
    });



    $("#detail-btn-cancel-sell-market").on('click',function () {
        $("#shop-modal1").modal('toggle');
        cancelOrder($("#detail-btn-cancel-sell-market").parent().find(".btn-nft").text());
    });
    $(".div-info-sell-update").on("keyup",".price",function () {
        pricePet = $(this).val();
    });
    $("#detail-btn-update").on('click',function () {
        $("#shop-modal1").modal('toggle');
        updatePriceOrder($("#detail-btn-cancel-sell-market").parent().find(".btn-nft").text(), pricePet);
    });

    $(".scarce-2").on("click",function () {
        $("div").remove(".item-pet");
        $(".pickup-pagination").attr("style","display:none");
        $("#mySelectScarce").val(0);
        page=1;
        scarce=0;
        placPetIn ="market";
        forLstMyPetMarket();
    });
    $(".scarce-1").on("click",function () {
        $("div").remove(".item-pet");
        $(".pickup-pagination").attr("style","display:plex");
        $("#mySelectScarce").val(0);
        page=1;
        scarce=0;

        placPetIn ="wallet";
        forLstMyPet();

    });

    $('#mySelectScarce').change(function(){
        $("div").remove(".item-pet");
        if(placPetIn == "wallet")
        {
            $(".pickup-pagination").attr("style","display:plex");
            scarce = $(this).val();
            forLstMyPet();
        }else{
            $("div").remove(".item-pet");
            scarce = $(this).val();

            $(".pickup-pagination").attr("style","display:none");
            forLstMyPetMarket();
        }

    })

    loadMyPet();
    loadMyPetMarket();
    function sortByNftId(a, b) {

        return a['nftId'] - b['nftId']
    }

    function pet(i,exp,tribe,scarce,owner,price,active,id,modalwalletormarket) {
    var id_hidden = (active==true)?"":";display:none";
    var class_special = (modalwalletormarket == "") ? "item-special":"";
        content = " <div\n" +
            "                                id=\"item-"+ i + "\"\n" +
            "                                class=\""+ positionClass(i) +" "+ class_special +"\""+
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

    async function loadMyPet(){
        getAccount();
        $("div").remove(".item-pet");
        $(".pickup-pagination").attr("style","display:none");
         lstMyPet = new Array();
         // lstMyPetMarket = new Array();
        // var myAddress =await ethereum.selectedAddress;
        const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
        myAddress = accounts[0];

        // testnet
        const web3 = new Web3(DATASEED);

        petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

        myBalance = await petNFTContract.methods.balanceOf(myAddress).call();


        if(myBalance == 0 )
        { $(".scarce-2").removeAttr("disabled");
            $(".image-load").attr("style","display:none");
        }

        for(let from=0;from<myBalance;){

            to = Math.min(from+6, myBalance);
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


        if(lstMyPet.length == myBalance){
            lstMyPet.sort(sortByNftId);

            forLstMyPet();


        }
                $(".image-load").attr("style","display:none");
                 $(".scarce-2").removeAttr("disabled");
                    $("#mySelectScarce").removeAttr("disabled");
                    $(".pickup-pagination").attr("style","display:flex");

    }


    function forLstMyPet() {

        var lstMyPetFilter = new Array();

        if(scarce >0)
        {
            if(scarce == 9){
                lstMyPetFilter =lstMyPet.filter(function (a) {
                    return a['active'] === false;
                });
            }else{
                lstMyPetFilter =lstMyPet.filter(function (a) {
                    return a['active'] === true;
                });
                lstMyPetFilter =lstMyPetFilter.filter(function (a) {
                    return a['scarce'] === scarce;
                });
            }
        }else{
            lstMyPetFilter=lstMyPet;
        }


        var count =0;
        if(page == null )page=1;
        var content="";
        for(let i=((page - 1) * limitPage); i<Math.min(page*limitPage,lstMyPetFilter.length);i++)
        {
            var petNFTInfo= lstMyPetFilter[i];
            if(count % 4 ==0)
        {
            content +=" <div class=\"row items-container item-pet\">";
            content += pet(1,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'],"")

            if(count == lstMyPetFilter.length -1 || count ==limitPage -1)
            {
                content +=" </div>";
            }
        }
        else if(count % 4 == 1){
            content += pet(2,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'],"")
            if(count == lstMyPetFilter.length -1 || count ==limitPage -1)
            {
                content +=" </div>";
            }
        }
        else if(count % 4 == 2){
            content += pet(3,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'],"")
            if(count == lstMyPetFilter.length -1 || count ==limitPage -1)
            {
                content +=" </div>";
            }
        }
        else if (count % 4 == 3){
            content += pet(4,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'],"")

            content +=" </div>";
        }
        count++;
        }
        $(content).insertBefore(".store .container .pickup-pagination");

        $(".total-page").text(Math.ceil(lstMyPetFilter.length / limitPage));


    }
    function forLstMyPetMarket() {
        var content="";
        var count =0;
        var lstMyPetFilter = new Array();

        if(scarce >0)
        {
            if(scarce == 9){
                lstMyPetFilter =lstMyPetMarket.filter(function (a) {
                    return a['active'] === false;
                });
            }else{
                lstMyPetFilter =lstMyPetMarket.filter(function (a) {
                    return a['active'] === true;
                });
                lstMyPetFilter =lstMyPetFilter.filter(function (a) {
                    return a['scarce'] === scarce;
                });
            }
        }else{
            lstMyPetFilter=lstMyPetMarket;
        }
        if(page == null )page=1;
        // for(let i=((page - 1) * limitPage); i<Math.min(page*limitPage,lstMyPetMarket.length);i++)
        for(let i=0; i<lstMyPetFilter.length;i++)

        {
            var petNFTInfo=lstMyPetFilter[i];

            if(i % 4 ==0)
            {
                content +=" <div class=\"row items-container item-pet\">";
                content += pet(1,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'],"1")
            }
            else if(i % 4 == 1){
                content += pet(2,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'],"1")
                if(i == lstMyPetFilter.length -1)
                {
                    content +=" </div>";
                }
            }
            else if(i % 4 == 2){
                content += pet(3,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'],"1")
                if(i == lstMyPetFilter.length -1)
                {
                    content +=" </div>";
                }
            }
            else if (i % 4 == 3){
                content += pet(4,petNFTInfo['exp'],petNFTInfo['tribe'],petNFTInfo['scarce'],encryptAccount(petNFTInfo['nftOwner']),petNFTInfo['salePrice'],petNFTInfo['active'],petNFTInfo['nftId'],"1")

                content +=" </div>";
            }
            count++;

        }
        $(content).insertBefore(".store .container .pickup-pagination");
        $(".total-page").text(Math.ceil(lstMyPetFilter.length / limitPage));

    }


    async function crackEgg(nftId,thiss){

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

        var receipt;
         while(1){
            receipt = await web3.eth.getTransactionReceipt(txHash);

            if (receipt != null) break;

            // setTimeout(function(){}, 500);
        }
        if (receipt.status == true){

            var scarce = Number(thiss.parent().find(".btn-nft-scarce").text());
            var tribe = Number(thiss.parent().find(".btn-nft-tribe").text());
            $(".detail-info-pet").attr("style","display:block");

            thiss.parent().parent().find(".modal-header").find('.modal-title').text(petName(scarce, true, tribe));
            $(".detail-info-pet").find(".info-pet").attr('style', "display:table");
            $(".showcase-img").attr("src", imagePetOrEgg(tribe, scarce, 0, true));
            thiss.parent().find("#detail-btn-crack").find(".button-game-bg-mid").find("span").text("Crack");

            getDialog("CRACK EGG"+" DONE ");
        }else{
            getDialog("CRACK EGG"+" FAIL !");
        }
        loadMyPet();
        // getTransaction(web3, txHash, "CRACK EGG");


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

        await getTransaction(web3, txHash, "CREATE SALE");
        // setTimeout(function () {},1000);
       await loadMyPet();
        await loadMyPetMarket();

        // location.reload();

    }
    async function transfer(nftId, toAddress){

        const web3 = new Web3(DATASEED);

        petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

        encoded = petNFTContract.methods.transferFrom(ethereum.selectedAddress, toAddress, nftId).encodeABI();

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

        await getTransaction(web3, txHash, "TRANSFER PET");
        await loadMyPet();

        // location.reload();
    }


    //update pet in market
    async function loadMyPetMarket(updateAfterTransaction){
        getAccount();
        $("div").remove(".item-pet");
        $(".pickup-pagination").attr("style","display:none");

        lstMyPetMarket = new Array();
        // var myAddress =await ethereum.selectedAddress;
        const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
        myAddress = accounts[0];
        // testnet
        const web3 = new Web3(DATASEED);

        petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

        yourSaleSize = await petNFTContract.methods.yourSaleSize(myAddress).call();


        for(let from=0;from<yourSaleSize;){
            to = Math.min(from+6, yourSaleSize);
            readMyPetMarket(from, to, myAddress,updateAfterTransaction);
            from = to;
        }
    }

    async function readMyPetMarket(from, to, sender,updateAfterTransaction){

        for(let i = from; i < to; i++){

            var nftId = await petNFTContract.methods.yourSaleByIndex(sender, Number(i)).call();

            var petNFTInfo = await petNFTContract.methods.getPetNFTInfo(nftId).call();

            lstMyPetMarket.push(petNFTInfo);
        }

        if(lstMyPetMarket.length == yourSaleSize){

            if(updateAfterTransaction ==1)
            {
                forLstMyPetMarket();
            }
        }
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

        await   getTransaction(web3, txHash, "CANCEL SALE");
        await  loadMyPet();
       await loadMyPetMarket(1);
        // location.reload();
    }


    async function updatePriceOrder(nftId, price){

        const web3 = new Web3(DATASEED);

        petNFTContract = new web3.eth.Contract(petNFTAbi, PETNFT);

        encoded = petNFTContract.methods.updatePriceOrderNFT(nftId, price).encodeABI();

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
        // $("#shop-modal1").modal('toggle');

        await getTransaction(web3, txHash, "UPDATE SALE PRICE");
        await loadMyPetMarket(1);
        // location.reload();
    }

$(".current-page").text(page >=1 ? page: "1");
$(".next-btn").on("click",function () {
    page = $(".current-page").val();

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
    // document.location = "?"+url.toString();
    $(".current-page").val(page);

    if(placPetIn == "wallet")
    {
        $("div").remove(".item-pet");
        $(".pickup-pagination").attr("style","display:plex");
        forLstMyPet();
    }else{
        $("div").remove(".item-pet");
        $(".pickup-pagination").attr("style","display:none");
        forLstMyPetMarket();
    }
});
$(".prev-btn").on("click",function () {
   page = $(".current-page").val();
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

    // document.location = "?"+url.toString();
    if(placPetIn == "wallet")
    {
        $("div").remove(".item-pet");
        $(".pickup-pagination").attr("style","display:plex");
        forLstMyPet();
    }else{
        $("div").remove(".item-pet");
        $(".pickup-pagination").attr("style","display:none");
        forLstMyPetMarket();
    }
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
            }else if (page < 0)
            {
                page =1;
            }
            $(this).val(page);
            $("div").remove(".item-pet");
            forLstMyPet();
        }else{
            $(".error-input").attr("style","display:block");
        }
    }else{

    }
});




