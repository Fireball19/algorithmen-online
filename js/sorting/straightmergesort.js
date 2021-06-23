// variable to count recursive calls to stop spinner at last call
var counter = 0;

async function straightMergeSort() {
	// generate array with random elements
	generateArray("array");
	
	var array = document.querySelectorAll(".array-element");

	spinningDemo();

	var l = 0;
	var r = array.length;
	var s = 1;
	
	while (s < r - l + 1) {
		var ll = l;
		
		while (ll + s <= r) {
			var mm = ll + s;
			var rr = mm + s - 1;
			
			if (rr > r) {
				rr = r;
			}
			
			await merge(array, ll, mm, rr);
			
			ll = rr + 1;
		}
		
		s = s * 2;
	}
	
	// change color of sorted elements
	for (var i = 0; i < array.length; i++) {
		array[i].style.backgroundColor = "#117733";
	}
	
	stopSpinningDemo();
}

async function merge(array, l, m, r, delay = 500) {
	var tmp = [];
	
	for (var i = l; i < r; i++) {
		tmp.push(Number(array[i].childNodes[0].innerHTML));
		// change the color of elements to comparing color
		array[i].style.backgroundColor = "#CC6677";
	}
	
	tmp.sort(compare);
	
	// wait for .5 seconds
	await new Promise((resolve) =>
		setTimeout(() => {
				resolve();
			}, delay)
		);
	
	var j = 0;
	for (var n = l; n < r; n++) {
		array[j].style.backgroundColor = "#88CCEE";
		array[n].childNodes[0].innerHTML = tmp[j];
		j++;
	}
}