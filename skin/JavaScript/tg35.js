//返回顶部
$(function(){

	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"tencent://Message/?Uin=1019585925&websiteName=www.zmzmb.com=&Menu=yes\" class=\"btn btn-qq\"></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"/skin/images/weixin.jpg\" onclick=\"window.location.href=\'http://www.zmzmb.com\'\"/></div><div class=\"btn btn-phone\"><div class=\"phone\">400-000-0000</div></div><div class=\"btn btn-top\"></div></div>";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();
			}else{
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});

// 服务项目
$(function(){
var clearTimer = null;
var SleepTime = 6000; 
$("#dome-list").jCarouselLite({
    btnNext: "#btn_focus_next",
    btnPrev: "#btn_focus_prev",
	visible: 4,
	scroll:4,
	speed: 500,
	auto:6000,
	mouseOver:true
});
});

// 案例全屏特效
$(function(){
var $ = function(s){
     return document.getElementById(s);
     }
    //参数配置
    slide.init({
    //width: 100%,				// 焦点图宽度（非必须，默认值自适应）
    height: 390,			// 焦点图高度（非必须，默认值自适应）
    auto: true,			// 是否自动切换（非必须，默认值 false）
    interval: 5000,			// 切换间隔时间（非必须，默认值 3000，当 auto 为 true 时有效）
    targetId: 'slide',		// html 对应的焦点图 ID（必须）
    data: $('_slide').getElementsByTagName('li').length// 焦点图数据（必须）
});
	});

// 首页案例展示
$(document).ready(function(){
jQuery(".template-site").slide({mainCell:".site-loop ul",autoPage:true,effect:"left",prevCell:".sPrev",nextCell:".sNext",autoPlay:true,scroll:4,vis:4,delayTime:1000});
jQuery(".website-shop").slide({ titCell:".h2d li",mainCell:".menudiv",autoPlay:"true",interTime:6000});
});

// 客户眼中的太格网
$(function(){
var clearTimer = null;
var SleepTime = 6000; 
$(".witnessdome").jCarouselLite({
    btnNext: "#btn_shop_next1",
    btnPrev: "#btn_shop_prev1",
	visible: 1,
	scroll:1,
	speed: 500,
	auto:6000,
	mouseOver:true
});
});
//图片平铺5



//图片平铺5
$(document).ready(function(){
$(function(){
	$('.sitepic img').jqthumb({
		width: 276,
		height: 290,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1},1000);
		}
	});
});
});
//图片平铺6
$(document).ready(function(){
$(function(){
	$('.casepic img').jqthumb({
		width: 275,
		height: 305,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1},1000);
		}
	});
});
});


