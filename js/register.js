document.getElementById('subject').addEventListener('change', function() {
	var username = $('#username').val();
	var name = $('#name').val();
	var pwd = $('#pwd').val();
	var pwdqr = $('#pwd-qr').val();
	var sex = $('#sex').val();
	var age = $('#age').val();
	var phone = $('#phone').val();
	console.log(username)
	userinput(username);
	userReader(name);
	userPwd(pwd);
	readerPwd(pwdqr, pwd)
	userAge(age)
	userphone(phone)
	$('#sub').bind('click', function() {
		if(userinput(username) && userReader(name) && userPwd(pwd) && readerPwd(pwdqr, pwd) && userAge(age) && userphone(phone)) {
			$.ajax({
				type: "POST",
				url: "http://192.168.1.22:8080/joker/user/registered.do ",
				data: {
					'enUsername': username,
					'enReallyname': pwdqr,
					'enPassword': pwd,
					'enSex': sex,
					'enAge': age,
					'enPhone': phone
				},
				success: function(str) {　　
					console.log('请求成功')
					console.log(str);
				},
				error: function(err) {　　　　　　　
					console.log('请求失败')　　　　　　　
				}　　　　　
			});
		} else {
			console.log('主任要认真填写哦')
			return false;
		}

	})

})

function userinput(username) {
	var userspan = $('.username-input span')
	if(username != null && username != "" && username.length != 0) {

		reg = /^[a-zA-Z0-9_]+$/;
		if(!reg.test(username)) {
			userspan.text("*输入格式不正确").css({
				"color": "red",
				"font-size": "12px"
			})
			return false;
		} else {
			var userspan = $('.username-input span')
			userspan.text("*输入正确").css({
				"color": "green",
				"font-size": "12px"
			})
			return true;
		}

	} else {
		userspan.text("*输入信息不能为空").css({
			"color": "red",
			"font-size": "12px"
		})
		return false;
	}
}

function userReader(name) {
	if(name != null || name != "" || name.length != 0) {

		var reg = /^[\u4E00-\u9FA5]+$/;
		if(!reg.test(name)) {
			var userspan = $('.user-name span')
			userspan.text("*输入不正确,输入只能是汉字").css({
				"color": "red",
				"font-size": "12px"
			})
			return false;
		} else {
			var userspan = $('.user-name span')
			userspan.text("*输入正确").css({
				"color": "green",
				"font-size": "12px"
			})
			return true;
		}

	} else {
		return false
	}
}

function userPwd(pwd) {
	if(pwd != null || pwd != "" || pwd.length != 0) {
		if(pwd.length > 5 && pwd.length < 11) {
			var userspan = $('.user-pwd span')
			userspan.text("*输入正确").css({
				"color": "green",
				"font-size": "12px"
			})
			return true;
		} else {
			var userspan = $('.user-pwd span')
			userspan.text("*输入不正确,长度不正确").css({
				"color": "red",
				"font-size": "12px"
			})
			return false;
		}
	} else {
		return false
	}
}

function readerPwd(pwdqr, pwd) {
	if(pwdqr != null || pwdqr != "" || pwdqr.length != 0) {
		if(pwdqr == pwd) {
			var userspan = $('.agin span')
			userspan.text("*输入正确").css({
				"color": "green",
				"font-size": "12px"
			})
			return true;
		} else {
			var userspan = $('.agin span')
			userspan.text("*密码不正确").css({
				"color": "red",
				"font-size": "12px"
			})
			return false;
		}
	} else {
		return false
	}
}

function userAge(age) {
	if(age != null && age != "" && age.length != 0) {
		return true;
	} else {
		var userspan = $('.user-age span')
		userspan.text("*年龄不能为空").css({
			"color": "red",
			"font-size": "12px"
		})
		return false;
	}
}

function userphone(phone) {
	if(phone != null || phone != "" || phone.length != 0 || phone.length == 11) {
		if(!(/^1[34578]\d{9}$/.test(phone))) {
			var phone = $('.user-phone span')
			phone.text("*请输入正确的号码").css({
				"color": "red",
				"font-size": "12px"
			})
			return false;

		} else {
			var phone = $('.user-phone span')
			phone.text("*输入正确").css({
				"color": "green",
				"font-size": "12px"
			})
			return true;
		}
	} else {
		return false
	}
}