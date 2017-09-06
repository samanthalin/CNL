$(document).ready(function() {
	$(".navbar-collapse").addClass("in");
	$(".navbar-collapse").removeClass("collapse btn  btn-group-lg btn-primary")
	$(".navbar-toggle").css({ display: "none" });
	$("span.btn").css({ display: "none" });
	$(".col-12").removeClass("col-12");
	$(".col-md-4").removeClass("col-md-4");
	// $('a[href*="index_main01.html"]').text("銀行管理系統");
	$('a[href*="index_main01.html"]').addClass("btn1");
	$('a[href*="index_main02.html"]').addClass("btn2");
	$('a[href="#####"]').addClass("btn3");
	$('a[href="######"]').addClass("btn4");
	$('a[href="######"]').removeClass("btn3");
	$('.form-group').removeClass("col-md-1 form-group");
	$('.has-submenu').removeClass("has-submenu");
	$('.btn1').append("<p>銀行管理系統</p>");
	$('.btn2').append("<p>經代管理系統</p>");
	$('.btn3').append("<p>新契約列印作業</p>");
	$('.btn4').append("<p>新契約維護管理系統</p>");
	$('.btn1').prepend('<img src="./images/menu_b1.png" />');
	$('.btn2').prepend('<img src="./images/menu_b2.png" />');
	$('.btn3').prepend('<img src="./images/menu_b3.png" />');
	$('.btn4').prepend('<img src="./images/menu_b4.png" />');
});