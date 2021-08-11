<?php ?>
<?php  include "header.php"?>
    <!-- ============== STORE SECTION =============== -->
    <div class="row pattern">
        <section class="store" id="store">
            <div class="container">
                <div class="row" id="play">
                    <h2>MAGIC EGG</h2>
                    <h4 style="text-align: center;font-size:25px" id = "my-balance"> Balance: 100000 <img src="img/logo.png" style="width:35px"/></h4>
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
                <div class="row items-container">
                    <div
                            id="item-1"
                            class="col-xs-5 col-sm-3 gallery-item item-1 thumbnail-50 background-config"
                            style="background-image: url(img/khung-water.png); "
                            data-toggle="modal"
                            data-target="#shop-modal"
                    >
                        <button style="background-color: #9e7293" class="pet-no">
                            #0000001
                        </button>
                        <img
                                src="img/egg_water.png"
                                alt="Avatar Pet"
                                width="400"
                                height="750"
                                style="margin-bottom: 90px"
                        />
                        <span d="item-price-caption" class="item-price-caption hidden-xs" >Pay as you go</span>
                        <span id="item-name-caption" class="item-name-caption hidden-xs">Online - Magic box</span>
                        <div class="panel-item__text">
                            <h4 class="panel-item__title">Water Pet</h4>

                            <p style="text-align: center"> <img src="img/logo.png" class="imagemoney"/></img>10000</p>
                        </div>
                        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
                            <span class="button-game-bg-left-buy"></span>
                            <span class="button-game-bg-mid">
                    <span style="font-size: 20px">Buy</span>
                  </span>
                            <span class="button-game-bg-right-buy"></span>
                        </a>
                    </div>
                    <div id="item-2" class="col-xs-5 col-xs-offset-2 col-sm-3 col-sm-offset-1  gallery-item item-2 thumbnail-50 background-config"
                            style="background-image: url(img/khung-fire.jpg);"
                            data-toggle="modal"
                            data-target="#shop-modal">
                        <button style="background-color: #9e7293" class="pet-no">
                            #1
                        </button>
                        <img
                                src="img/egg_fire.png"
                                alt="Avatar Pet"
                                width="440"
                                height="750"
                                style="margin-bottom: 90px"
                        />
                        <span id="item-price-caption" class="item-price-caption hidden-xs">$ 4.99</span>
                        <span id="item-name-caption" class="item-name-caption hidden-xs">AppStore - iOS Version</span>
                        <div class="panel-item__text">
                            <h4 class="panel-item__title">Fire Pet</h4>
                             <p style="text-align: center"> <img src="img/logo.png" class="imagemoney"/></img>10000</p>
                        </div>
                        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
                            <span class="button-game-bg-left-buy"></span>
                            <span class="button-game-bg-mid">
                    <span style="font-size: 20px">Buy</span>
                  </span>
                            <span class="button-game-bg-right-buy"></span>
                        </a>
                    </div>
                    <div id="item-3" class="col-xs-5 col-sm-3 col-sm-offset-1 gallery-item item-3 thumbnail-50 background-config"
                         style=" background-image: url(img/khung-wood.jpg);" data-toggle="modal" data-target="#shop-modal">
                        <button style="background-color: #9e7293" class="pet-no">
                            #0000003
                        </button>
                        <img
                                src="img/egg_wood.png"
                                alt="Avatar Pet"
                                width="440"
                                height="750"
                                style="margin-bottom: 90px"/>
                        <span id="item-price-caption" class="item-price-caption hidden-xs">$ 4.49</span>
                        <span id="item-name-caption" class="item-name-caption hidden-xs">Play Store - Android Version</span>
                        <div class="panel-item__text">
                            <h4 class="panel-item__title">Wood Pet</h4>
                            <p style="text-align: center"> <img src="img/logo.png" class="imagemoney"/></img>10000</p>
                        </div>
                        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
                            <span class="button-game-bg-left-buy"></span>
                            <span class="button-game-bg-mid">
                    <span style="font-size: 20px">Buy</span>
                  </span>
                            <span class="button-game-bg-right-buy"></span>
                        </a>
                    </div>
                    <div id="item-4" class="col-xs-5 col-sm-3 col-sm-offset-1 gallery-item  item-4  thumbnail-50 background-config"
                  style=" background-image: url(img/khung-mental.jpg);"
                         data-toggle="modal" data-target="#shop-modal">
                        <button style="background-color: #9e7293" class="pet-no">
                            #0000004
                        </button>
                        <img
                                src="img/egg_metal.png"
                                alt="Avatar Pet"
                                width="440"
                                height="750"
                                style="margin-bottom: 90px"/>
                        <span
                                id="item-price-caption" class="item-price-caption hidden-xs">$ 5.99</span>
                        <span id="item-name-caption" class="item-name-caption hidden-xs">Steam - PC & Mac Version</span>
                        <div class="panel-item__text">
                            <h4 class="panel-item__title">Matel Pet</h4>
                             <p style="text-align: center"> <img src="img/logo.png" class="imagemoney"/></img>10000</p>
                        </div>
                        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
                            <span class="button-game-bg-left-buy"></span>
                            <span class="button-game-bg-mid">
                    <span style="font-size: 20px">Buy</span>
                  </span>
                            <span class="button-game-bg-right-buy"></span>
                        </a>
                    </div>
                </div>
                <div class="row items-container">
                    <div
                            id="item-5"
                            class="col-xs-5 col-sm-3 gallery-item item-5 thumbnail-50 background-config"
                            style="
                  background-image: url(img/khung-earth.jpg);

                " data-toggle="modal" data-target="#shop-modal">
                        <button style="background-color: #b68c78" class="pet-no">
                            #0000005
                        </button>
                        <img
                                src="img/egg_earth.png"
                                alt="Avatar Pet"
                                width="440"
                                height="750"
                                style="margin-bottom: 90px"
                        />
                        <span id="item-price-caption" class="item-price-caption hidden-xs">$ 13.75</span>
                        <span id="item-name-caption" class="item-name-caption hidden-xs">Online - Facebook Version</span>
                        <div class="panel-item__text">
                            <h4 class="panel-item__title">Earth Pet</h4>
                            <p style="text-align: center"> <img src="img/logo.png" class="imagemoney"/></img>10000</p>
                        </div>
                        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
                            <span class="button-game-bg-left-buy"></span>
                            <span class="button-game-bg-mid">
                    <span style="font-size: 20px">Buy</span>
                  </span>
                            <span class="button-game-bg-right-buy"></span>
                        </a>
                    </div>
                    <div id="item-6" class="
                          col-xs-5 col-xs-offset-2 col-sm-3 col-sm-offset-1
                          gallery-item
                          item-6
                         thumbnail-50
                         background-config
                       "
                            style="
                  background-image: url(img/khung2.png);
                " data-toggle="modal" data-target="#shop-modal">
                        <button style="background-color: #b68c78" class="pet-no">
                            #0000006
                        </button>
                        <img
                                src="img/egg_random.png"
                                alt="Avatar Pet"
                                width="440"
                                height="750"
                                style="margin-bottom: 90px"/>
                        <span id="item-price-caption" class="item-price-caption hidden-xs">$ 14.99</span>
                        <span id="item-name-caption" class="item-name-caption hidden-xs">AppStore - iOS Version</span>
                        <div class="panel-item__text">
                            <h4 class="panel-item__title">Random Pet</h4>
                            <p style="text-align: center"> <img src="img/logo.png" class="imagemoney"/></img>10000</p>
                        </div>
                        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
                            <span class="button-game-bg-left-buy"></span>
                            <span class="button-game-bg-mid">
                    <span style="font-size: 20px">Buy</span>
                  </span>
                            <span class="button-game-bg-right-buy"></span>
                        </a>
                    </div>

            </div>
        </section>
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
    <button id="demo">DEMO</button>

    <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-message-box@3.2.2/dist/messagebox.min.js"></script>
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <script>
        $.MessageBox("A plain MessageBox can replace Javascript's window.alert(), and it looks definitely better...");

    </script>
    <script src="js/magicegg.js"></script>

<?php  include "footer.php"?>