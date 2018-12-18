var lis = document.querySelectorAll(".cats-item");
console.info(lis);
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseenter = function (argument) {
		console.info(this);
		this.className = "cats-item on";
	};

	lis[i].onmouseleave = function (argument) {
		console.info(this);
		this.className = "cats-item";
	}
}