async function heapSort() {
	// generate array with random elements
	generateArray();

	var array = document.querySelectorAll(".array-element");
	
	var n = array.length;
	
	spinningDemo();
	
	await heapSortImpl(array, n);
	
	stopSpinningDemo();
}

async function heapSortImpl(array, n, delay = 250) {
	for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
		//versickere(array, i, n - 1);
		var m = n - 1;
		var k = i;
		while (2 * k + 1 <= m) {
			var j = 2 * k + 1;
		
			if ((2 * k + 2 <= m) && (Number(array[2 * k + 1].childNodes[0].innerHTML)
				< Number(array[2 * k + 2].childNodes[0].innerHTML))) {
				j = 2 * k + 2;
			}
			
			var value1 = Number(array[k].childNodes[0].innerHTML);
			var value2 = Number(array[j].childNodes[0].innerHTML);
			
			if (value1 < value2) {
				// wait for .25 seconds
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, delay)
				);
				
				await swap(array[k], array[j]);
				array = document.querySelectorAll(".array-element");
				k = j;
			}
			
			else {
				k = m;
			}
		}
	}
	
	for (var i = n - 1; i > 0; i--) {
		// wait for .25 seconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
		await swap(array[i], array[0]);
		
		array[0].style.backgroundColor = "#117733";
		
		array = document.querySelectorAll(".array-element");
		
		//await versickere(array, 0, i - 1);
		var m = i - 1;
		var k = 0;
		while (2 * k + 1 <= m) {
			var j = 2 * k + 1;
			
			if ((2 * k + 2 <= m) && (Number(array[2 * k + 1].childNodes[0].innerHTML)
				< Number(array[2 * k + 2].childNodes[0].innerHTML))) {
				j = 2 * k + 2;
			}
				
			var value1 = Number(array[k].childNodes[0].innerHTML);
			var value2 = Number(array[j].childNodes[0].innerHTML);
				
			if (value1 < value2) {
				// wait for .25 seconds
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, delay)
				);
					
				await swap(array[k], array[j]);
				array = document.querySelectorAll(".array-element");
				k = j;
			}
				
			else {
				k = m;
			}
		}
	}
	
	array[0].style.backgroundColor = "#117733";
}