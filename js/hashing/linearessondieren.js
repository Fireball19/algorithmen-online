async function linearesSondieren(delay = 750) {
	// generate hashtable with random elements
	generateHashtable(15);
	
    var hashtable = document.querySelectorAll(".hashtable-element");
	
	spinningDemo();
	
	var array = [];
	for (var i = 0; i < 15; i++) {
		array.push(randomNumber());
	}
	
	for (var j = 0; j < 10; j++) {
		var eingefuegt = false;
		var counter = 0;
		while (eingefuegt == false) {
			var pos = mod((array[j] + counter), 15);
		
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
				counter--;
			}
		}
	}
	
	stopSpinningDemo();
}