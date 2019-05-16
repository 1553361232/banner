$('.login-button').bind('click',function(){
	var username = $('#username').val()
	var pwd = $('#pwd').val()
	$.ajax({
		type:"post",
		url:"http://192.168.1.22:8080/joker/user/login.do",
		data:{
			'name':username,
			'passd':pwd
		},
		success: function(str) {　　
					console.log('请求成功')	
					console.log(str)
					if(str.enUsername!=null){
						var searchUrl = encodeURI("http://127.0.0.1:8020/整合/index.html?&enUsername="+str.enUsername+"&enId="+str.enId+"&enPassword="+str.enPassword)
						window.location.href= searchUrl
					}
					
					
				},
				error: function(err) {　　　　　　　
					console.log('请求失败')　　　　　　　
				}　　　
	});
})