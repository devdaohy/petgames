<?php $demo="Ádfasfasd";?>
<?php  include "header.php"?>
    <link href="css/marketplace.css?t=<?php echo  time();?>" rel="stylesheet" />
    <link href="css/mypet.css?t=<?php echo  time();?>" rel="stylesheet" />
<div class="container" style="margin-top: 2rem">
                <div class="row" id="play">
                    <h2>MY PET</h2>

                    <div class="list-scarces">
                        <ul class="scarces">
                            <li>
                                <a><button class="scarce-1" style="">
                                        <i class="bx bxl-sketch"></i>Pet in wallet
                                    </button></a>
                            </li>
                            <li>
                                <a><button class="scarce-2" style="" disabled>
                                        <i class="bx bxl-sketch"></i>Pet in market
                                    </button></a>
                            </li>
                        </ul>
                    </div>
                    <div class="list-scarces">
                        <ul class="scarces">
                            <li>
                                <select id="mySelectScarce" disabled style="width: 120px;border-radius: 15px">
                                    <option value="0">All Scarce</option>
                                    <option value="1">Scarce 1</option>
                                    <option value="2">Scarce 2</option>
                                    <option value="3">Scarce 3</option>
                                    <option value="4">Scarce 4</option>
                                    <option value="5">Scarce 5</option>
                                    <option value="6">Scarce 6</option>
                                    <option value="7">Scarce 7</option>
                                    <option value="8">Scarce 8</option>
                                    <option value="9">Egg</option>

                                </select>


                            </li>
                            <li>
                                <select id="mySelectLevel" disabled style="width: 120px;border-radius: 15px">
                                    <option value="0">All level </option>
                                    <option value="1">Level 1</option>
                                    <option value="2">Level 2</option>
                                    <option value="3">Level 3</option>
                                    <option value="4">Level 4</option>
                                    <option value="5">Level 5</option>
                                    <option value="6">Level 6</option>
                                    <option value="7">Level 7</option>
                                    <option value="8">Level 8</option>
                                </select>

                            </li>
                        </ul>
                    </div>

                </div>
    <div class="row items-container">


    </div>
                <div class="row items-container bottom-wrapper">
                    <div class="modal fade modalpet" id="shop-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 class="modal-title" id="myModalLabel" >Modal title</h4>
                                </div>
                                <div class="modal-body clearfix" id="modalBody">
                                    <img src="" id="showcase-img" class="img-thumbnail showcase-img" alt="Image Pet"/>

                                    <div class="detail-info-pet" ></div>
                                    <div class="div-info-sell-tranfer" style="margin-top: 15px">

                                    </div>

                                </div>
                                <div class="modal-footer" style="border-top: 0px">
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
        <div class="modal fade" id="shop-modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel" >Modal title</h4>
                    </div>
                    <div class="modal-body clearfix" id="modalBody">
                        <img src="" id="showcase-img" class="img-thumbnail showcase-img" alt="Image Pet"/>

                        <div class="detail-info-pet" ></div>

                        <div class="div-info-sell-update" style="display: none">
                            <form>
                                <label>Price</label>
                                <input type="text" class="price" placeholder="Price" style="width: 40% !important;border-radius: 13px"/>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a type="button" class="btn-nft" style="display: none"></a>
                        <a type="button" class="btn-nft-price" style="display: none"></a>
                        <a type="button" class="btn-nft-img" style="display: none"></a>
                        <a type="button" class="btn-nft-name" style="display: none"></a>
                        <a type="button" class="btn-nft-tribe" style="display: none"></a>
                        <a type="button" class="btn-nft-scarce" style="display: none"></a>
<!--                        <a id="detail-btn-update" xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide" >-->
<!--                            <span class="button-game-bg-left"></span>-->
<!--                            <span class="button-game-bg-mid">-->
<!--                                          <span>Update</span>-->
<!--                                        </span>-->
<!--                            <span class="button-game-bg-right"></span>-->
<!--                        </a>-->
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
                <div class="image-load row items-container bottom-wrapper" ></div>
                <div class="pickup-pagination" style="display: none">
                    <button class="prev-btn"><span>❮</span></button>
                    <div>
                        <input type="text" style="width: 35px" class="current-page" value="1" onkeyup="this.style.width = (15+(this.value.length + 1) * 10) + 'px';"></input>/<span class="total-page">1</span>
                    </div>
                    <button class="next-btn"><span>❯</span></button>
                </div>
                <div class="error-input" style="display: none">Please enter only number </div>
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
<script type="text/javascript" src="js/loadpet.js?t=<?php echo  time();?>" ></script>
<script src="js/mypet.js?t=<?php echo  time();?>"></script>
