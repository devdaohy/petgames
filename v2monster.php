<?php ?>
<?php  include "header.php"?>
<link href="css/monster.css?t=<?php echo  time();?>" rel="stylesheet" />

<!-- ============== STORE SECTION =============== -->
<div class="container" style="padding: 2px 0px;margin-top: 5px">
    <div class="row" style="margin: 4px">
        <div style="text-align: center;">
            <div style="font-size:28px;width: fit-content;padding: 0px 18px;display:inline-block;border-radius: 13px;margin: auto;">
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
        <h2 style="margin-bottom: 0px">MONSTER V2</h2>

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

