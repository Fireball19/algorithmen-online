async function knuthMorrisPratt(delay = 250) {
	// generate array with random elements
	generatePattern("pattern", 4, "DEMO");
	generateString("string", 15, "DEMO");
	
    var string = document.querySelectorAll(".string-element");
	var pattern = document.querySelectorAll(".pattern-element");
	var ausgabe = document.getElementById("demo-ausgabe");
	var nextTitle = document.getElementById("next-title");
	ausgabe.innerHTML = "Ausgabe: ";
	nextTitle.innerHTML = "Next-Array:"
	
	var n = string.length;
	var m = pattern.length;
	var next = computeNextArray("DEMO", m);

	generateNextArray("next", next)

	spinningDemo();
	
	if ((m > 0) && (n >= m)) {
		var i = 0;
		var j = 0;
		
		while ((i < n) && (j < m)) {
			if (j != -1) {
				// change the color of elements to comparing color
				string[i].style.backgroundColor = "#CC6677";
				pattern[j].style.backgroundColor = "#CC6677";
				
				// wait for .75 seconds
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, delay)
				);
				
				// change the color of compared elements to previous color
				string[i].style.backgroundColor = "#88CCEE";
				pattern[j].style.backgroundColor = "#88CCEE";
			}

			if ((j == -1) || (string[i].childNodes[0].innerHTML == pattern[j].childNodes[0].innerHTML)) {
				i++;
				j++;
			} else {
				j = next[j];
			}
		}

		if (j == m) {
			ausgabe.innerHTML = "Ausgabe: Pattern gefunden bei Index: " + (i - m);
			stopSpinningDemo();
			return;
		}
	}
	
	ausgabe.innerHTML = "Ausgabe: " + n + " (Pattern nicht gefunden)";
	
	stopSpinningDemo();
}

function computeNextArray(pattern, m) {
	var next = [];

	if (m > 0) {
		var i = 0;
		var j = -1;
		next[0] = -1;

		while (i < m - 1) {
			if ((j == -1) || (pattern[i] == pattern[j])) {
				i++;
				j++;
				next[i] = j;
			} else {
				j = next[j];
			}
		}
	}

	return next;
}