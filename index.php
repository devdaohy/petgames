<?php ?>
    <?php  include "header.php"?>
<link href="css/marketplace.css" rel="stylesheet" />
        <!-- ============== STORE SECTION =============== -->
        <div class="row pattern">
            <section class="store" id="store">
                <div class="container">
                    <div class="row" id="play">
                        <h2>MARKETPLACE</h2>
                      <div>
                          <p style="text-align: center;font-size:25px" id="my-balance">  </p>

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
                                        <ul id="model-feats">
                                            <li>Colour: Naturale</li>
                                            <li>Weight: 2.23kg</li>
                                            <li>Top: Mahogany, High-Gloss</li>
                                            <li>Strings: 6 - Nylon</li>
                                            <li>Frets: 20Nut</li>
                                        </ul>
                                        <div class="clearfix"></div>
                                        <div class="price" id="modal-price-tag">price here</div>
                                    </div>
                                    <div class="modal-footer pattern">
                                        <!--<button type="button" class="btn">Order now</button>-->
                                        <a
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                class="button-game shop-modal-hide"
                                                href="#store"
                                        >
                                            <span class="button-game-bg-left"></span>
                                            <span class="button-game-bg-mid">
                          <span>Buy Now</span>
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
<script type="text/javascript" src="js/index.js"></script>
