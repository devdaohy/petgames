function petName(scarce,active,tribe){
    if(active ==true) {
        if (scarce == 1) return "Sagittarius";
        else if (scarce == 2) return "Rabbit Ninja";
        else if (scarce == 3) return "Druid";
        else if (scarce == 4) return "Lucy Cat";
        else if (scarce == 5) return "Pig hunter";
        else if (scarce == 6) return "Robo X";
        else if (scarce == 7) return "Ghost Knight";
        else if (scarce == 8) return "Super Knight";
    }else{
        return tribename(tribe) +" "+petOrEgg(active);
    }
}

function levelimage(exp)
{
    if(exp < 300) return 1;
    else if(exp >=300 && exp <1800) return 2;
    else return 3;
}

function tribename(tribe)
{
    if(tribe == 1) return "Water";
    else if(tribe == 2) return "Fire";
    else if(tribe == 3) return "Wood";
    else if(tribe == 4) return "Metal";
    else if(tribe == 5) return "Earth";
    else if(tribe == 6) return "All";
}

function positionClass(i)
{
    var width = $(window).width();
    if (width >= 600 && width <= 1024) {

        if(i ==1) return "col-sm-5 col-xs-5 gallery-item item-1 thumbnail-50 background-config";
        else if(i ==2) return "col-sm-5 col-xs-5 col-xs-offset-1 col-sm-offset-1 gallery-item item-2 thumbnail-50 background-config";
        else if(i ==3) return "col-sm-5 col-xs-5  gallery-item item-3 thumbnail-50 background-config";
        else if(i ==4) return "col-sm-5 col-xs-5 col-xs-offset-1 col-sm-offset-1 gallery-item item-4 humbnail-50 background-config";


    } else if(width >= 10 && width <= 599){


        if(i ==1) return "col-sm-3 col-xs-12 gallery-item item-1 thumbnail-50 background-config";
        else if(i ==2) return "col-sm-3 col-xs-12 col-sm-offset-1 gallery-item item-2 thumbnail-50 background-config";
        else if(i ==3) return "col-sm-3 col-xs-12 col-sm-offset-1 gallery-item item-3 thumbnail-50 background-config";
        else if(i ==4) return "col-sm-3 col-xs-12 col-sm-offset-1 gallery-item item-4 humbnail-50 background-config";

    }
    else{
        if(i ==1) return "col-sm-3 col-xs-5 gallery-item item-1 thumbnail-50 background-config";
        else if(i ==2) return "col-sm-3 col-xs-5 col-sm-offset-1 gallery-item item-2 thumbnail-50 background-config";
        else if(i ==3) return "col-sm-3 col-xs-5 col-sm-offset-1 gallery-item item-3 thumbnail-50 background-config";
        else if(i ==4) return "col-sm-3 col-xs-5 col-sm-offset-1 gallery-item item-4 humbnail-50 background-config";
    }
}

function level(exp){
    if(exp < 100) return 1;
    if(exp < 300) return 2;
    if(exp < 900) return 3;
    if(exp < 1800) return 4;
    if(exp < 3600) return 5;
    if(exp < 7200) return 6;
    if(exp < 12000) return 7;

    return 8;
}

function imagePetOrEgg(tribe,scarce,exp,active) {
    if(active == true)
    {
        if(scarce == 7 || scarce == 8)
        {
            return  "img/ASSET/scarce-"+ scarce +"/a"+ scarce + "-"+ levelimage(exp) +".png";
        }else{
            return  "img/ASSET/scarce-"+ scarce +"/a"+ tribe + "-"+ levelimage(exp) +".png";
        }
    }
    else{
        if(scarce == 7 || scarce == 8)
        {
            return "img/egg/0-egg.png";

        }else{
            return "img/egg/"+tribe+"-egg.png";

        }
    }

}

$(".current-page").text(page >=1 ? page: "1");
$(".next-btn").on("click",function () {
    page=Number(page)+1;
    if(page > Number($(".total-page").text()))
    {
        page = page -1;
    }
    var url=new URLSearchParams(window.location.search);
    if(url.has("page"))
    {
        url.set("page",page);
    }else{
        url.append("page",page);
    }

    document.location = "?"+url.toString();

});
$(".prev-btn").on("click",function () {
    page=Number(page)-1;
    if(page == 0 )
    {
        page = page + 1;
    }
    var url=new URLSearchParams(window.location.search);
    if(url.has("page"))
    {
        url.set("page",page);
    }else{
        url.append("page",page);
    }

    document.location = "?"+url.toString();

});