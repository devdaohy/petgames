<?php $demo="Ádfasfasd";?>
<?php  include "header.php"?>
    <link href="css/marketplace.css" rel="stylesheet" />
    <link href="css/mypet.css" rel="stylesheet" />
    <!-- ============== STORE SECTION =============== -->
<div class="container" style="margin-top: 2rem">
                <div class="row" id="play">
                    <h2>MY PET</h2>

                    <div class="list-scarces">
                        <ul class="scarces">
                            <li>
                                <a><button class="scarce-1" style="width: 135px">
                                        <i class="bx bxl-sketch"></i>Pet in wallet
                                    </button></a>
                            </li>
                            <li>
                                <a><button class="scarce-2" style="width: 135px" disabled>
                                        <i class="bx bxl-sketch"></i>Pet in market
                                    </button></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="image-load row items-container bottom-wrapper" ></div>


                <div class="row items-container bottom-wrapper">
                    <!-- Modal -->
                    <div class="modal fade modalpet" id="shop-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header pattern">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 class="modal-title" id="myModalLabel" >Modal title</h4>
                                </div>
                                <div class="modal-body pattern clearfix" id="modalBody">
                                    <img src="" id="showcase-img" class="img-thumbnail showcase-img" alt="Showcase Sweet World Game"/>

                                    <div class="detail-info-pet" ></div>
                                    <div class="div-info-sell-tranfer" style="margin-top: 15px">

                                    </div>

                                </div>
                                <div class="modal-footer pattern" style="border-top: 0px">
                                    <a type="button" class="btn-nft" style="display: none"></a>
                                    <a type="button" class="btn-nft-price" style="display: none"></a>
                                    <a type="button" class="btn-nft-tribe" style="display: none"></a>
                                    <a type="button" class="btn-nft-scarce" style="display: none"></a>
                                    <a id="detail-btn-crack" xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide" >
                                        <span class="button-game-bg-left"></span>
                                        <span class="button-game-bg-mid">
                                          <span>Crack</span>
                                        </span>
                                        <span class="button-game-bg-right"></span>
                                    </a>
                                    <a id="detail-btn-sell" xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide">
                                        <span class="button-game-bg-left"></span>
                                        <span class="button-game-bg-mid">
                                          <span>Sell</span>
                                        </span>
                                        <span class="button-game-bg-right"></span>
                                    </a>
                                    <a id="detail-btn-transfer" xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide">
                                        <span class="button-game-bg-left"></span>
                                        <span class="button-game-bg-mid">
                                          <span>Transfer</span>
                                        </span>
                                        <span class="button-game-bg-right"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row items-container bottom-wrapper">
                    <!-- Modal -->
                    <div class="modal fade" id="shop-modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header pattern">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 class="modal-title" id="myModalLabel" >Modal title</h4>
                                </div>
                                <div class="modal-body pattern clearfix" id="modalBody">
                                    <img src="" id="showcase-img" class="img-thumbnail showcase-img" alt="Showcase Sweet World Game"/>

                                    <div class="detail-info-pet" ></div>

                                    <div class="div-info-sell-update">
                                        <form>
                                            <label>Price</label>
                                            <input type="text" class="price" placeholder="Price" style="width: 40% !important;border-radius: 13px"/>
                                        </form>
                                    </div>
                                </div>
                                <div class="modal-footer pattern">
                                    <a type="button" class="btn-nft" style="display: none"></a>
                                    <a type="button" class="btn-nft-price" style="display: none"></a>
                                    <a type="button" class="btn-nft-img" style="display: none"></a>
                                    <a type="button" class="btn-nft-name" style="display: none"></a>
                                    <a type="button" class="btn-nft-tribe" style="display: none"></a>
                                    <a type="button" class="btn-nft-scarce" style="display: none"></a>
                                    <a id="detail-btn-update" xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide" >
                                        <span class="button-game-bg-left"></span>
                                        <span class="button-game-bg-mid">
                                          <span>Update</span>
                                        </span>
                                        <span class="button-game-bg-right"></span>
                                    </a>
                                    <a id="detail-btn-cancel-sell-market" xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide" >
                                        <span class="button-game-bg-left"></span>
                                        <span class="button-game-bg-mid">
                                          <span>Cancel</span>
                                        </span>
                                        <span class="button-game-bg-right"></span>
                                    </a>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<!--                <div class="row items-container bottom-wrapper">-->

<!--                   <div class="modal fade" id="shop-modal-loading" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">-->
<!--                    <div class="modal-dialog" role="document">-->
<!--                        <div class="modal-content" style="width: 100px;height:100px;margin: auto;background-image: url(img/other/loading-buffering.gif);background-repeat: no-repeat;background-size: 100%">-->
<!---->
<!--                            <div class="modal-body pattern clearfix" id="modalBody" style="">-->
                             <!-- <img src="img/other/loading-buffering.gif" id="showcase-img" class="img-thumbnail showcase-img" alt="Showcase Sweet World Game"/>-->
<!---->
<!---->
<!--                            </div>-->
<!---->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                </div>-->

                <!-- Paginator -->
                <div class="pickup-pagination" style="display: none">
                    <button class="prev-btn"><span>❮</span></button>
                    <div>
                        <span class="current-page">1</span>/<span class="total-page"
                        >1</span
                        >
                    </div>
                    <button class="next-btn"><span>❯</span></button>
                </div>
            </div>
        </section>
    </div>
<?php  include "footer.php"?>
<script>
    var scarce=new URLSearchParams(window.location.search);
    scarce=scarce.get('scarce');
    var page=new URLSearchParams(window.location.search);
    page=page.get('page');


</script>
<script type="text/javascript" src="js/loadpet.js" ></script>
<script src="js/mypet.js"></script>
