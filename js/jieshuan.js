var tuc = $('.top-user-content')
var user = $('.top-user')
$(".top-user").mouseover(function() {
	tuc.css('display', 'block')
	user.css('background-color', '#fff')
}).mouseout(function() {
	tuc.css('display', 'none')
	user.css('background-color', '#f5f5f5')

});


var i = 4;
var res;
res = setInterval("jump()", 1000);
function jump(){
	if(i == 0){
		window.location.href = '购物车.html';
		clearInterval(res);
	}
	document.getElementById("time").innerHTML = i;
	i--;
}