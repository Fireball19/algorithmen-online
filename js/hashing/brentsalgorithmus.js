async function brentsAlgorithmus(delay = 750) {
	// generate hashtable with random elements
	generateHashtable(13);
	
    var hashtable = document.querySelectorAll(".hashtable-element");
	
	spinningDemo();
	
	var array = [];
	for (var i = 0; i < 10; i++) {
		array.push(randomNumber());
	}
	
	for (var j = 0; j < 10; j++) {
		var eingefuegt = false;
		var h0 = mod(array[j], 13);
		var i = h0;
		
		// change the color of elements to comparing color
		hashtable[i].style.backgroundColor = "#CC6677";
	  
		// wait for .75 seconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
			
		if (hashtable[i].childNodes[0].innerHTML == '') {
			hashtable[i].childNodes[0].innerHTML = array[j]; 
			// change the color of compared elements to hashed color
			hashtable[i].style.backgroundColor = "#117733";
			eingefuegt = true;
		} else {
			// change the color of compared elements to previous (hashed) color
			hashtable[i].style.backgroundColor = "#117733";
		}
		
		while (eingefuegt == false) {
			var h1 = 1 + mod(array[j], 11);
			var b0 = mod(i - h1, 13);
		
			// change the color of elements to comparing color
			hashtable[b0].style.backgroundColor = "#CC6677";
				
			// wait for .75 seconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
				
			if (hashtable[b0].childNodes[0].innerHTML == '') {
				hashtable[b0].childNodes[0].innerHTML = array[j]; 
				// change the color of compared elements to hashed color
				hashtable[b0].style.backgroundColor = "#117733";
				eingefuegt = true;
			} else {
				// change the color of compared elements to previous (hashed) color
				hashtable[b0].style.backgroundColor = "#117733";
					
				h1 = 1 + mod(Number(hashtable[i].childNodes[0].innerHTML), 11);
				var b1 = mod(i - h1, 13);
					
				// wait for .75 seconds
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, delay)
				);
					
				if (hashtable[b1].childNodes[0].innerHTML == '') {
					// change the color of elements to comparing color
					hashtable[b1].style.backgroundColor = "#CC6677";

					
					// wait for .75 seconds
					await new Promise((resolve) =>
						setTimeout(() => {
							resolve();
						}, delay)
					);
					
					hashtable[b1].childNodes[0].innerHTML = Number(hashtable[i].childNodes[0].innerHTML); 
					// change the color of compared elements to hashed color
					hashtable[b1].style.backgroundColor = "#117733";
					
					// change the color of elements to comparing color
					hashtable[i].style.backgroundColor = "#CC6677";
					
					// wait for .75 seconds
					await new Promise((resolve) =>
						setTimeout(() => {
							resolve();
						}, delay)
					);
					
					hashtable[i].childNodes[0].innerHTML = array[j]; 
					// change the color of compared elements to hashed color
					hashtable[i].style.backgroundColor = "#117733";
					eingefuegt = true;
				} else {
					// change the color of compared elements to previous (hashed) color
					hashtable[b1].style.backgroundColor = "#117733";
					i = b0;
				}
			}
		}
	}
	
	stopSpinningDemo();
}