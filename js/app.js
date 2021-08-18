async function getDialog(message) {
    $.MessageBox(message);
}

$(document).ready(function () {

  /////////////////////////////////////
  //        CAROUSEL SWIPE           //
  /////////////////////////////////////

  async function getDialog(message) {
    $.MessageBox(message);

  }

  var $sweetworldcarousel = $("#sweet-world-carousel");

  $sweetworldcarousel.swiperight(function () {
    $(this).carousel("prev");
  });
  $sweetworldcarousel.swipeleft(function () {
    $(this).carousel("next");
  });

  //////////////////////////////////////
  //          SNIPPETS                //
  //////////////////////////////////////
  // (function () {
  //   $('a[href^="#"]').on("click", function (e) {
  //     e.preventDefault();
  //
  //     var target = this.hash;
  //     var $target = $(target);
  //
  //     $("html, body").stop().animate(
  //       {
  //         scrollTop: $target.offset().top,
  //       },
  //       900,
  //       "swing"
  //     );
  //   });
  // })();

  /////////////////////////////////////
  //      MODAL WINDOW GALLERY       //
  /////////////////////////////////////


  // $(
  //   "div#item-1, div#item-2, div#item-3, div#item-4,div#item-5, div#item-6, div#item-7, div#item-8,div#item-9, div#item-10, div#item-11, div#item-12"
  // ).on("click", function () {
  //   console.log('ssfsdfsdf');
  //   $("img#showcase-img").addClass("thumb-50");
  //   $("ul#model-feats").addClass("hide");
  // });

  /////////////////////////////////////
  //          GOOGLE MAPS            //
  /////////////////////////////////////
  var map = new GMaps({
    div: "#gmaps",
    lat: 37.9838096,
    lng: 23.7275388,
    zoom: 14,
  });

  var styles = [
    {
      elementType: "labels",
      stylers: [{ visibility: "off" }, { color: "#f49f53" }],
    },
    {
      featureType: "landscape",
      stylers: [{ color: "#f9ddc5" }, { lightness: -7 }],
    },
    { featureType: "road", stylers: [{ color: "#813033" }, { lightness: 43 }] },
    {
      featureType: "poi.business",
      stylers: [{ color: "#645c20" }, { lightness: 38 }],
    },
    {
      featureType: "water",
      stylers: [
        { color: "#1994bf" },
        { saturation: -69 },
        { gamma: 0.99 },
        { lightness: 43 },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        { color: "#f19f53" },
        { weight: 1.3 },
        { visibility: "on" },
        { lightness: 16 },
      ],
    },
    { featureType: "poi.business" },
    {
      featureType: "poi.park",
      stylers: [{ color: "#645c20" }, { lightness: 39 }],
    },
    {
      featureType: "poi.school",
      stylers: [{ color: "#a95521" }, { lightness: 35 }],
    },
    {
      featureType: "poi.medical",
      elementType: "geometry.fill",
      stylers: [{ color: "#813033" }, { lightness: 38 }, { visibility: "off" }],
    },
    {},
    {},
    {},
    {},
    {},
    { elementType: "labels" },
    {
      featureType: "poi.sports_complex",
      stylers: [{ color: "#9e5916" }, { lightness: 32 }],
    },
    {
      featureType: "poi.government",
      stylers: [{ color: "#9e5916" }, { lightness: 46 }],
    },
    { featureType: "transit.station", stylers: [{ visibility: "off" }] },
    {
      featureType: "transit.line",
      stylers: [{ color: "#813033" }, { lightness: 22 }],
    },
    { featureType: "transit", stylers: [{ lightness: 38 }] },
    {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [{ color: "#f19f53" }, { lightness: -10 }],
    },
    {},
  ];

  map.setOptions({ styles: styles });

  map.addMarker({
    lat: 37.9838096,
    lng: 23.7275388,
    title: "Athens HQ",
    infoWindow: {
      content:
        "<p>Our headquarters and main workshop situated in beautiful Athens &hearts; Come see us!</p>",
    },
  });
});

/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded", function () {
  var div,
    n,
    v = document.getElementsByClassName("youtube-player");
  for (n = 0; n < v.length; n++) {
    div = document.createElement("div");
    div.setAttribute("data-id", v[n].dataset.id);
    div.innerHTML = labnolThumb(v[n].dataset.id);
    div.onclick = labnolIframe;
    v[n].appendChild(div);
  }
});

function labnolThumb(id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

function labnolIframe() {
  var iframe = document.createElement("iframe");
  var embed = "https://www.youtube.com/embed/ID?autoplay=1";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
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
$(".carousel").carousel();


var limitPage=12;
async function getTransaction(web3, txHash, mess){

  var receipt;
  // $("#shop-modal").modal('toggle');

  while(1){
    receipt = await web3.eth.getTransactionReceipt(txHash);

    if (receipt != null) break;

    // setTimeout(function(){}, 500);
  }
  console.log(mess);
  if (receipt.status == true){


    getDialog(mess+" DONE ! Please refesh page to update");
  }else{
    $(".shop-modal").attr("style","display:none");

    getDialog(mess+" FAIL !");
  }

}
