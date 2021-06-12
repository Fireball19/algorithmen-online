var log = document.getElementById("demo-log");

async function selectionSort(delay = 250) {
	//delete old log
	log.innerHTML = '';

	// generate array with random elements
	generateArray("array");
	
    var array = document.querySelectorAll(".array-element");
	
	spinningDemo();

	var runs = 1;
	
	var n = array.length;
	var m = 0;
	for (var i = 0; i < n - 1; i++) {
		// log runs
		if (runs > 1) {
			log.innerHTML += '<br>'
		}
		log.innerHTML += '<strong>Durchlauf</strong>: ' + runs;
		log.innerHTML += '<hr>'
		runs++;

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

			// log comparing
			log.innerHTML += '<strong>i: </strong>' + i + '&emsp;<strong>m: </strong>' + m + '&emsp;<strong>Vergleiche</strong>: ' + value1 + ' < ' + value2 + '<br/>';

			if (value1 < value2) {
				m = j;
			}
		}

		// log m != i
		log.innerHTML += '<strong>i: </strong>' + i + '&emsp;<strong>m: </strong>' + m + '&emsp;<strong>Vergleiche</strong>: ' + m + ' != ' + i;

		if (m != i) {
			// log swap
			log.innerHTML += '&emsp;<strong>Tausche</strong>: ' + array[i].childNodes[0].innerHTML + ' und ' + array[m].childNodes[0].innerHTML;

			await swap(array[i], array[m]);
			array = document.querySelectorAll(".array-element");
		}

		// next line in log
		log.innerHTML += '<br/>';
		
		array[i].style.backgroundColor = "#117733";
	}
	
	// change color of remaining sorted element
	array[n - 1].style.backgroundColor = "#117733";
	
	stopSpinningDemo();
}