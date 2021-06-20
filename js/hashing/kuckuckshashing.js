async function kuckucksHashing(delay = 750) {
	// generate hashtable with random elements
	generateHashtable("hashtable1", 13);
	generateHashtable("hashtable2", 13);
	
	var hashtable1 = document.getElementById('hashtable1').querySelectorAll(".hashtable-element");
	var hashtable2 = document.getElementById('hashtable2').querySelectorAll(".hashtable-element");

	spinningDemo();
	
	var array = uniqueRandomNumbers(10);

	for (var j = 0; j < 10; j++) {
		var eingefuegt = false;
		var k = array[j];

		while (eingefuegt == false) {
			var h0 = mod(k, 13);
			var h1 = 1 + mod(k, 11);
			var tmp;
			
			// change the color of elements to comparing color
			hashtable1[h0].style.backgroundColor = "#CC6677";
		  
			// wait for .75 seconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			// change the color of compared elements to hashed color
			hashtable1[h0].style.backgroundColor = "#117733";
	
			tmp = hashtable1[h0].childNodes[0].innerHTML;
			hashtable1[h0].childNodes[0].innerHTML = k;
			k = tmp;
	
			if (k == '') {
				eingefuegt = true;
				continue;
			}
	
			// change the color of elements to comparing color
			hashtable2[h1].style.backgroundColor = "#CC6677";
		  
			// wait for .75 seconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			// change the color of elements to comparing color
			hashtable2[h1].style.backgroundColor = "#117733";

			tmp = hashtable2[h1].childNodes[0].innerHTML;
			hashtable2[h1].childNodes[0].innerHTML = k;
			k = tmp;
	
			if (k == '') {
				eingefuegt = true;
				continue;
			}
		}
	}

	stopSpinningDemo();
}