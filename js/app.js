

function setCookie(name, value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 86400);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()+";path=/;";
}

function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) return unescape(arr[2]);
	else return null
}

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}



jQuery(document).ready(function(){
	$(".privacy-btn").click(function(){
		$(".website-cookie").hide();
		setCookie('cookies_agree', 'yes');
	});
	if( getCookie('cookies_agree')=='yes' ){
		$(".website-cookie").hide();
	}
});
