async function selectionSort(delay = 250) {
	// generate array with random elements
	generateArray();
	
    var array = document.querySelectorAll(".array-element");
	
	var n = array.length;
	var m = 0;
	for (var i = 0; i < n - 1; i++) {
		m = i;
		for (var j = i + 1; j < n; j++) {
			// change the color of elements to comparing color
			array[j].style.backgroundColor = "#CC6677";
			array[m].style.backgroundColor = "#DDCC77";
			
			// wait for .25 seconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
			
			// change the color of compared elements to previous color
			array[j].style.backgroundColor = "#88CCEE";
			array[m].style.backgroundColor = "#88CCEE";
			
			var value1 = Number(array[j].childNodes[0].innerHTML);
			var value2 = Number(array[m].childNodes[0].innerHTML);
			if (value1 < value2) {
				m = j;
			}
		}

		if (m != i) {
			await swap(array[i], array[m]);
			array = document.querySelectorAll(".array-element");
		}
		
		array[i].style.backgroundColor = "#117733";
	}
	
	// change color of remaining sorted element
	array[n - 1].style.backgroundColor = "#117733";
}