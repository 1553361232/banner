//首先获取各个节点
var oBody = $("body")[0];
var aBanner = $(".banner");
var aSpan = $(".tab").children()
var oPrev = $('.prev')
var oNext = $(".next")
var on = $(".on")

//初始化让第一张图片显示，和第一个原点显示
aBanner[0].style.opacity = "1"
aSpan[0].className = "on" //className属性设置或返回元素的class属性

var num = 0;
for(var i = 0; i < aSpan.length; i++) {
	//index可返回下拉列表中选项的索引位置
	aSpan[i].index = i;
	aSpan[i].onclick = function() {
		//当点击原点时图片进行切换
		for(var j = 0; j < aSpan.length; j++) {
			//获取到当前原点的索引位置赋给num,先全部设置为透明
			num = this.index;
			aSpan[j].className = "";
			aBanner[j].style.opacity = "0";
		}
		//获取指定的的位置设置属性	，再添加样式覆盖掉原来的
		aSpan[num].className = "on";
		aBanner[num].style.opacity = "1";
	}
	oNext[0].onclick = function() { //按下图片切换到后一张
		//设置原点的样式
		for(var j = 0; j < aSpan.length; j++) {
			if(aSpan[j].className == "on") {
				aSpan[j].className = "";
				aBanner[j].style.opacity = "0";
				j++;

				num++;
				if(j > 4) {
					j = 0;
				}
				aSpan[j].className = "on";
				aBanner[j].style.opacity = "1";
			}
		}

	}
	oPrev[0].onclick = function(){
		for(var j=0;j<aSpan.length;j++){
			if(aSpan[j].className=="on"){
				aSpan[j].className ="";
				aBanner[j].style.opacity ="0";
				j--;
				num--;
				if(j<0){
					j=4;
				}
				aSpan[j].className = "on";
				aBanner[j].style.opacity = "1";
			}
		}
	}
}
//设置定时器
function Time(){
	num++;
	if(num<5){
		for(var j = 0;j<aSpan.length;j++){
			aSpan[j].className = "";
			aBanner[j].style.opacity = "0";
		}
		aSpan[num].className = "on";
		aBanner[num].style.opacity = "1";
	}else{
		num = -1;
	}
	//clearInterval()方法可取消由setInterval()设置的timeout
	//clearInterval()方法的参数必须是由setInterval返回的Id值
	
	
}
clearInterval(timer)
	var timer = setInterval("Time()",2000)
	
	oBody.onmouseover = function(){//鼠标引入，清楚定时器，轮播图停止
		clearInterval(timer);
	};
	oBody.onmouseout = function(){//鼠标移出，重新调用定时器，轮播图开始
		clearInterval(timer);
		timer = setInterval("Time()",2000);
	};
