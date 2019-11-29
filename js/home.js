var home = $("#home");
var arr1 = [{
	"width": 379,
	"left": 0,
	"top": 97,
	"opacity": 30,
	"z": 1,
}, {
	"width": 421,
	"left": 120,
	"top": 69,
	"opacity": 60,
	"z": 2,
}, {
	"width": 468,
	"left": 230,
	"top": 38,
	"opacity": 90,
	"z": 3,
}, {
	"width": 520,
	"left": 340,
	"top": 10,
	"opacity": 100,
	"z": 4,
}, {
	"width": 468,
	"left": 492,
	"top": 38,
	"opacity": 90,
	"z": 3,
}, {
	"width": 421,
	"left": 652,
	"top": 69,
	"opacity": 60,
	"z": 2,
}, {
	"width": 379,
	"left": 790,
	"top": 97,
	"opacity": 30,
	"z": 1,
}];
var arr2 = [{
	"width": 379,
	"left": 0,
	"top": 0,
	"opacity": 30,
	"z": 1,
}, {
	"width": 421,
	"left": 120,
	"top": 0,
	"opacity": 60,
	"z": 2,
}, {
	"width": 468,
	"left": 230,
	"top": 0,
	"opacity": 90,
	"z": 3,
}, {
	"width": 520,
	"left": 340,
	"top": 0,
	"opacity": 100,
	"z": 4,
}, {
	"width": 468,
	"left": 492,
	"top": 0,
	"opacity": 90,
	"z": 3,
}, {
	"width": 421,
	"left": 652,
	"top": 0,
	"opacity": 60,
	"z": 2,
}, {
	"width": 379,
	"left": 790,
	"top": 0,
	"opacity": 30,
	"z": 1,
}];
// 第1个旋转相册
var uli1 = home.children[0].children[0].children;
var btn1 = home.children[0].children[1].children;
var b1 = true;

// 第2个旋转相册
var uli2 = home.children[1].children[0].children;
var btn2 = home.children[1].children[1].children;
var box2 = home.children[1];
var b2 = true;

fz(uli1, btn1, b1, arr1);

fz(uli2, btn2, b2, arr2);

function fz(uli, btn, b, arr) {
	//按钮显示与隐藏
	var b = true;
	for (k in btn) {
		btn[k].onclick = function() {
			if (b) {
				b = false;
				fun(this.className == "pre");
			}

		}
	}
	fun();
	// 旋转相册2的自动轮播效果

	//window加载时触发轮播效果
	window.onload = function() {
		var clear = null;//触发前清除定时器
		box2.onmouseover = function() {//鼠标停留在box2时清除定时器
			clearInterval(clear)
		}
		
		LB();
		box2.onmouseout = function() {
			LB();
		}
		
		function LB() {
			clear = setInterval(function() {
				fun();
			}, 1000)
		}
	}
	function fun(flat) {
		if (flat) {
			arr.unshift(arr.pop());
		} else {
			arr.push(arr.shift());
		}
		for (var i = 0; i < uli.length; i++) {
			animate(uli[i], {
				"width": arr[i].width,
				"left": arr[i].left,
				"top": arr[i].top,
				"opacity": arr[i].opacity,
				"zIndex": arr[i].z,
			}, function() {
				b = true
			})
		}
	}
}
