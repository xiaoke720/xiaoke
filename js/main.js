/**
 * Created by Administrator on 2019/9/26 0026.
 */
$(document).ready(function() {

    $('.g-appearance').click(function(){
        $(this).toggleClass('active');
    })

    $(".g-btn").children(".fa-chevron-up").hide();
    $('.g-btn').click(function(ev){
        $(this).children(".fa").toggleClass('active');
    })

    $(".shoppingBtn").mouseover(function(){
        //alert("ok");
        $(this).children("img").attr("src","images/whiteShoppine.png");
    }).mouseout(function(){
        //alert("ok");
        $(this).children("img").attr("src","images/blackShopping.png");
    });

    var index=0;
    $('#allUD').click(function(){
        index++;
        if(index%2 == 0){
            //alert(index);
            $(this).children(".arrowIconT").attr("class","fa fa-chevron-down pull-right arrowIcon g-color-gray-dark-eoeoeo arrowIconT");
        }else{
            //alert(index);
            $(this).children(".arrowIconT").attr("class","fa fa-chevron-up pull-right arrowIcon g-color-gray-dark-eoeoeo arrowIconT");
        }
    })

});
