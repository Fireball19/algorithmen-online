async function insertionSort(delay = 250) {
	// generate array with random elements
	generateArray("array");
	
    var array = document.querySelectorAll(".array-element");
	
	spinningDemo();
	
	var n = array.length;
	for (var i = 1; i < n; i++) {
		var j = i;
		
		// change the color of elements to comparing color
		array[j].style.backgroundColor = "#CC6677";
		array[j - 1].style.backgroundColor = "#CC6677";
		
		// wait for .25 seconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
		
		// change the color of compared elements to previous color
		array[j].style.backgroundColor = "#88CCEE";
		array[j - 1].style.backgroundColor = "#88CCEE";
			
		while ((j > 0) && (compare(array, j))) {
			// change the color of elements to comparing color
			array[j].style.backgroundColor = "#CC6677";
			array[j - 1].style.backgroundColor = "#CC6677";
			
			// wait for .25 seconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
			
			// change the color of compared elements to previous color
			array[j].style.backgroundColor = "#88CCEE";
			array[j - 1].style.backgroundColor = "#88CCEE";
			
			await swap(array[j], array[j - 1]);
			array = document.querySelectorAll(".array-element");
			
			j--;
		}
	}
	
	// change color of sorted elements
	for (var i = 0; i < n; i++) {
		array[i].style.backgroundColor = "#117733";
	}
	
	stopSpinningDemo();
}

function compare(a, i) {
	if (Number(a[i].childNodes[0].innerHTML) < Number(a[i - 1].childNodes[0].innerHTML)) {
		return true;
	}
	
	return false;
}