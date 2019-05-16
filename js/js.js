var tuc = $('.top-user-content')
var user = $('.top-user')
$(".top-user").mouseover(function() {
	tuc.css('display', 'block')
	user.css('background-color', '#fff')
}).mouseout(function() {
	tuc.css('display', 'none')
	user.css('background-color', '#f5f5f5')

});



var jiag=$(".total span")
console.log(jiag)
$(function(){
	var total=0
	
	$(".total span").each(function() {
		var hq=$(this).text()
		total += Number(hq);
	})
	console.log(total)
	$("#totals").text(total.toFixed(2));
})



//订单结算
//数据请求

$("#submit").on("click", function () {
	console.log(21321231)
	
        var pdData = {
            "products": [{
                    "productId": 1,
                    "eodCount": 2,
                    "eodPrice":14.55
                },
                {
                	"productId": 1,
                    "eodCount": 2,
                    "eodPrice":14.55
                },
                {
                	"productId": 1,
                    "eodCount": 2,
                    "eodPrice":14.55
                }
            ]
        }
        $.ajax({
            type: "post",
            contentType : "application/json",
            url: "http://192.168.1.5:9090/mCore/closing.do",
            data: JSON.stringify(pdData),
            success:function(str){
                console.log("请求成功");
                console.log(str)
            },
            error:function(err){
                console.log(err);
            }

        })

    });