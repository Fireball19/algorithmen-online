var array = document.getElementById("array");
  
function generateArray() {
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

function randomNumber() {
	return Math.ceil(Math.random() * 100);
}
  
function swap(element1, element2) {
    return new Promise((resolve) => {
		var tmp = element1.style.transform;
        element1.style.transform = element2.style.transform;
        element2.style.transform = tmp;

        window.requestAnimationFrame(function() {
            // wait for 0.5 seconds
            setTimeout(() => {
                // swap node element1 and element2
				var tmp = document.createElement("div");
				element1.parentNode.insertBefore(tmp, element1);
				element2.parentNode.insertBefore(element1, element2);
				tmp.parentNode.insertBefore(element2, tmp);
				tmp.parentNode.removeChild(tmp);
                resolve();
            }, 500);
        });
    });
}