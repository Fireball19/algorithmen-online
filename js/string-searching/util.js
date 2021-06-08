function generateString(stringDivId, size, pattern) {
	var string = document.getElementById(stringDivId);
	
	// delete old string
	string.innerHTML = '';
	
    for (var i = 0; i < size; i++) {
        var value = randomChar();
  
        // create div for element
        var stringElement = document.createElement("div");
  
        // add style and label to element
		stringElement.classList.add("string-element");
        stringElement.style.height = `${30}px`;
        stringElement.style.transform = `translate(${i * 30}px)`;
        var stringElementLabel = document.createElement("label");
        stringElementLabel.classList.add("string-element-id");
        stringElementLabel.innerText = value;
  
        stringElement.appendChild(stringElementLabel);
        string.appendChild(stringElement);
    }
	
	var random = Math.ceil(Math.random() * size);
	var string = document.querySelectorAll(".string-element");
	var m = pattern.length;
	
	var counter = 0;
	for (var i = random; counter < m && i < size; i++) {
		string[i].childNodes[0].innerHTML = pattern[counter];
		counter++;
	}
}

function generatePattern(stringDivId, size, string) {
	var pattern = document.getElementById(stringDivId);
	
	// delete old pattern
	pattern.innerHTML = '';
    for (var i = 0; i < size; i++) {
		var value = string[i];
  
        // create div for element
        var patternElement = document.createElement("div");
  
        // add style and label to element
		patternElement.classList.add("pattern-element");
        patternElement.style.height = `${30}px`;
        patternElement.style.transform = `translate(${i * 30}px)`;
        var patternElementLabel = document.createElement("label");
        patternElementLabel.classList.add("pattern-element-id");
        patternElementLabel.innerText = value;
  
        patternElement.appendChild(patternElementLabel);
        pattern.appendChild(patternElement);
    }
}