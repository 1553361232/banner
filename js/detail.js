$(function() {

	$.ajax({　　　　　　
		url: "http://192.168.1.22:8080/joker/login.do",
		type: 'GET',
		success: function(str) {　　　　　　　
			alert(str);
			console.log(str);
			alert("jj")　　　　　　　
		},
	    error: function(err) {　　　　　　　
			alert(err);　　　　　　　
		}　　　　　　
	});
})