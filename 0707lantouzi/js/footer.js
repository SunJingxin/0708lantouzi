
//改变头部内容
  //代码需要优化
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
  	  $(".header img")[0].style.opacity="0";
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