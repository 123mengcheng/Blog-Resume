/*
* @Author: Administrator
* @Date:   2017-08-07 19:58:16
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-10 14:37:05
*/

var ul1=document.querySelector('.ul1');
var ul2=document.querySelector('.ul2');
var div1=document.querySelector('#div1');

div1.addEventListener("mouseover",function(){
	ul1.style.display="none";
	ul2.style.display="block";
})
div1.addEventListener("mouseout",function(){
	ul2.style.display="none";
	ul1.style.display="block";
})

var div2 =document.querySelectorAll("#div2 span a")
for(var i=0;i<div2.length;i++){	
	div2[i].addEventListener("mouseover", function(e){
		var t =e.target;
		if(t.style.WebkitTransform=="rotate(360deg)"){
			t.style.WebkitTransform="";
		}else{
			t.style.WebkitTransform="rotate(360deg)"	
		}
		
	})
}

var div=document.querySelectorAll(".div3")
console.log(div)
for(var i=0;i<div.length;i++){
	div[i].addEventListener("mouseover", function(){
		this.lastElementChild.style.display='block'
		this.firstElementChild.style.display='none'
	})
	div[i].addEventListener("mouseout", function(){
		this.lastElementChild.style.display='none'
		this.firstElementChild.style.display='block'
	})
}

