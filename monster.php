<?php ?>
<?php  include "header.php"?>
<link href="css/monster.css" rel="stylesheet" />
<link href="css/mypet.css" rel="stylesheet" />

<!-- ============== STORE SECTION =============== -->


<div class="row" id="play">
    <h2 style="margin-bottom: 0px">MONSTER</h2>

</div>
<div class="row items-container">
    <div class="col-xs-6 col-sm-4 gallery-item item1-1" style="box-shadow: none;background: none">
        <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel" data-interval="false">
            <div class="controls-top">
                <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
                <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
                            class="fas fa-chevron-right"></i></a>
            </div>
            <div class="carousel-inner" role="listbox">
            </div>
        </div>
    </div>
</div>

<div class="row items-container">

    <div id="item-1" class="col-xs-5 col-sm-3 gallery-item item-1 thumbnail-50 background-config" style="background-image: url(img/monster/monster.png); " data-toggle="modal" data-target="#shop-modal">

        <img src="img/monster/m1.png" class="image-egg-magic" alt="Avatar Pet" width="400" height="750" />
         <div class="panel-item__text">
            <h4 class="panel-item__title">Water Egg</h4>

           <table class="info-monster">
                <tbody>
                <tr>
                    <td>Level</td>
                    <td>111111111</td>
                </tr>
                <tr>
                    <td>Win Rate</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Reward Estimated</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>EXP Estimated</td>
                    <td>1</td>
                </tr>
                </tbody>
            </table>
        </div>


        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
            <span class="button-game-bg-left-buy"></span>
            <span class="button-game-bg-mid">
                                <span id="egg-water" style="font-size: 20px">Buy</span>
                            </span>
            <span class="button-game-bg-right-buy"></span>
        </a>
    </div>
    <div id="item-2" class="col-xs-5 col-xs-offset-2 col-sm-3 col-sm-offset-1  gallery-item item-2 thumbnail-50 background-config" style="background-image: url(img/monster/monster.png);" data-toggle="modal" data-target="#shop-modal">

        <img src="img/monster/m2.png" class="image-egg-magic" alt="Avatar Pet" width="440" height="750"  />
        <div class="panel-item__text">
            <h4 class="panel-item__title">Fire Egg</h4>
           <table class="info-monster">
                <tbody>
                <tr>
                    <td>Level</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Win Rate</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Reward Estimated</td>
                    <td></td>
                </tr>
                <tr>
                    <td>EXP Estimated</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

        </div>
        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
            <span class="button-game-bg-left-buy"></span>
            <span class="button-game-bg-mid">
                                <span id="egg-fire" style="font-size: 20px">Buy</span>
                              </span>
            <span class="button-game-bg-right-buy"></span>
        </a>
    </div>
    <div id="item-3" class="col-xs-5 col-sm-3 col-sm-offset-1 gallery-item item-3 thumbnail-50 background-config" style=" background-image: url(img/monster/monster.png);" data-toggle="modal" data-target="#shop-modal">

        <img src="img/monster/m3.png" class="image-egg-magic" alt="Avatar Pet" width="440" height="750"/>
          <div class="panel-item__text">
            <h4 class="panel-item__title">Wood Egg</h4>
           <table class="info-monster">
                <tbody>
                <tr>
                    <td>Level</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Win Rate</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Reward Estimated</td>
                    <td></td>
                </tr>
                <tr>
                    <td>EXP Estimated</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

        </div>
        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
            <span class="button-game-bg-left-buy"></span>
            <span class="button-game-bg-mid">
                                <span id="egg-wood" style="font-size: 20px">Buy</span>
                              </span>
            <span class="button-game-bg-right-buy"></span>
        </a>
    </div>
    <div id="item-4" class="col-xs-5 col-sm-3 col-xs-offset-2 col-sm-offset-1 gallery-item  item-4  thumbnail-50 background-config" style=" background-image: url(img/monster/monster.png);" data-toggle="modal" data-target="#shop-modal">

        <img src="img/monster/m4.png" class="image-egg-magic" alt="Avatar Pet" width="440" height="750"/>
        <div class="panel-item__text">
            <h4 class="panel-item__title">Metal Egg</h4>
           <table class="info-monster">
                <tbody>
                <tr>
                    <td>Level</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Win Rate</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Reward Estimated</td>
                    <td></td>
                </tr>
                <tr>
                    <td>EXP Estimated</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

        </div>
        <a xmlns="http://www.w3.org/1999/xhtml" class="button-game">
            <span class="button-game-bg-left-buy"></span>
            <span class="button-game-bg-mid">
                    <span id="egg-metal" style="font-size: 20px">Buy</span>
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
<script src="js/monster.js"></script>

