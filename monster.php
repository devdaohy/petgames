<?php ?>
<?php  include "header.php"?>
<link href="css/monster.css?t=<?php echo  time();?>" rel="stylesheet" />

<!-- ============== STORE SECTION =============== -->
<div class="container" style="padding: 2px 0px;margin-top: 5px;background: url(img/creampaper.png) !important;">
    <div class="row" style="margin: 4px">
        <div style="text-align: center;">
            <div style="font-size:20px;width: fit-content;padding: 0px 18px;display:inline-block;border-radius: 13px;margin: auto;">
                <label class="time_claim"></label>
                <label style="border-left: 2px solid black; padding-left: 4px" class="money_claim">&nbsp;</label>
                <label><img src="img/logo.png" style="width:25px"></label>


                <a class="btn-claim-group btn-claim" style="padding:0px 50px;text-decoration: none;font-size: 20px;margin-right: 6px;">
                    Claim
                </a>

            </div>
            <br>
            <div style="font-size:20px;width: fit-content;padding: 0px 18px;display:inline-block;border-radius: 13px;margin: auto;">
                <label>Price egg: 20000 PETG</label>

                <a class="btn-claim-group btn-buyboxwithreward" style="background-size:95% !important;padding:2px 34px;text-decoration: none;font-size: 18px;margin-right: 6px;">
                    🥚&nbsp;Buy&nbsp;eggs
                </a>
            </div>
            <br>
            <div>
                <p class='error-price-syntax' style='margin-bottom: 0px;color: red;font-size: 70%;display: none'>Please enter only number</p>
                <p class='error-0-claim' style='margin-bottom: 0px;color: red;font-size: 70%;display: none'>Please enter a number greater than 0</p>

            </div>
            <div style="font-size:20px;width: fit-content;padding: 0px 18px;display:inline-block;border-radius: 13px;margin: auto;">
                <label >Boot&nbsp;lv: </label>
                <select id="mySelectLevel" disabled style="font-size: 19px;width: 120px;border-radius: 15px">
                    <option value="1">Level 1</option>
                </select>
                <a class="btn-claim-group btn-update-super-mode" style="padding:2px 18px;text-decoration: none;font-size: 18px;margin-right: 6px;">
                    Update&nbsp;boot&nbsp;lv
                </a>
<!--                <label style="border-left: 2px solid black; padding-left: 4px">Bonus: </label>-->
<!--                <label class="bonus"></label>-->
            </div>
        </div>

    </div>
</div>
<div class="container" style="margin-top: 0px " >

<div class="row" id="play" >
    <h2 style="margin-bottom: 0px">MONSTER V4</h2>

</div>
    <div class="row items-container bottom-wrapper">
        <!-- Modal -->
        <div class="modal fade modalpet" id="shop-modal-win" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel" >WIN</h4>
                    </div>
                    <div class="modal-body clearfix" id="modalBody">
                        <img src="img/other/win.png" style="background: #008000bd" id="showcase-img" class="img-thumbnail showcase-img" alt="Image Pet"/>
                        <div class="detail-info-pet" >
                        </div>
                        <div class="div-info-sell-tranfer">
                        </div>
                    </div>
                    <div class="modal-footer" style="border-top: 0px">
                        <a  xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide" >
                            <span class="button-game-bg-left"></span>
                            <span class="button-game-bg-mid">
                                          <span>OK</span>
                                        </span>
                            <span class="button-game-bg-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade modalpet" id="shop-modal-lose" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel"> LOSE</h4>
                    </div>
                    <div class="modal-body clearfix" id="modalBody">
                        <img src="img/other/lose.png" style="background: #ff0000d6" id="showcase-img" class="img-thumbnail showcase-img" alt="Image Pet"/>
                        <div class="detail-info-pet" >
                        </div>
                        <div class="div-info-sell-tranfer">
                        </div>
                    </div>
                    <div class="modal-footer" style="border-top: 0px">
                        <a  xmlns="http://www.w3.org/1999/xhtml" class="button-game shop-modal-hide" >
                            <span class="button-game-bg-left"></span>
                            <span class="button-game-bg-mid">
                                          <span>OK</span>
                                        </span>
                            <span class="button-game-bg-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade modalpet" id="shop-modal-fight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div>
                        <img src="img/other/gifFighting2.gif" style="width: 46%;background: #66c6e0;border-radius: 25px;box-shadow: none" id="showcase-img" class="img-thumbnail showcase-img" alt="Image Fight"/>
                </div>
            </div>
        </div>

    </div>

    <div class="row items-container" >
    <div class="col-xs-6 col-sm-4 gallery-item item1-1" style="box-shadow: none;background: none;margin-top: 0px;">
        <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel" data-interval="false">

           
            <div class="carousel-inner" role="listbox">

            </div>
            <a class="carousel-control-prev" style="display:none" href="#multi-item-example" role="button" data-slide="prev" >
                <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" style="display:none" href="#multi-item-example" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>

