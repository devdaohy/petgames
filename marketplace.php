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
                                    <a href="marketplace.php"><button class="scarce-all">
                                            <i class="bx bxl-sketch"></i>All Scarce
                                        </button></a>
                                </li>
                                <li>
                                    <a href="marketplace.php?scarce=1"><button class="scarce-1">
                                        <i class="bx bxl-sketch"></i>Scarce 1
                                    </button></a>
                                </li>
                                <li>
                                    <a href="marketplace.php?scarce=2"><button class="scarce-2">
                                        <i class="bx bxl-sketch"></i>Scarce 2
                                    </button></a>
                                </li>
                                <li>
                                    <a href="marketplace.php?scarce=3"><button class="scarce-3">
                                        <i class="bx bxl-sketch"></i> Scarce 3
                                        </button></a>
                                </li>
                                <li>
                                    <a href="marketplace.php?scarce=4"><button class="scarce-4">
                                        <i class="bx bxl-sketch"></i>Scarce 4
                                        </button></a>
                                </li>
                                <li>
                                    <a href="marketplace.php?scarce=5"><button class="scarce-5">
                                        <i class="bx bxl-sketch"></i>Scarce 5
                                        </button></a>
                                </li>
                                <li>
                                    <a href="marketplace.php?scarce=6"><button class="scarce-6">
                                        <i class="bx bxl-sketch"></i>Scarce 6
                                        </button></a>
                                </li>
                                <li>
                                    <a href="marketplace.php?scarce=7"><button class="scarce-7">
                                        <i class="bx bxl-sketch"></i>Scarce 7
                                        </button></a>
                                </li>
                                <li>
                                    <a href="marketplace.php?scarce=8"><button class="scarce-8">
                                        <i class="bx bxl-sketch"></i>Scarce 8
                                        </button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row items-container bottom-wrapper">
                        <!-- Modal -->
                        <div class="modal fade" id="shop-modal" tabindex="-1" role="dialog"  aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header pattern">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                                    </div>
                                    <div class="modal-body pattern clearfix" id="modalBody">
                                        <img src="" id="showcase-img" class="img-thumbnail" alt="Showcase Sweet World Game"/>
                                        <div class="detail-info-pet" ></div>

                                        <div class="price" id="modal-price-tag"></div>
                                    </div>
                                    <div class="modal-footer pattern">
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
<script type="text/javascript" src="js/loadpet.js" ></script>
<script type="text/javascript" src="js/marketplace.js"></script>
