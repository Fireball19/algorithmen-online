function generateArray(arrayDivId) {
	var array = document.getElementById(arrayDivId);
	
	// delete old array
	array.innerHTML = '';
    for (var i = 0; i < 15; i++) {
        var value = randomNumber();
  
        // create div for element
        var arrayElement = document.createElement("div");
  
        // add style and label to element
		arrayElement.classList.add("array-element");
        arrayElement.style.height = `${30}px`;
        arrayElement.style.transform = `translate(${i * 30}px)`;
        var arrayElementLabel = document.createElement("label");
        arrayElementLabel.classList.add("array-element-id");
        arrayElementLabel.innerText = value;
  
        arrayElement.appendChild(arrayElementLabel);
        array.appendChild(arrayElement);
    }
}