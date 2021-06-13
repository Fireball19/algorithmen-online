var log = document.getElementById("demo-log");

async function insertionSort(delay = 250) {
	//delete old log
	log.innerHTML = '';

	// generate array with random elements
	generateArray("array");
	
    var array = document.querySelectorAll(".array-element");
	
	spinningDemo();

	var runs = 1;
	
	var n = array.length;
	for (var i = 1; i < n; i++) {
		// log runs
		if (runs > 1) {
			log.innerHTML += '<br>'
		}
		log.innerHTML += '<strong>Durchlauf</strong>: ' + runs;
		log.innerHTML += '<hr>'
		runs++;

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

		// log comparing
		log.innerHTML += '<strong>i: </strong>' + i
	    + '&emsp;<strong>j: </strong>' + j + '&emsp;<strong>Vergleiche</strong>: ' + j + ' > 0 <br/>';
			
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

			// log comparing
			log.innerHTML += '<strong>i: </strong>' + i
			+ '&emsp;<strong>j: </strong>' + j + '&emsp;<strong>Vergleiche</strong>: ' + j + ' > 0 <strong>und</strong> ' 
	 	    + Number(array[j].childNodes[0].innerHTML) + ' < ' + Number(array[j - 1].childNodes[0].innerHTML);

			// log swap
			log.innerHTML += '&emsp;<strong>Tausche</strong>: ' + array[j].childNodes[0].innerHTML + ' und ' + array[j - 1].childNodes[0].innerHTML + '<br/>';
			
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