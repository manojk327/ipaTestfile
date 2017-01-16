// JavaScript Document

$(document).ready(function(e) {
    
	//alert("function init ()")
	var totalSlides = 13;
	var count = 1;
	var preCount = 1;
	var presentSlideNo = 1;
	var commingSlideNo = 1;
	var firstTime = 0;
	
	init();
	 
	function init(){
	 
		$(".preBtn").css({"display":"none"});
		frame1();
		
		//TweenMax.delayedCall(2, frame3);	
	}
	
	
	function frame1(){
		presentSlideNo = 1; 
		
		if(firstTime == 0){
			firstTime = 1;
			$('.slide1').css({"left":"0px"});
		}
		TweenMax.to('.slide1', 1, {left:0,  delay:0, ease:Expo.easeInOut,});
		//TweenMax.from('.slide1', 1,{opacity:0, delay:0, ease:Expo.easeInOut,});
		TweenMax.from('.slide1Details', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.from('.sd1txt #sd1txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,});
		TweenMax.from('.sd1txt #sd1txt2', 1,{right:-1200, delay:0.5, ease:Expo.easeInOut,});
		TweenMax.from('.sd1txt #sd1txt3', 1,{right:-1200, delay:0.6, ease:Expo.easeInOut });
		 
	}
	 
	function frame2(){
		
		  $(".sd2icon").css({"transform":"matrix(1.5, 0, 0, 1.5, 0, 0)", "opacity":"0"});
		presentSlideNo = 2; 
		TweenMax.to('.slide2', 1, {left:0,  delay:0, ease:Expo.easeInOut,});
		//TweenMax.from('.slide2', 1, {opacity:0, delay:0, ease:Expo.easeInOut,});
		TweenMax.to('.sd2icon', 1, {opacity:1, delay:1, ease:Expo.easeOut,});
		TweenMax.from('.sd2icon', 2, {scaleX:2.5, scaleY:2.5, delay:1, ease:Elastic.easeOut,});
		TweenMax.from('.slide2Details', 1, {opacity:0, delay:0, ease:Expo.easeInOut,});
		TweenMax.from('.sd2txt .sd2txt1', 1, {right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd2txt .sd2txt2', 1, {right:-1200, delay:0.6, ease:Expo.easeInOut });
		
	}
	   
	function frame3(){	 	  
		  $(".sd3icon").css({"transform":"matrix(1.6, 0, 0, 1.6, 0, 0)", "opacity":"0"});
		presentSlideNo = 3; 
		TweenMax.to('.slide3', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		TweenMax.to('.logo1', 1,{opacity:1, delay:.25, ease:Expo.easeInOut,});
		TweenMax.to('.logo2', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.to('.sd3icon', 1, {opacity:1, delay:1, ease:Expo.easeOut,});
		TweenMax.from('.sd3icon', 2, {scaleX:2.5, scaleY:2.5, delay:1, ease:Elastic.easeOut,});
		TweenMax.from('.slide3Details', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.from('.sd3txt .sd3txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd3txt .sd3txt2', 1,{right:-1200, delay:0.6, ease:Expo.easeInOut });
			
	}
	
	function frame4(){
		  
		  $(".sd4icon").css({"transform":"matrix(1.6, 0, 0, 1.6, 0, 0)", "opacity":"0"});
		presentSlideNo = 4; 
		TweenMax.to('.slide4', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		
		TweenMax.to('.logo1', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.to('.logo2', 1,{opacity:1, delay:.25, ease:Expo.easeInOut,});
		
		TweenMax.to('.sd4icon', 1, {opacity:1, delay:1, ease:Expo.easeOut,});
		TweenMax.from('.sd4icon', 2, {scaleX:2.5, scaleY:2.5, delay:1, ease:Elastic.easeOut,});
		TweenMax.from('.slide4Details', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.from('.sd4txt .sd4txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd4txt .sd4txt2', 1,{right:-1200, delay:0.6, ease:Expo.easeInOut });
				
	}
	
	function frame5(){
		 $(".sd5icon").css({"transform":"matrix(1.6, 0, 0, 1.6, 0, 0)", "opacity":"0"});
		presentSlideNo = 5; 
		TweenMax.to('.slide5', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		
		TweenMax.to('.logo1', 1,{opacity:1, delay:.25, ease:Expo.easeInOut,});
		TweenMax.to('.logo2', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		
		
		TweenMax.to('.sd5icon', 1, {opacity:1, delay:1, ease:Expo.easeOut,});
		TweenMax.from('.sd5icon', 2, {scaleX:2.5, scaleY:2.5, delay:1, ease:Elastic.easeOut,});
		TweenMax.from('.slide5Details', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.from('.sd5txt .sd5txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd5txt .sd5txt2', 1,{right:-1200, delay:0.6, ease:Expo.easeInOut });
			
	}
	
	function frame6(){
		  
		presentSlideNo = 6; 
		TweenMax.to('.slide6', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		TweenMax.to('.logo1', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.from('.slide6Details', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.from('.sd6txt .sd6txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd6txt .sd6txt2', 1,{right:-1200, delay:0.8, ease:Expo.easeInOut });
		TweenMax.from('.sd6md1', 1,{opacity:0, delay:1.2, ease:Expo.easeInOut,});
		TweenMax.from('.sd6md2', 1,{opacity:0, delay:1.4, ease:Expo.easeInOut,});
		TweenMax.from('.sd6md3', 1,{opacity:0, delay:1.6, ease:Expo.easeInOut,});
		TweenMax.from('.sd6md4', 1,{opacity:0, delay:1.8, ease:Expo.easeInOut,});
		TweenMax.from('.slide6Details2 #sd6mdtext1', 1,{opacity:0, delay:1.2, ease:Expo.easeInOut,});
		TweenMax.from('.slide6Details2 #sd6mdtext2', 1,{opacity:0, delay:1.4, ease:Expo.easeInOut,});
		TweenMax.from('.slide6Details2 #sd6mdtext3', 1,{opacity:0, delay:1.6, ease:Expo.easeInOut,});
		TweenMax.from('.slide6Details2 #sd6mdtext4', 1,{opacity:0, delay:1.8, ease:Expo.easeInOut,});
			
	}
	
	
	function frame7(){
		
		  
		presentSlideNo = 7; 
		TweenMax.to('.slide7', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		TweenMax.to('.logo1', 1,{opacity:1, delay:.25, ease:Expo.easeInOut,});
		TweenMax.from('.slide7Details', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.from('.sd7txt .sd7txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,});  
		TweenMax.from('.sd7logo', 1,{opacity:0, delay:1, ease:Expo.easeInOut,});
			
		TweenMax.from('.sd7Product', 1,{opacity:0, delay:1.25, ease:Expo.easeInOut,});
		TweenMax.from('#sd7subtxt1', 1,{opacity:0, delay:1.5, ease:Expo.easeInOut,});
		TweenMax.from('.sd7subtxt2', 1,{opacity:0, delay:2, ease:Expo.easeInOut,});
		TweenMax.from('.sd7botTextrightText', 1,{opacity:0, delay:2.5, ease:Expo.easeInOut,});
	
		/*$('.popupback').css({"z-index":"11"});
		$('.popupbackimg').css({"z-index":"12"});
	*/
		/*------Popup slide 7-----*/	
		$('.sd7Product').click(function(event) {
			$('.popupback ').fadeIn(200);
			$('.popupbackimg').fadeIn(200);
		});
		$('.closebtn').click(function(event) {
			$('.popupback ').fadeOut(200);
			$('.popupbackimg').fadeOut(200);
		});
		
	}
		/*------Popup slide 7-----*/	
		
		
	function frame8(){
		 
		presentSlideNo = 8; 
		TweenMax.to('.slide8', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		//TweenMax.from('.slide8', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,}); 
		TweenMax.from('.slide8Details', 1,{opacity:0, delay:.25, ease:Expo.easeInOut,});
		TweenMax.from('.sd8txt1', 1,{right:-1200, delay:1, ease:Expo.easeInOut,});  
		TweenMax.from('.sd8txt2', 1,{right:-1200, delay:1.25, ease:Expo.easeInOut,}); 
		
		TweenMax.from('.sd8Box1', 1,{opacity:0, delay:1.4, ease:Expo.easeInOut,});
		
		
		TweenMax.from('.sd8Box2', 1,{opacity:0, delay:2, ease:Expo.easeInOut,});
		
		
		TweenMax.from('.sd8Box3', 1,{opacity:0, delay:2.5, ease:Expo.easeInOut,});
		
		TweenMax.from('.sd8icon', 1,{opacity:0, delay:3.5, ease:Expo.easeInOut,});
		TweenMax.from('.sd8txt3', 1,{opacity:0, delay:3, ease:Expo.easeInOut,});
		TweenMax.from('.sd8txt4', 1,{opacity:0, delay:3, ease:Expo.easeInOut,});
		
		
		
	}
	
	
		
	function frame9(){	 	  
		
		presentSlideNo = 9; 
		TweenMax.to('.slide9', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		TweenMax.from('.sd9txt .sd9txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd9txt .sd9txt2', 1,{right:-1200, delay:0.75, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd9Box1txt1', 1,{opacity:0, delay:1, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd9Box1txt2', 1,{opacity:0, delay:1.25, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd9Box1txt3', 1,{opacity:0, delay:1.5, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd9Box1txt4', 1,{opacity:0, delay:1.75, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd9Box1txt5', 1,{opacity:0, delay:2, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd9Box1txt6', 1,{opacity:0, delay:2.25, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd9txt3', 1,{opacity:0, delay:2, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd9icon', 1,{opacity:0, delay:2.25, ease:Expo.easeInOut,}); 
		TweenMax.from('#SPF30', 1,{opacity:0, delay:2.5, ease:Expo.easeInOut,}); 
	}
	
	function frame10(){	 	  
		
		presentSlideNo = 10; 
		TweenMax.to('.slide10', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		TweenMax.from('.sd10txt .sd10txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd10Box1txt1', 1,{opacity:0, delay:1, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd10Box1txt2', 1,{opacity:0, delay:1.25, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd10Box1txt3', 1,{opacity:0, delay:1.5, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd10Box1txt4', 1,{opacity:0, delay:1.75, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd10Box1txt5', 1,{opacity:0, delay:2, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd10Box1txt6', 1,{opacity:0, delay:2.25, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd10txt3', 1,{opacity:0, delay:2, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd10icon', 1,{opacity:0, delay:2.25, ease:Expo.easeInOut,}); 
		TweenMax.from('#SPF50', 1,{opacity:0, delay:2.5, ease:Expo.easeInOut,}); 
	}
	
	function frame11(){	 	  
		
		presentSlideNo = 11; 
		TweenMax.to('.slide11', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		TweenMax.from('.sd11txt .sd11txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd11Box1txt1', 1,{opacity:0, delay:1, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd11Box1txt2', 1,{opacity:0, delay:1.25, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd11Box1txt3', 1,{opacity:0, delay:1.5, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd11Box1txt4', 1,{opacity:0, delay:1.75, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd11Box1txt5', 1,{opacity:0, delay:2, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd11Box1txt6', 1,{opacity:0, delay:2.25, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd11txt3', 1,{opacity:0, delay:2, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd11icon', 1,{opacity:0, delay:2.25, ease:Expo.easeInOut,}); 

	}
	
	function frame12(){	 
		
		presentSlideNo = 12; 
		TweenMax.to('.slide12', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		
		TweenMax.from('.sd12txt #sd12txt1', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd12Box1txt1', 1,{opacity:0, delay:0.75, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd12Box1txt2', 1,{opacity:0, delay:1, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd12Box1txt3', 1,{opacity:0, delay:1.25, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd12Box1txt4', 1,{opacity:0, delay:1.5, ease:Expo.easeInOut,}); 
		TweenMax.from('#sd12Box1txt5', 1,{opacity:0, delay:1.75, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd12txt3', 1,{opacity:0, delay:1.75, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd12icon', 1,{opacity:0, delay:2, ease:Expo.easeInOut,}); 
		
		/*------Popup slide 12-----*/	
			$('#sd12pop').click(function(event) {
				$('.sd12popupback ').fadeIn(200)
				$('.sd12popupbackimg').fadeIn(200);
			});
			$('.sd12closebtn').click(function(event) {
				$('.sd12popupback ').fadeOut(200)
				$('.sd12popupbackimg').fadeOut(200);
			});
		/*------Popup slide 12 end-----*/	
	}
	
	function frame13(){	 	  
		
		presentSlideNo = 13; 
		TweenMax.to('.slide13', 1,{left:0,  delay:0, ease:Expo.easeInOut,});
		TweenMax.from('.sd13logo', 1,{right:-1200, delay:0.4, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd13Product', 1,{opacity:0, delay:0.75, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd13botText', 1,{opacity:0, delay:1, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd13botTextul', 1,{opacity:0, delay:1.25, ease:Expo.easeInOut,}); 
		TweenMax.from('.sd13botTextright', 1,{opacity:0, delay:1.5, ease:Expo.easeInOut,}); 
	}

	
	
	function changePrvProduct(slideNo, xPos){
	
		//alert(xPos+" call changePrvProduct   "+slideNo);
		switch(slideNo) {
			case 1:
				//TweenMax.to('.slide1', 1,{left:xPos, ease:Expo.easeInOut});
				//TweenMax.delayedCall(.1, frame1);
				break;
				
			case 2:
			
				TweenMax.to('.slide2', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame1);
				break;
				
			case 3:
				 
				TweenMax.to('.slide3', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame2);
				break;
				
			case 4:
				TweenMax.to('.slide4', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame3);
				break;	
				
			case 5:
				TweenMax.to('.slide5', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame4);
				break;
					
			case 6:
				TweenMax.to('.slide6', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame5);
				break;
				
			case 7:
				TweenMax.to('.slide7', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame6);
				break;
				
			case 8:
			
				TweenMax.to('.slide8', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame7);
				break;
			 	
			case 9:
			
				TweenMax.to('.slide9', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame8);
				break;
			 	
			case 10:
			
				TweenMax.to('.slide10', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame9);
				break;
			 	
			case 11:
			
				TweenMax.to('.slide11', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame10);
				break;
			 	
			case 12:
			
				TweenMax.to('.slide12', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame11);
				break;
			 	
			case 13:
			
				TweenMax.to('.slide13', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame12);
				break;
			 	
		
		}
		
	}
	function changeNextProduct(slideNo, xPos){
	
		//alert(xPos+" call changeNextProduct   "+slideNo);
		
		switch(slideNo) {
			case 1:
				TweenMax.to('.slide1', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame2);
				break;
				
			case 2:
			
				TweenMax.to('.slide2', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame3);
				break;
				
			case 3:
				 
				TweenMax.to('.slide3', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame4);
				break;
				
			case 4:
				 
				TweenMax.to('.slide4', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame5);
				break;
				
			case 5:
				 
				TweenMax.to('.slide5', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame6);
				break;
				
			case 6:
				 
				TweenMax.to('.slide6', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame7);
				break;
				
			case 7:
				 
				TweenMax.to('.slide7', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame8);
				break;
				
			case 8:
				 
				TweenMax.to('.slide8', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame9);
				break;
				
			case 9:
				 
				TweenMax.to('.slide9', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame10);
				break;
				
			case 10:
				 
				TweenMax.to('.slide10', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame11);
				break;
				
			case 11:
				 
				TweenMax.to('.slide11', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame12);
				break;
				
			case 12:
				 
				TweenMax.to('.slide12', 1,{delay : .1, left:xPos, ease:Expo.easeInOut});
				TweenMax.delayedCall(.1, frame13);
				break;
			 
		}
		
	}	
	
	$(".preBtn").click(function(){
		
		$(".nextBtn").css({"display":"block"});	
		checkCount2();
		count--;
		changePrvProduct(presentSlideNo, 1200);
		//preCount = count;
		
	});
	
	$(".nextBtn").click(function(){
			
		$(".preBtn").css({"display":"block"});
		checkCount();
		count++;
		changeNextProduct(presentSlideNo, -1200);
			//preCount = count; 
	});
	
	function checkCount2()
	{
		//alert(" net btn   "+count);
		initProduct2(count);
		if (count <= 2  )
		{
			count = 2
			//count = totalSlides + 1;
			//preCount = 1;
			$(".preBtn").css({"display":"none"});
		}
	
	}

	function initProduct2(proNumber)
	{
		////alert(" net btn   ");
		for(i = 1; i < totalSlides; i++){
		 
			if (proNumber != i)
			{//
				productName = ".slide" + i;
				$(productName).css({"left":"-1200px"});
			}else{
				
				////alert(" net btn   " + i );
			}
		}
	
	
	}
		
	function checkCount()
	{
		////alert(" call checkCount   ");
		initProduct(count);
		
		////alert(" call initProduct   dsfsdfsfsd "+totalSlides);
		if (count > (totalSlides - 2))
		{
			count = (totalSlides - 1);
			//preCount = totalSlides;
			$(".nextBtn").css({"display":"none"});
	 
		}
	}
	function initProduct(proNumber)
	{
		//alert(" call initProduct   ");
		
		for(i = 1; i < totalSlides; i++){
		 
			if (proNumber != i)
			{
				productName = ".slide" + i;
				$(productName).css({"left":"1200px"});
				
			}else{
				
				//alert(" net btn   " + i );
			}
		}
	
	
	}

	
});