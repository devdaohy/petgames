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
                <label style="border-left: 2px solid black; padding-left: 4px">Fee :</label>
                <label class="fee"> </label>

                <input type="text" style="padding-left:5px;width: 66px;border-bottom-left-radius:10px;border-top-left-radius: 10px " class="current-reward" value="" onkeyup="this.style.width = (35+(this.value.length + 1) * 10) + 'px';">
                <button class="btn-max-reward-claim" style="margin-left: -6px;font-size: 18px;height: 34px;border: 2px solid black;border-left: 0px;border-top-right-radius: 10px;border-bottom-right-radius: 10px">MAX</button>

                <a class="btn-claim-group btn-claim disable-click-claim" disabled="true" style="padding:0px 50px;text-decoration: none;font-size: 20px;margin-right: 6px;">
                    Claim
                </a>

            </div>
            <br>
            <div style="font-size:20px;width: fit-content;padding: 0px 18px;display:inline-block;border-radius: 13px;margin: auto;">
                <label>Price egg: 20000 PETG</label>

                <a class="btn-claim-group btn-buyboxwithreward disable-click-claim" disabled="true"  style="background-size:95% !important;padding:2px 34px;text-decoration: none;font-size: 18px;margin-right: 6px;">
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
                <a class="btn-claim-group btn-update-super-mode disable-click-claim" disabled="true" style="padding:2px 18px;text-decoration: none;font-size: 18px;margin-right: 6px;">
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
<script src="js/v4monster.js?t=<?php echo  time();?>"></script>

