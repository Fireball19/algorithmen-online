async function shakerSort(delay = 250) {
	// generate array with random elements
	generateArray();
	
    var array = document.querySelectorAll(".array-element");
	
	spinningDemo();
	
	var vertauscht;
	var m = -1;
	var n = array.length - 1;
	do {
		vertauscht = false;
		m = m + 1;
		for (var i = m; i < n; i++) {
			// change the color of elements to comparing color
			array[i].style.backgroundColor = "#CC6677";
			array[i + 1].style.backgroundColor = "#CC6677";
	  
			// wait for .25 seconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
	  
			var value1 = Number(array[i].childNodes[0].innerHTML);
			var value2 = Number(array[i + 1].childNodes[0].innerHTML);
	  
			if (value1 > value2) {
				await swap(array[i], array[i + 1]);
				array = document.querySelectorAll(".array-element");
				vertauscht = true;
			}
	  
			// change the color of compared elements to previous color
			array[i].style.backgroundColor = "#88CCEE";
			array[i + 1].style.backgroundColor = "#88CCEE";
		}
		
		// change color of remaining sorted element
		array[n].style.backgroundColor = "#117733";
		
		if (vertauscht == false) {
			break;
		}
		
		vertauscht = false;
		n = n - 1;
		for (var i = n - 1; i > m - 1; i--) {
			// change the color of elements to comparing color
			array[i].style.backgroundColor = "#CC6677";
			array[i + 1].style.backgroundColor = "#CC6677";
	  
			// wait for .25 seconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
	  
			var value1 = Number(array[i].childNodes[0].innerHTML);
			var value2 = Number(array[i + 1].childNodes[0].innerHTML);
	  
			if (value1 > value2) {
				await swap(array[i], array[i + 1]);
				array = document.querySelectorAll(".array-element");
				vertauscht = true;
			}
	  
			// change the color of compared elements to previous color
			array[i].style.backgroundColor = "#88CCEE";
			array[i + 1].style.backgroundColor = "#88CCEE";
		}
		
		// change color of remaining sorted element
		array[m].style.backgroundColor = "#117733";
		
	} while (vertauscht == true);
	
	// change color of remaining sorted elements
	while (n >= m) {
		array[n].style.backgroundColor = "#117733";
		n = n - 1;
	}
	
	stopSpinningDemo();
}