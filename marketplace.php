<?php ?>
    <?php  include "header.php"?>
<link href="css/marketplace.css" rel="stylesheet" />
        <!-- ============== STORE SECTION =============== -->



<div class="container" style="margin-top: 2rem">
                    <div id="div_element"></div>
                    <div class="row" id="play">
                        <h2>MARKETPLACE</h2>
                        <h3 id="amount-pet-sale" style="text-align: center;margin-bottom: 0px"></h3>

                        <div>
                          <p style="text-align: center;font-size:25px" id="my-balance">  </p>

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
                                <li>
                                    <a><button class="scarce-1 refresh-page" style="" disabled>
                                            <i class="bx bx-refresh"></i>Refesh
                                        </button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
<!--    <div class="row items-container">-->
<!--        <div class="list-scarces list-select-scarce" style="">-->
<!--            <select id="mySelectScarce" disabled style="width: 120px;border-radius: 15px">-->
<!--                <option value="0">All Scarce</option>-->
<!--                <option value="1">Scarce 1</option>-->
<!--                <option value="2">Scarce 2</option>-->
<!--                <option value="3">Scarce 3</option>-->
<!--                <option value="4">Scarc 4</option>-->
<!--                <option value="5">Scarc 5</option>-->
<!--                <option value="6">Scarc 6</option>-->
<!--                <option value="7">Scarc 7</option>-->
<!--                <option value="8">Scarc 8</option>-->
<!--                <option value="9">Egg</option>-->
<!---->
<!--            </select>-->
<!--        </div>-->
<!--        <div class="list-scarces list-select-level" style="">-->
<!--            <select id="mySelectLevel" disabled style="width: 120px;border-radius: 15px">-->
<!--                <option value="0">All level </option>-->
<!--                <option value="1">Level 1</option>-->
<!--                <option value="2">Level 2</option>-->
<!--                <option value="3">Level 3</option>-->
<!--                <option value="4">Level 4</option>-->
<!--                <option value="5">Level 5</option>-->
<!--                <option value="6">Level 6</option>-->
<!--                <option value="7">Level 7</option>-->
<!--                <option value="8">Level 8</option>-->
<!---->
<!--            </select>-->
<!--        </div>-->
<!---->
<!---->
<!--    </div>-->
                    <div class="row items-container bottom-wrapper">
                        <!-- Modal -->
                        <div class="modal fade" id="shop-modal" tabindex="-1" role="dialog"  aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                                    </div>
                                    <div class="modal-body clearfix" id="modalBody">
                                        <img src="" id="showcase-img" class="img-thumbnail" alt="Image Pet"/>
                                        <div class="detail-info-pet" ></div>

                                        <div class="price" id="modal-price-tag"></div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn hidden btn-nft-id"></button>
                                        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide">
                                            <span class="button-game-bg-left"></span>
                                            <span id="detail-btn-buy" class="button-game-bg-mid ">
                                              <span>Buy Now</span>
                                            </span>
                                            <span id="detail-btn-cancel-market" class="button-game-bg-mid ">
                                              <span>Cancel</span>
                                            </span>
                                            <span class="button-game-bg-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="image-load row items-container bottom-wrapper" style=""></div>


                    <!-- Paginator -->
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
<script type="text/javascript" src="js/marketplace.js?t=<?php echo  time();?>"></script>
