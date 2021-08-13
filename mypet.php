<?php ?>
<?php  include "header.php"?>
    <link href="css/marketplace.css" rel="stylesheet" />
    <link href="css/mypet.css" rel="stylesheet" />
    <!-- ============== STORE SECTION =============== -->
    <div class="row pattern">
        <section class="store" id="store">
            <div class="container">
                <div class="row" id="play">
                    <h2>MYPET</h2>
                    <div>
                        <p style="text-align: center;font-size:25px" id="my-balance">  <img src="img/logo.png" style="width:35px;margin-left: 10px"/></p>
                    </div>
                    <div class="list-scarces">
                        <ul class="scarces">
                            <li>
                                <a><button class="scarce-1">
                                        <i class="bx bxl-sketch"></i>Scarce 1
                                    </button></a>
                            </li>
                            <li>
                                <a><button class="scarce-2">
                                        <i class="bx bxl-sketch"></i>Scarce 2
                                    </button></a>
                            </li>
                            <li>
                                <a><button class="scarce-3">
                                        <i class="bx bxl-sketch"></i>Scarce 3
                                    </button></a>
                            </li>
                            <li>
                                <a><button class="scarce-4">
                                        <i class="bx bxl-sketch"></i>Scarce 4
                                    </button></a>
                            </li>
                            <li>
                                <a><button class="scarce-5">
                                        <i class="bx bxl-sketch"></i>Scarce 5
                                    </button></a>
                            </li>
                            <li>
                                <a><button class="scarce-6">
                                        <i class="bx bxl-sketch"></i>Scarce 6
                                    </button></a>
                            </li>
                            <li>
                                <a><button class="scarce-7">
                                        <i class="bx bxl-sketch"></i>Scarce 7
                                    </button></a>
                            </li>
                            <li>
                                <a><button class="scarce-8">
                                        <i class="bx bxl-sketch"></i>Scarce 8
                                    </button></a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="row items-container bottom-wrapper">
                    <!-- Modal -->
                    <div
                        class="modal fade"
                        id="shop-modal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="myModalLabel"
                    >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header pattern">
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                                </div>
                                <div class="modal-body pattern clearfix" id="modalBody">
                                    <img
                                        src=""
                                        id="showcase-img"
                                        class="img-thumbnail"
                                        alt="Showcase Sweet World Game"
                                    />

                                    <div class="clearfix"></div>
                                    <div class="div-amount">
                                        <form>
                                            <label>Price</label>
                                            <input type="number" class="amount" value="1" style="width: 21% !important;"/>
                                            <img src="img/logo.png" class="imagemoney" style="margin-bottom: 0px !important;background: none;width: 8% !important;    box-shadow: none;"/>
                                        </form>

                                    </div>
                                </div>
                                <div class="modal-footer pattern">
                                    <a type="button" id="btn-nft" style="display: none"></a>
                                    <a type="button" id="btn-nft-price" style="display: none"></a>
                                    <a id="detail-btn-crack" xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide" href="#store">
                                        <span class="button-game-bg-left"></span>
                                        <span class="button-game-bg-mid">
                                          <span>Crack</span>
                                        </span>
                                        <span class="button-game-bg-right"></span>
                                    </a>
                                    <a id="detail-btn-sell" xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide" href="#store">
                                        <span class="button-game-bg-left"></span>
                                        <span class="button-game-bg-mid">
                                          <span>Sell</span>
                                        </span>
                                        <span class="button-game-bg-right"></span>
                                    </a>
                                    <a id="detail-btn-transfer" xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide" href="#store">
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

                <!-- Paginator -->
                <div class="pickup-pagination">
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
<script src="js/mypet.js"></script>
