var leftul = $('.left-ul li:nth-child(2)')
leftul.bind('click',function(){
	var login = encodeURI("login.html")
	window.location.href = login
})
var twoMenu = $('.twoMenu')
var newtwoMenu = twoMenu.clone(true)
$('#caizhaung').append(newtwoMenu)
var search = window.location.search
var enUsername = search.split("&")[1]
var enUser = enUsername.split("=")[1]



//登录成功
if(enUser!=null){
	
$('.left-ul li:eq(1)').text(enUser)
$('.left-ul li:eq(2)').text("")
$('.shopBox-div p').text("欢迎回来"+enUser+",点击查看购物车")
//订单查询
var muorder = $('.float-right li:nth-child(2)')
muorder.bind("click",function(){
	var muorder = encodeURI("mu-order02.html")
	window.location.href = muorder
})
}else{
	console.log('登陆失败')
}


$('.contbox').bind("click",function(e){
	var chilimg =  $(this).children("div").children("img").attr('src')
	var h3 = $(this).children('h3').text()
	var span = $(this).children('p').children('span').text()
	var searchUrl = encodeURI("detail.html"+"?&chilimg="+chilimg+"&h3="+h3+"&span="+span)
	window.location.href= searchUrl
})

