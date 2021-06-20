async function doubleHashing(delay = 750) {
	// generate hashtable with random elements
	generateHashtable("hashtable", 13);
	
    var hashtable = document.querySelectorAll(".hashtable-element");
	
	spinningDemo();
	
	var array = uniqueRandomNumbers(10);
	
	for (var j = 0; j < 10; j++) {
		var eingefuegt = false;
		var counter = 0;
		while (eingefuegt == false) {
			var h0 = mod(array[j], 13);
			var h1 = 1 + mod(array[j], 11);
			var pos = mod(h0 - counter * h1, 13);
		
			// change the color of elements to comparing color
			hashtable[pos].style.backgroundColor = "#CC6677";
	  
			// wait for .75 seconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
			
			if (hashtable[pos].childNodes[0].innerHTML == '') {
				hashtable[pos].childNodes[0].innerHTML = array[j]; 
				// change the color of compared elements to hashed color
				hashtable[pos].style.backgroundColor = "#117733";
				eingefuegt = true;
			} else {
				// change the color of compared elements to previous (hashed) color
				hashtable[pos].style.backgroundColor = "#117733";
				counter++;
			}
		}
	}
	
	stopSpinningDemo();
}