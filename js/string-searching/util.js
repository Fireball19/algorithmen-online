function generateString(stringDivId, size) {
	var string = document.getElementById(stringDivId);
	
	// delete old string
	string.innerHTML = '';
    for (var i = 0; i < size; i++) {
        //var value = randomChar();
		var value = "A";
  
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
}

function generatePattern(stringDivId, size) {
	var pattern = document.getElementById(stringDivId);
	
	// delete old pattern
	pattern.innerHTML = '';
    for (var i = 0; i < size; i++) {
        //var value = randomChar();
		var value = "B";
  
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