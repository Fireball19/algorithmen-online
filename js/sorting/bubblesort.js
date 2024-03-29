var log = document.getElementById("demo-log");

async function bubbleSort(delay = 250) {
	//delete old log
	log.innerHTML = '';
	
	// generate array with random elements
	generateArray("array");
	
    var array = document.querySelectorAll(".array-element");
	
	spinningDemo();
	
	var runs = 1;
	
	var vertauscht;
	var n = array.length;
	do {
		// log runs
		if (runs > 1) {
			log.innerHTML += '<br>'
		}
		log.innerHTML += '<strong>Durchlauf</strong>: ' + runs;
		log.innerHTML += '<hr>'
		runs++;
		
		vertauscht = false;
		for (var i = 0; i < n - 1; i++) {
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
			// change the color of sorted element
			array[n - 1].style.backgroundColor = "#117733";
			n = n - 1;
	} while (vertauscht == true);
	
	// change color of remaining sorted elements
	while (n > 0) {
		array[n - 1].style.backgroundColor = "#117733";
		n = n - 1;
	}
	
	stopSpinningDemo();
}