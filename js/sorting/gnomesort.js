var log = document.getElementById("demo-log");

async function gnomeSort(delay = 250) {
	//delete old log
	log.innerHTML = '';

	// generate array with random elements
	generateArray("array");
	
    var array = document.querySelectorAll(".array-element");
	
	spinningDemo();

	var runs = 1;
	
	var n = array.length;
	var i = 0;
	while (i < n) {
		// log runs
		if (runs > 1) {
			log.innerHTML += '<br>'
		}
		log.innerHTML += '<strong>Durchlauf</strong>: ' + runs;
		log.innerHTML += '<hr>'
		runs++;

		// log comparing
		log.innerHTML += '<strong>i: </strong>' + i + '&emsp;<strong>Vergleiche</strong>: ' + i + ' == 0<br/>';
		
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

		// log comparing
		log.innerHTML += '<strong>i: </strong>' + i + '&emsp;<strong>Vergleiche</strong>: ' + value1 + ' >= ' + value2;
		
		if (value1 >= value2) {
			i++;
		} else {
			// log swap
			log.innerHTML += '&emsp;<strong>Tausche</strong>: ' + value1 + ' und ' + value2;

			await swap(array[i], array[i - 1]);
			array = document.querySelectorAll(".array-element");
			i--;
		}

		// next line in log
		log.innerHTML += '<br/>';
	}
	
	// change color of sorted elements
	for (var j = 0; j < n; j++) {
		array[j].style.backgroundColor = "#117733";
	}
	
	stopSpinningDemo();
}