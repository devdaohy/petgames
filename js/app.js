async function getDialog(message) {
    $.MessageBox(message);
}


/////////////////////////////////////
//   CHANGE CLASSES RESPONSIVE     //
/////////////////////////////////////
$(window)
  .resize(function () {
    var width = $(window).width();
    if (width >= 600 && width <= 1024) {
      $(".item-1, .item-2, .item-3, .item-4")
        .removeClass("col-sm-3 col-xs-12")
        .addClass("col-sm-5 col-xs-5");
      $(".item-2").removeClass("col-xs-offset-2").addClass("col-xs-offset-1");
      $(".item-4").removeClass("col-xs-offset-2").addClass("col-xs-offset-1");
      // $(".item-3").removeClass("col-xs-offset-2").addClass("col-xs-offset-1");
      $(".item-3").removeClass("col-sm-offset-1");


    } else if(width >= 10 && width <= 599){
      $(".item-1, .item-2, .item-3, .item-4")
        .removeClass("col-sm-5 col-xs-5")
        .addClass("col-sm-3 col-xs-12");
       $(".item-4").removeClass("col-xs-offset-1");
       $(".item-2").removeClass("col-xs-offset-1");

    }
    else{
      $(".item-1, .item-2, .item-3, .item-4")
          .removeClass("col-sm-5 col-xs-12")
          .addClass("col-sm-3 col-xs-5");
      $(".item-3").addClass("col-sm-offset-1");

    }
  })
  .resize(); //trigger the resize event on page load.

/////////////////////////////////////
//        STOP PINCH ZOOM          //
/////////////////////////////////////
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});

/////////////////////////////////////
//         CAROUSEL FADE           //
/////////////////////////////////////
$(".carousel").carousel('pause');


var limitPage=12;
async function getTransaction(web3, txHash, mess){

  var receipt;
  while(1){
    receipt = await web3.eth.getTransactionReceipt(txHash);

    if (receipt != null) break;

    // setTimeout(function(){}, 500);
  }
  if (receipt.status == true){


    getDialog(mess+" DONE ");
  }else{
    $(".shop-modal").attr("style","display:none");

    getDialog(mess+" FAIL !");
  }

}
