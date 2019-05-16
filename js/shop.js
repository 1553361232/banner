$(function() {
	$.ajax({
		type: "post", //定义数据类型
		url: "http://192.168.1.22:8080/joker/shoppingCart.do", //数据地址
		data: {
			'userId': '1'
		},
		success: function(str) {
			console.log("请求成功");
			console.log(str)
			analysis(str)

		},
		error: function(err) {
			console.log(err);
		}
	})

	function analysis(str) {

		$.each(str, function(index, obj) {
			var too = obj['product']

			$("#content-insertion").append(

				'<div class="information-content"><ul><li><input class="ckb" type="checkbox" name="check" id="" value="" /></li><li><div class="details">' + '<img id="" src="' + obj['esEpFilePath'] + '" /><a href=""><p>编号：<span id="">' + too['epId'] + '</span></p><span id="">' + too['epDesc'] + '</span></a></div></li><li><div class=""><em class="unitprice">￥<span id="">' + too['epPrice'] + '</span></em></div></li><li><a class="minus" href="javascript:void(0);">-</a><input class="quantity" type="text" name="" id="" value="' + too['epStock'] + '" onkeyup="value=value.replace(/^(0+)|[^\d]+/g),"/><a class="plus" href="javascript:void(0);">+</a></li><li><div class=""><em class="total" style="color: coral;">￥<span id="">999</span></em></div></li><li><a class="delete" href="javascript:void(0);">删除</a></li></ul></div>'

			)
		});


		//删除
		var del = $('.delete')
		$('.delete').click(function(e) {
			var fa = $(this).parent().parent().parent()
			fa.remove()
			console.log("删除成功")

		})

		//quantity
		$(".plus").click(function() {
			var inp = $(this).parent().find(".quantity")
			var sl = inp.val()
			var zh = parseInt(sl)
			var pp = zh + 1
			inp.val(pp)
			var jge = $(this).parent().parent().parent()
			var unspan = jge.find('.unitprice span')
			a(unspan)
			showTotal()
		})

		$(".minus").click(function() {
			var inp = $(this).parent().find(".quantity")
			var sl = inp.val()
			var zh = parseInt(sl)
			var pp = zh - 1
			if(pp != 0) {
				inp.val(pp)
			}
			var jge = $(this).parent().parent().parent()
			var unspan = jge.find('.unitprice span')
			showTotal()
			a(unspan)
		})

		function a(e) { //声明一个方法

			var up = e.text() //获取到的单价
			var hz = e.parent().parent().parent().parent()
			var quantity = hz.find(".quantity").val() //获取数量
			var zjg = up * quantity
			console.log(zjg)
			var uw = hz.find(".total span")
			uw.text(zjg)

		}
		
		

		//		function CheckedAll() {
		//			$(':checkbox').attr('checked', 'checked');
		//		}
		//
		//		function CheckedRev() {
		//			var arr = $(':checkbox');
		//			for(var i = 0; i < arr.length; i++) {
		//				arr[i].checked = !arr[i].checked;
		//			}
		//			showTotal()
		//		}

		$(function() {
			// 页面加载时计算总计
			showTotal();
			$('.ckb').on('click', function() {
				// 选择多选框后,再重新计算
				showTotal();
			});
		});


		$("#deletef").click(function(e) {
			$(".ckb").each(function() {
				var isChecked = $(this).prop("checked");
				// 如果多选框被选中
				console.log(isChecked)
				if(isChecked == true) {
					//获取要删除的父级
					var sc = $(this).parent().parent().parent()
					sc.remove()
				}
			});
		})

		$(function() {
			$(window).scroll(function() {

				var ttp = $('.tttp').offset().top
				console.log("距离顶部的距离"+ttp)
				//获取滚动距离
				var scroll_top = $(document).scrollTop();
				console.log("滑动的距离"+scroll_top)
				if(scroll_top*2 >= ttp) {
					console.log("fixed success")
					// 到达顶部位置，动态的添加元素属性，并给元素添加相应的元素样式
					$(".float-bar").css("position", "")
				} else {
					// 同理，把之前添加的元素移除即可
					$(".float-bar").css("position", "fixed")
				}
			});
		});
		
		$(function(){
	var unspan = $('.unitprice span')
	for (var i=0;i<unspan.length;i++) {
		var vaqq=$(unspan[i])
		var dj=vaqq.text()//获取单价
		var sl=vaqq.parent().parent().parent().parent().find(".quantity").val()//数量
		var hej=dj*sl
		var hejt=vaqq.parent().parent().parent().parent().find(".total span")
		hejt.text(hej)
		console.log(hej)
	}
})

	}

	var sss = $('.delete')
	console.log(sss)
})

		var tuc = $('.top-user-content')
		var user = $('.top-user')
		$(".top-user").mouseover(function() {
			tuc.css('display', 'block')
			user.css('background-color', '#fff')
		}).mouseout(function() {
			tuc.css('display', 'none')
			user.css('background-color', '#f5f5f5')

		});


function CheckedRev() {
	var arr = $(':checkbox');
	for(var i = 0; i < arr.length; i++) {
		arr[i].checked = !arr[i].checked;
	}
	showTotal()
}

function showTotal() {

	var total = 0;
	var number = 0;
	// 1. 获取所有的被勾选的条目复选框！循环遍历
	$(".ckb").each(function() {
		var isChecked = $(this).prop("checked");
		// 如果多选框被选中
		console.log(isChecked)
		if(isChecked == true) {
			// 2. 获取复选框的值，即其他元素的前缀
			var sp = $(this).parent().parent().find(".total span")
			var jg = sp.text()

			total += Number(jg);
			number += 1;
			console.log(total)
		}
	});
	// 5. 把总计显示在总计元素上
	$("#selected").text(number); //toFixed(2)函数的作用是把total保留2位
	$("#totals").text(total.toFixed(2)); //toFixed(2)函数的作用是把total保留2位
}



