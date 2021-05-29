function quickSort() {
	// generate array with random elements
	generateArray();
	
	var array = document.querySelectorAll(".array-element");
	var l = 0;
	var r = array.length - 1;
	quickSortImpl(array, l, r);
}

async function quickSortImpl(array, l, r, delay = 250) {
	if (l < r) {
		var p = r;
		var i = l;
		var j = r - 1;
		
		array[p].style.backgroundColor = "#DDCC77";
		
		do {
			while ((i <= j) && (Number(array[i].childNodes[0].innerHTML) <= Number(array[p].childNodes[0].innerHTML))) {
				i++;
			}
			
			while ((i <= j) && (Number(array[j].childNodes[0].innerHTML) >= Number(array[p].childNodes[0].innerHTML))) {
				j--;
			}
			
			if (i < j) {
				await swap(array[i], array[j]);
				array = document.querySelectorAll(".array-element");
				i++;
				j--;
			}
		} while (i <= j);
		// wait for .25 seconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
		
		array[p].style.backgroundColor = "#88CCEE";
		await swap(array[i], array[r]);
		array[r].style.backgroundColor = "#117733";
		array = document.querySelectorAll(".array-element");
		
		quickSortImpl(array, l, i - 1);
		quickSortImpl(array, i + 1, r);
	}
	
	else {
		array[l].style.backgroundColor = "#117733";
	}
}