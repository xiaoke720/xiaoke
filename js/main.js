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
//    $(".shoppingDropD").mouseover(function(){
//        $(this).find(".dropdown-menu").show();
//    }).mouseout(function(){
//        $(this).find(".dropdown-menu").hide();
//    });
//    $(".dropdown-menu").mouseover(function(){
//        $(this).show();
//    }).mouseout(function(){
//        $(this).hide();
//    });


//    //计算总价与小计
//    function prodC() {
//        var $tr = $(".dropMenu-content").find("li");
//        var summer = 0;
//        $tr.each(function(i, dom) {
//            //console.log(dom);
//            var num = $(dom).find(".input-group-add span").text(); //商品数量
//            //console.log(num);
//            var jiage= $(dom).find(".priceAndNumber h3").text();
//            var price = num *jiage; //商品小计
//            $(dom).find(".cartCount span").html(price); //显示商品小计
//            summer += price; //总价
//        });
//        $(".cartCount span").text(summer);
//    }
//    prodC(); //页面加载完成后运行
//    //商品增加减少 ，flag 为true时增加 flag为false时减少
//    function changN(dom, flag) {
//        //value = Number(value)
//        var $value=$(dom).siblings(".number");
//        var value = $value.text();
//        //console.log(value)
//        if(flag) {
//            value++;
//        } else {
//            value--;
//            if(value < 0) {
//                value = 0;
//                alert("宝贝数量不能为负值")
//            }
//        }
//        $value.html(value);
//        prodC();
//    };
//    //点击增加
//    $(".input-group-add .add1").click(function() {
//        changN(this, true);
//    });
//    //点击减少
//    $(".input-group-add .jianshao").click(function() {
//        changN(this, false);
//    });
//
//    //点击删除
//    $(".closeBtn").click(function() {
//        //$(this).parent().prev().remove(); //删除前一tr
//        alert("你確定要將此產品從購物車中刪除嗎?")
//        $(this).parent().remove(); //删除当前tr
//        prodC();
//    });
//
//
//    /*详情页产品图*/
//    var oAdd = $('.input-number');//添加购物车按钮
//    var oPlus = $('.input-group-btn');//商品加
//    var oReduce = $('.input-group-addon');//商品减
//    // + 按钮点击事件
//    $(oPlus).each(function(index,value){
//        //JQ循环遍历每一个增加num的按钮
//        /**
//         * 当点击增加按钮的时候此按钮的上一级兄弟元素中的值加一
//         * JQ获取当前节点的上一个兄弟节点 节点.prev()
//         */
//        $(this).click(function(){//对每个按钮都进行增加的功能,无上限,当前this指向当前oPlus
//            var num = parseInt($(this).prev().html());//获取当前商品的num值,JQ获取当前元素的紧邻的前一个兄弟元素prev()
//            num ++;//每点击一次num + 1;
//            $(this).prev().html(num);//然后将改变过的num值重新更改到当前元素的前一个兄弟元素中(即num框中)
//        })
//    })
//
//// - 按钮点击事件
//    $(oReduce).each(function(index,value){
//        /**
//         * 当点击减少的按钮的时候,首先先判断一下他的后一个兄弟元素中的值是否已经为0了,若为0了就直接赋值为0,不能让其继续减少,如若大于0则每点击一次减一
//         * JQ获取当前元素的后一个兄弟元素 节点.next()
//         */
//        $(this).click(function(){
//            var num = parseInt($(this).next().html());
//            if(num === 0){
//                num = 0;
//                $(this).next().html(num);
//                alert("宝贝数量不能为空");
//            }
//            if(num > 0){
//                num --;
//                $(this).next().html(num);
//            }
//        })
//
//    })





    var btnCar = document.querySelectorAll('.shoppingBtn');
    //console.log(btnCar[0]);
    // 载入所有存储在localStorage的数据
    loadAll();
    for (let i = 0; i < btnCar.length; i++) {
        btnCar[i].onclick = function () {
            //console.log("ok");
            var productImg = document.getElementsByClassName('productImg')[i].src;
            console.log(productImg);
            var goods = document.getElementsByClassName('productName')[i].innerHTML;
            console.log(goods);
            var price = document.getElementsByClassName('productPrice')[i].innerHTML;
            console.log(price);
            localStorage.setItem('img',productImg);
            localStorage.setItem('price',price);
            localStorage.setItem('goods',goods);
            loadAll();
        }
    }

    function loadAll() {
        var list = document.getElementById("shoppingList");
        if (localStorage.length > 0) {
            //var result = "<table border='1'>";
            //result += "<tr><th>商品</th><th>价格</th><th>操作</th></tr>";
            for (var i = 0; i < localStorage.length; i++) {
                var price = localStorage.getItem("price");
                var goods = localStorage.getItem("goods");
                var productImg = localStorage.getItem('img');
                console.log(productImg)
                //result += "<tr><td>" + goods + "</td><t-d>" + price + "</td>" +
                //    "<td><a href='javascript:;' id='del'>X</a></td></tr>";
                result=
                    '<li>'+
                        '<button type="button" class="close closeBtn" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                        '<div class="clearfix"></div>'+
                        '<article class="clearfix miniCartInfo">'+
                            '<div class="miniCart-left"><img src="'+productImg+'" alt="" /></div>'+
                            '<div class="miniCart-right">' +
                                 '<h4 class="card-title g-font-family-Regular g-line-height-21"><a href="">'+goods+'</a></h4>'+
                                 '<div class="priceAndNumber g-mt-15">' +
                                     '<h3 class="g-font-size-18 g-font-family-bold pull-left">'+price+'</h3>'+
                                     '<div class="input-group-add pull-right text-center">'+
                                         '<a class="jianshao" href="javascript:void(0)" href="">-</a>'+
                                         '<span type="text" class="text-center g-color-gray-dark-v4 two g-font-size-12 number" placeholder="1" aria-describedby="sizing-addon2">1</span>'+
                                         '<a class="add1" href="javascript:void(0)">+</a>'+
                                     '</div>'+
                                '</div>'+
                            '</div>'+
                        '</article>'+
                     '</li>';
            }

            list.innerHTML = result;
        } else {
            list.innerHTML = "购物车空空如也哦……";
        }

    }


    // for循环删除购物车商品
    let del = document.querySelectorAll('.closeBtn');
    for (let i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            var val = del[i].parentNode;
            var children1 = val.innerText;
            //var children2 = val.children[1].innerText;
            localStorage.removeItem(children1);
             localStorage.clear();
            loadAll();
        }
    }


});

