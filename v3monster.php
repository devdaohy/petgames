<?php ?>
<?php  include "header.php"?>
<link href="css/monster.css?t=<?php echo  time();?>" rel="stylesheet" />

<!-- ============== STORE SECTION =============== -->
<div class="container" style="padding: 2px 0px;margin-top: 5px">
    <div class="row" style="margin: 4px">
        <div style="text-align: center;">
            <div style="font-size:28px;width: fit-content;padding: 0px 18px;display:inline-block;border-radius: 13px;margin: auto;">
               <p>Every day Monsterv3 ( 01:00 UTC - 03:00 UTC) contract will get 5,000,000 PETG</p>

                <p>Please check the account of Monster V3 contract before claiming, if you are too late, please come back the next day</p>

                <p>Check Monster V3 pool at: <a href="https://bscscan.com/token/0x09607078980cbb0665aba9c6d1b84b8ead246aa0?a=0x499B088ae43D1FE02b0e5988081e973AEEEDA38C">here</a></p>
                <label>Countdown : </label>
                <label class="time_claim"></label>
                <label style="border-left: 2px solid black; padding-left: 4px" class="money_claim"></label>
                <label><img src="img/logo.png" style="width:25px"></label>
                <a class="btn-claim-group btn-claim" style="padding:0px 49px;text-decoration: none;font-size: 24px;margin-right: 6px;">
                    Claim
                </a>

                </a>
            </div>
        </div>

    </div>
</div>
<div class="container" style="margin-top: 0px " >


    <div class="row" id="play" >
        <h2 style="margin-bottom: 0px">MONSTER V3</h2>

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
<script src="js/v2monster.js?t=<?php echo  time();?>"></script>

