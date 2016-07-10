console.log("controllers.js");
//懒人计划的控制器-----------------------------------------------------------------------------------------------
app.controller("lanrenCtrl",function($scope){
   

})
//index 页面的控制器------------------------------------------------------------------------------------------
 
.controller("indexCtrl",function($scope){
	
    $(".footer a").click(function(e){	
  	if($(this).index()==4){
  		$(".header span")[0].innerHTML="积分商城";
  		$(".header ul")[0].style.opacity="0";
  		$(".header img")[0].style.opacity="0";
  		$(".header img")[1].style.opacity="0";
  		console.log("1")
  	}else{
  		$(".header ul")[0].style.opacity="1";
  		$(".header img")[0].style.opacity="1";
  		$(".header img")[1].style.opacity="1";
  		if($(this).index()==0){
  	  $(".header #fenxiangImg")[0].style.opacity="0";
  	   $(".header img")[1].style.marginRight="-0.8rem";
    	$(".header span")[0].innerHTML="定期·懒人计划";
      }else if($(this).index()==1){
      	$(".header img")[0].style.opacity="1";
      	$(".header img")[1].style.marginRight="0.4rem";
    	$(".header span")[0].innerHTML="活期·零钱计划"
      }else if($(this).index()==2){
      	$(".header img")[0].style.opacity="1";
      	$(".header img")[1].style.marginRight="0.4rem";
    	$(".header span")[0].innerHTML="定期·懒人计划"
      }else if($(this).index()==3){
      	$(".header img")[0].style.opacity="1";
      	$(".header img")[1].style.marginRight="0.4rem";
    	$(".header span")[0].innerHTML="享乐计划"
      }
  	}    
//底部ul
	 var oImg=$(this).children()[0]
	 var oSpan=$(this).children()[1]
	 var allImg=$(".footer a img");
	 var allSpan=$(".footer a span");
	 for(var i=0;i<allImg.length;i++){
	 	//for 实现点击全部图片 褪色
	 	var imga=allImg[i].src.slice(-5,-4);
	 	if(imga=="a"){
	 	 var heimg=i+1;
	 	  allImg[i].src= "img/images/footer"+heimg+"b.png";	 	  
	 	}	 
	 	//实现 文字去色
	 	if(i<allImg.length-1){
	 	  allSpan[i].style.color="#666666";
	 	}
	  }
	 var heimg1=$(this).index()+1;
	 oImg.src="img/images/footer"+heimg1+"a.png";
	 oSpan.style.color="#FB7540";
	 var footerm=$(".footerm")[0];
	 //处理中间背景颜色
	 if($(this).index()==2){
	 	footerm.style.backgroundColor="#FF6633"
	  }
	 if($(this).index()!=2){
	 	footerm.style.backgroundColor="#FF9966";
	  }
  })	  
   //hua
   	var huaView=document.getElementsByClassName("huaView")[0];
	  	var conutX1=0;
	  	var conutX2=0;
	  	var cha=0;
        var cun=0;
        var count=0;
	  	huaView.style.left="3.275rem";
	  	 huaView.addEventListener("touchstart",function(e){
	  	   var touchs=e.touches[0];
  	        conutX1=touchs.clientX;
  	        count=1;
	  	 },false);
	  	 huaView.addEventListener("touchmove",function(e){	 	  	 	
	  	   var touchs=e.touches[0];
  	        conutX2=touchs.clientX; 	        
  	        cha=(conutX2-conutX1)/40;  	        
  	        if(count==1){
  	          count=0;
  	          cun=parseInt(huaView.style.left)  	          
  	        }
  	        else{ 	          
  	          huaView.style.left=cun+cha+"rem";
  	          if(parseInt(huaView.style.left)<=-27.175){
  	          	huaView.style.left="-27.175rem"; 	          	
  	          }
  	          if(parseInt(huaView.style.left)>=3.275){
  	          	huaView.style.left="3.275rem";
  	          }
  	        }
  	        
	  	 },false);
	  	 huaView.addEventListener("touchend",function(){
	  	 	console.log(huaView.style.left);
	  	 },false)
	  	 //hua
	  	 //fenxiang
	  	 
	  	 //fenxiang
})
//零钱计划的控制器----------------------------------------------------------------------------------------------------
.controller("lingqianCtrl",function($scope){


})
//中间部分的控制器----------------------------------------------------------------------------------------------------
.controller("middle0Ctrl",function($scope){
 
 
})
//享乐计划的控制器-----------------------------------------------------------------------------------------------------
.controller("xiangleCtrl",function($scope){

// // 头部轮播
//	$(".topLa").css("left","-100px");
//	var count=0;
//	clearInterval(clear);
//	var clear=setInterval(function(){
//	   count++;
//	   $(".topLa").animate({
//		left:-16*count+"rem",				
//	   },500)
//	   if(count==3){
//	  	count=0;
//	  }
//	  var oLi=$(".top ul li");
//	  for(var i=0;i<oLi.length;i++){
//	  	oLi[i].classname="top-ul-li";	  	
//	  }
//	},1000)
//

  //滑动 变化
  var conutX1=0;
  var conutX2=0;
  $(".bannerView")[0].addEventListener("touchstart",function(e){
  	 var touchList=e.touches;
  	 var touchs=touchList[0];
  	 conutX1=touchs.clientX
  })
   $(".bannerView")[0].addEventListener("touchmove",function(e){
  	 var touchList=e.touches;
  	 var touchs=touchList[0];
  	 conutX2=touchs.clientX
  	 var tu=$(".bannerView")[0]
  	 tu.style.left=(conutX2-conutX1)/40+"rem"
  	 if(parseInt(tu.style.left)>=0){
  	 	tu.style.left=0+"rem";
  	 }
  	 if(parseInt(tu.style.left)<=-50){
  	 	tu.style.left=60+"rem";
  	 }	 
  })
   
})
//积分商城的控制器----------------------------------------------------------------------------------------------------
.controller("jifenCtrl",function($scope){
	
	
  //使用了swipe插件做轮播
 var mySwiper = new Swiper ('.swiper-container',{
    direction: 'horizontal',
    loop: true,   
    //自动切换时间
    autoplay :2000,
    //切换速度
    speed:300,
 })       
 //使用AJAX取数据
 //取会员数据
 $.ajax({
 	 url:"./data/huiyuan.json",
     type:"get",         
     success:function (data) {  
         //添加数据
         for(var i=0;i<data.length;i++){
          var a=$("<a href='#'></a>");
          var span1=$("<span></span>").html(data[i].mes)
//        var img1=$("<img />").attr("src",data[i].src)
var img1=$("<img data-src='' class='load-img'/>").attr("src","img/jifen/images/img11.png")
           img1.attr("data-src",data[i].src) 
         	 a.append(img1);
         	 a.append(span1);
         	 var div=$(".huiyuan");
         	 div.append(a);
         }   
         //添加超链接  拿到全部a
         var oAs=$(".huiyuan a");
         for(var i=0;i<oAs.length;i++){
           //在这里设置要跳接的页面
//         console.log(oAs[i].href="index.html")         
         }
 	 }
 })
 
//取小懒数据
$.ajax({
 	 url:"./data/xiaolan.json",
     type:"get",         
     success:function (data) {  
         //添加数据        
         for(var i=0;i<data.length;i++){
          var a=$("<a href='#'></a>");
          var span1=$("<span></span>").html(data[i].mes)
          var span2=$("<span></span>").html(data[i].price)
//        var img1=$("<img />").attr("src",data[i].src1)
var img1=$("<img data-src='' class='load-img'/>").attr("src","img/jifen/images/img11.png")
           img1.attr("data-src",data[i].src1) 
          var img2=$("<img />").attr("src",data[i].src2)
         	 a.append(img1);        	 
         	 a.append(span1);
         	 a.append(img2);        	 
         	 a.append(span2);
         	 var div=$(".xiaolan");
         	 div.append(a);
         }  
         //保证样式
         if(data.length%3==2){
         	var a=$("<a href='#'></a>");
         	var div=$(".xiaolan");
         	 div.append(a);
         }
         //添加超链接  拿到全部a
         var oAs=$(".xiaolan a");
         for(var i=0;i<oAs.length;i++){
           //在这里设置要跳接的页面
//         console.log(oAs[i].href="index.html")         
         }
 	 }	
})
//取投资专区数据
$.ajax({
   url:"./data/touzi.json",
   type:"get",         
   success:function (data) { 
   for(var i=0;i<data.length;i++){
   var a=$("<a href='#'></a>");
 var img1=$("<img data-src='' class='load-img'/>").attr("src","img/jifen/images/img11.png")
           img1.attr("data-src",data[i].src1) 
   var img2=$("<img />").attr("src",data[i].src2)
   var span1=$("<span></span>").html(data[i].price)
    a.append(img1);
    a.append(img2);
    a.append(span1);
   var div=$(".touzi");
     div.append(a);
   }   
    //添加超链接  拿到全部a
    var oAs=$(".touzi a");
      for(var i=0;i<oAs.length;i++){
    //在这里设置要跳接的页面
//         console.log(oAs[i].href="index.html")         
      }    	
   	
   }	
})
 //取精选数据
 $.ajax({
         url:"./data/jingxuan.json",
         type:"get",         
         success:function (data) {  
         //添加数据
         for(var i=0;i<data.length;i++){
          var a=$("<a href='#'></a>");
          var span1=$("<span></span>").html(data[i].mes)
          var span2=$("<span></span>").html(data[i].price)
          //实现了图片的异步加载
          var img1=$("<img data-src='' class='load-img'/>").attr("src","img/jifen/images/img11.png")
           img1.attr("data-src",data[i].src1)   
          var img2=$("<img />").attr("src",data[i].src2)
         	 a.append(img1);
         	 a.append(span1);
         	 a.append($("<br />"));
         	 a.append(img2);
         	 a.append(span2);
         	 var div=$(".jingxuan");
         	 div.append(a);
         }   
         //添加超链接  拿到全部a
         var oAs=$(".jingxuan a");
         for(var i=0;i<oAs.length;i++){
           //在这里设置要跳接的页面
//         console.log(oAs[i].href="index.html")         
         } 
       }
   })
  //图片的异步加载
	 lazyLoad.init();	 
	 
	 
	 
})
console.log("controllers.js111");