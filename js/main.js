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

//点击购物车下拉
    $(".shoppingDropD").mouseover(function(){
        $(this).find(".dropdown-menu").show();
    }).mouseout(function(){
        $(this).find(".dropdown-menu").hide();
    });
    $(".dropdown-menu").mouseover(function(){
        $(this).show();
    }).mouseout(function(){
        $(this).hide();
    });

    
    //计算总价与小计
    function prodC() {
        var $tr = $(".dropMenu-content").find("li");
        var summer = 0;
        $tr.each(function(i, dom) {
            //console.log(dom);
            var num = $(dom).find(".input-group-add span").text(); //商品数量
            //console.log(num);
            var jiage= $(dom).find(".priceAndNumber h3").text();
            var price = num *jiage; //商品小计
            $(dom).find(".cartCount span").html(price); //显示商品小计
            summer += price; //总价
        });
        $(".cartCount span").text(summer);
    }
    prodC(); //页面加载完成后运行
    //商品增加减少 ，flag 为true时增加 flag为false时减少
    function changN(dom, flag) {
        //value = Number(value)
        var $value=$(dom).siblings(".number");
        var value = $value.text();
        //console.log(value)
        if(flag) {
            value++;
        } else {
            value--;
            if(value < 0) {
                value = 0;
                alert("宝贝数量不能为负值")
            }
        }
        $value.html(value);
        prodC();
    };
    //点击增加
    $(".input-group-add .add1").click(function() {
        changN(this, true);
    });
    //点击减少
    $(".input-group-add .jianshao").click(function() {
        changN(this, false);
    });

    //点击删除
    $(".closeBtn").click(function() {
        //$(this).parent().prev().remove(); //删除前一tr
        alert("你確定要將此產品從購物車中刪除嗎?")
        $(this).parent().remove(); //删除当前tr
        prodC();
    });


});
