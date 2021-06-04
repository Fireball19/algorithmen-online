async function gnomeSort(delay = 250) {
	// generate array with random elements
	generateArray();
	
    var array = document.querySelectorAll(".array-element");
	
	var n = array.length;
	var i = 0;
	while (i < n) {
		
		if (i == 0) {
			i++;
		}
		
		// change the color of elements to comparing color
		array[i].style.backgroundColor = "#CC6677";
		array[i - 1].style.backgroundColor = "#CC6677";
	  
		// wait for .25 seconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
		
		var value1 = Number(array[i].childNodes[0].innerHTML);
		var value2 = Number(array[i - 1].childNodes[0].innerHTML);
		
		// change the color of compared elements to previous color
		array[i].style.backgroundColor = "#88CCEE";
		array[i - 1].style.backgroundColor = "#88CCEE";
		
		if (value1 >= value2) {
			i++;
		} else {
			await swap(array[i], array[i - 1]);
			array = document.querySelectorAll(".array-element");
			i--;
		}
	}
	
	// change color of sorted elements
	for (var j = 0; j < n; j++) {
		array[j].style.backgroundColor = "#117733";
	}
}