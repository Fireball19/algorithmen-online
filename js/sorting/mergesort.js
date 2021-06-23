// variable to count recursive calls to stop spinner at last call
var counter = 0;

async function mergeSort() {
	// generate array with random elements
	generateArray("array");
	
	var array = document.querySelectorAll(".array-element");

	spinningDemo();

	var l = 0;
	var r = array.length;
	mergeSortImpl(array, l, r);
}

async function mergeSortImpl(array, l, r, delay = 500) {
	counter++;
	
	if (l < r) {
		var m = Math.floor(((l + r) / 2));
		
		await mergeSortImpl(array, l, m);
		await mergeSortImpl(array, m + 1, r);
		
		await merge(array, l, m + 1, r);
	}
	
	counter--;
	if (counter == 0) {
		stopSpinningDemo();
	}
}

async function merge(array, l, m, r, delay = 500) {
	var tmp = [];
	
	for (var i = l; i < r; i++) {
		tmp.push(Number(array[i].childNodes[0].innerHTML));
		// change the color of elements to comparing color
		array[i].style.backgroundColor = "#CC6677";
	}
	
	tmp.sort(compare);
	console.log(tmp);
	
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