<div class="row items-container">

    <div id="item-1" class="col-xs-5 col-sm-3 gallery-item item-1 thumbnail-50 background-config" style="background-image: url(img/monster/monster.png); " data-toggle="modal" data-target="#shop-modal">

        <img src="img/monster/m1.png" class="image-egg-magic" alt="Avatar Pet" width="400" height="750" />
         <div class="panel-item__text">
            <h4 class="panel-item__title">Aguila</h4>

           <table class="info-monster">
                <tbody>
                <tr>
                    <td>Level</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Win Rate</td>
                    <td>80%</td>
                </tr>
                <tr>
                    <td>Reward</td>
                    <td></td>
                </tr>
                <tr>
                    <td>EXP</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>


        <a id="btn-fight-1" xmlns="http://www.w3.org/1999/xhtml" class="button-game disable-click">
            <span class="button-game-bg-left-buy"></span>
            <span class="button-game-bg-mid">
                                <span  style="font-size: 20px">Fight</span>
                            </span>
            <span class="button-game-bg-right-buy"></span>
        </a>
    </div>
    <div id="item-2" class="col-xs-5  col-sm-3 col-sm-offset-1  gallery-item item-2 thumbnail-50 background-config" style="background-image: url(img/monster/monster.png);" data-toggle="modal" data-target="#shop-modal">

        <img src="img/monster/m2.png" class="image-egg-magic" alt="Avatar Pet" width="440" height="750"  />
        <div class="panel-item__text">
            <h4 class="panel-item__title">Akkuman</h4>
           <table class="info-monster">
                <tbody>
                <tr>
                    <td>Level</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Win Rate</td>
                    <td>70%</td>
                </tr>
                <tr>
                    <td>Reward</td>
                    <td></td>
                </tr>
                <tr>
                    <td>EXP</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

        </div>
        <a id="btn-fight-2" xmlns="http://www.w3.org/1999/xhtml" class="button-game disable-click">
            <span class="button-game-bg-left-buy"></span>
            <span class="button-game-bg-mid">
                                <span  style="font-size: 20px">Fight</span>
                              </span>
            <span class="button-game-bg-right-buy"></span>
        </a>
    </div>
    <div id="item-3" class="col-xs-5 col-sm-3 col-sm-offset-1 gallery-item item-3 thumbnail-50 background-config" style=" background-image: url(img/monster/monster.png);" data-toggle="modal" data-target="#shop-modal">

        <img src="img/monster/m3.png" class="image-egg-magic" alt="Avatar Pet" width="440" height="750"/>
          <div class="panel-item__text">
            <h4 class="panel-item__title">Tauron</h4>
           <table class="info-monster">
                <tbody>
                <tr>
                    <td>Level</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Win Rate</td>
                    <td>60% </td>
                </tr>
                <tr>
                    <td>Reward</td>
                    <td></td>
                </tr>
                <tr>
                    <td>EXP</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

        </div>
        <a id="btn-fight-3" xmlns="http://www.w3.org/1999/xhtml" class="button-game disable-click">
            <span class="button-game-bg-left-buy"></span>
            <span class="button-game-bg-mid">
                                <span  style="font-size: 20px">Fight</span>
                              </span>
            <span class="button-game-bg-right-buy"></span>
        </a>
    </div>
    <div id="item-4" class="col-xs-5 col-sm-3  col-sm-offset-1 gallery-item  item-4  thumbnail-50 background-config" style=" background-image: url(img/monster/monster.png);" data-toggle="modal" data-target="#shop-modal">

        <img src="img/monster/m4.png" class="image-egg-magic" alt="Avatar Pet" width="440" height="750"/>
        <div class="panel-item__text">
            <h4 class="panel-item__title">Drum</h4>
           <table class="info-monster">
                <tbody>
                <tr>
                    <td>Level</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Win Rate</td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td>Reward</td>
                    <td></td>
                </tr>
                <tr>
                    <td>EXP</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

        </div>
        <a id="btn-fight-4" xmlns="http://www.w3.org/1999/xhtml" class="button-game disable-click">
            <span class="button-game-bg-left-buy"></span>
            <span class="button-game-bg-mid">
                    <span  style="font-size: 20px">Fight</span>
                  </span>
            <span class="button-game-bg-right-buy"></span>
        </a>
    </div>
</div>
</section>
</div>

<?php  include "footer.php"?>
<script>
        $(document).ready(function (){

            $('#multi-item-example').on('slide.bs.carousel', function () {
        $(".carousel").carousel('pause')
            })
        });
        var page =1;

</script>
<script type="text/javascript" src="js/loadpet.js?t=<?php echo  time();?>" ></script>
<script src="js/monster.js?t=<?php echo  time();?>"></script>

