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





    /*购物车添加减少*/
    var oPlus = $('.add1');//商品加
    var oReduce = $('.jianshao');//商品减
    var closeBtn = $('.closeBtn');//商品减
    // + 按钮点击事件
    $(oPlus).each(function(index,value){
        //JQ循环遍历每一个增加num的按钮
        /**
         * 当点击增加按钮的时候此按钮的上一级兄弟元素中的值加一
         * JQ获取当前节点的上一个兄弟节点 节点.prev()
         */
        $(this).click(function(){//对每个按钮都进行增加的功能,无上限,当前this指向当前oPlus
            var num = parseInt($(this).prev().html());//获取当前商品的num值,JQ获取当前元素的紧邻的前一个兄弟元素prev()
            num ++;//每点击一次num + 1;
            $(this).prev().html(num);//然后将改变过的num值重新更改到当前元素的前一个兄弟元素中(即num框中)
        })
    })

// - 按钮点击事件
    $(oReduce).each(function(index,value){
        /**
         * 当点击减少的按钮的时候,首先先判断一下他的后一个兄弟元素中的值是否已经为0了,若为0了就直接赋值为0,不能让其继续减少,如若大于0则每点击一次减一
         * JQ获取当前元素的后一个兄弟元素 节点.next()
         */
        $(this).click(function(){
            var num = parseInt($(this).next().html());
            if(num === 0){
                num = 0;
                $(this).next().html(num);
                alert("宝贝数量不能为空");
            }
            if(num > 0){
                num --;
                $(this).next().html(num);
            }
        })

    })

    //删除数据

    //$(closeBtn).each(function(index,value){
    //  var children1=$(this).parent().remove();
    //    localStorage.removeItem("cart");
    //    ShowCart();
    //})











//var btnCar = document.querySelectorAll('.shoppingBtn');
    let btnCar = $('.shoppingBtn');
    //console.log(btnCar);

    $(btnCar).each(function(index,value){
        count=0;
        $(this).click(function() {
            count++;
            //console.log(count);
            let img=$(this).parent().parent().find('.productImg').attr("src");
            //console.log(img);
            let goods=$(this).parent().find('.productName').html();
            //console.log(goods);
            let price=$(this).parent().find('.productPrice').html();
            let dataId = $(this).parent().parent().attr("data-id");
            let num = $("#number").text();
            //console.log(sum);

            let obj = {
                img: img,
                price: price,
                goods: goods,
                dataId:dataId,
                count:count
            };

            let cart = window.localStorage.getItem('cart');
            //console.log('localstorage中的数据',cart);

            if(cart) {//存在数据,即购物车不为空
                //console.log('购物车不为空,执行判断是否有重复数据操作');
                //然后将获取到的localStorage数据转回为数组
                let arr = JSON.parse(cart);
                //console.log('重新转回为数组的localStorage数据', arr);
                //然后使用数组some的方法判断是否存在重复数据,返回值为布尔值
                let condition = arr.some(function (item, index, array) {//回调函数有三个参数:1.数组中的元素,2.下标,3.数组本身
                    return item.dataId === obj.dataId && item.price === obj.price && item.goods === obj.goods;//返回一个经过条件判断之后的一个结果,布尔值
                });
                //console.log('判断后的返回值', condition);

                if(condition){
                    //console.log('判断结果为true执行原数据新数据合并操作');
                    $(arr).each(function(index,value){//循环遍历这个数组寻找与新数据匹配的元素
                        //console.log(value);
                        if(obj.dataId === value.dataId && obj.price === value.price && obj.price === value.price){
                            //将原新数据的num值合并
                            //obj.num = parseInt(obj.num)+parseInt(value.num);
                            //console.log(obj.num);
                            //删除原数据
                            arr.splice(index, 1);//删除原数据
                            arr.push(obj);//新数据增填到数组中
                            window.localStorage.setItem('cart',JSON.stringify(arr));
                        }
                    })
                }else{
                    //console.log('判断结果为false直接执行将新数据上传到localStorage中的操作');
                    arr.push(obj);
                    window.localStorage.setItem('cart',JSON.stringify(arr));
                }
            }else{
                //console.log('购物车为空执行直接加入往localStorage中添加数据功能');
                let arr = [obj];
                window.localStorage.setItem('cart', JSON.stringify(arr))//使用localStrong的setItem来往localStrong中存放数据(两个参数:name,value)
            }
            ShowCart();//每点击一次调用一次显示购物车功能函数

        })
    })


    ShowCart();//先调用一次,页面加载完直接显示
    function ShowCart(){
        $('.dropMenu-content').remove();
        let arr = JSON.parse(window.localStorage.getItem('cart'));

        $.each(arr, function (index, value) {//each循环遍历数组,将数据一一对应添加到#DisplayInformation中并显示到页面中
            //console.log(value);
            let  result=
                $(
                    '<ul class="dropMenu-content">'+
                    '<li>'+
                    '<button type="button" class="close closeBtn" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                    '<div class="clearfix"></div>'+
                    '<article class="clearfix miniCartInfo"  id="shoppingList">'+
                    '<div class="miniCart-left"><img src="'+value.img+'"></div>'+
                    '<div class="miniCart-right">' +
                    '<h4 class="card-title g-font-family-Regular g-line-height-21"><a href="">'+value.goods+'</a></h4>'+
                    '<div class="priceAndNumber g-mt-15">' +
                    '<h3 class="g-font-size-18 g-font-family-bold pull-left">'+value.price+'</h3>'+
                    '<div class="input-group-add pull-right text-center">'+
                    '<a class="jianshao" href="javascript:void(0)" href="">-</a>'+
                    '<span type="text" class="text-center g-color-gray-dark-v4 two g-font-size-12 number" placeholder="1" aria-describedby="sizing-addon2">1 </span>'+
                    '<a class="add1" href="javascript:void(0)">+</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</article>'+
                    '</li>'+
                    '</ul>'
                )
            $('#shoppingList').append(result);

            let numberShow=$(
                '<span class="number" id="number">'+value.count+'</span>'
            )

            $("#cartDropdown").append(numberShow);


            //let numberShow=$("#number").html(value.count);

        })









    }







});

