var log = document.getElementById("demo-log");

async function shakerSort(delay = 250) {
	//delete old log
	log.innerHTML = '';

	// generate array with random elements
	generateArray("array");
	
    var array = document.querySelectorAll(".array-element");
	
	spinningDemo();

	var runs = 1;
	
	var vertauscht;
	var m = -1;
	var n = array.length - 1;
	do {
		// log runs
		if (runs > 1) {
			log.innerHTML += '<br>'
		}
		log.innerHTML += '<strong>Durchlauf</strong>: ' + runs;
		log.innerHTML += '<hr>'
		runs++;

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

			// log comparing
			log.innerHTML += '<strong>i: </strong>' + i + '&emsp;<strong>Vergleiche</strong>: ' + value1 + ' > ' + value2;
	  
			if (value1 > value2) {
				// log swap
				log.innerHTML += '&emsp;<strong>Tausche</strong>: ' + value1 + ' und ' + value2;

				await swap(array[i], array[i + 1]);
				array = document.querySelectorAll(".array-element");
				vertauscht = true;
			}

			// next line in log
			log.innerHTML += '<br/>';
	  
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

			// log comparing
			log.innerHTML += '<strong>i: </strong>' + i + '&emsp;<strong>Vergleiche</strong>: ' + value1 + ' > ' + value2;
	  
			if (value1 > value2) {
				// log swap
				log.innerHTML += '&emsp;<strong>Tausche</strong>: ' + value1 + ' und ' + value2;

				await swap(array[i], array[i + 1]);
				array = document.querySelectorAll(".array-element");
				vertauscht = true;
			}

			// next line in log
			log.innerHTML += '<br/>';
	  
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