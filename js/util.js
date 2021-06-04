var array = document.getElementById("array");
var hashtable = document.getElementById("hashtable");
var demoSpinner = document.getElementById("demo-spinner");
var demoSpinnerText = document.getElementById("demo-spinner-text");
var demoBtn = document.getElementById("demo-btn");
var demoBtnText = document.getElementById("demo-btn-text");
  
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

function generateHashtable(size) {
	// delete old hashtable
	hashtable.innerHTML = '';
    for (var i = 0; i < size; i++) {
        // create div for element
        var hashtableElement = document.createElement("div");
  
        // add style and label to element
		hashtableElement.classList.add("hashtable-element");
        hashtableElement.style.height = `${30}px`;
        hashtableElement.style.transform = `translate(${i * 30}px)`;
		var hashtableElementIndex = document.createElement("label");
        hashtableElementIndex.classList.add("hashtable-element-index");
        hashtableElementIndex.innerText = i;
        var hashtableElementLabel = document.createElement("label");
        hashtableElementLabel.classList.add("hashtable-element-id");
        hashtableElementLabel.innerText = "";
  
        hashtableElement.appendChild(hashtableElementLabel);
		hashtableElement.appendChild(hashtableElementIndex);
        hashtable.appendChild(hashtableElement);
    }
}

function randomNumber() {
	return Math.ceil(Math.random() * 100);
}

function mod(x, m) {
    return (x % m + m) % m;
}

function spinningDemo() {
	demoBtn.disabled = true;
	demoBtn.blur();
	demoSpinner.classList.remove("visually-hidden");
	demoSpinnerText.classList.remove("visually-hidden");
	demoBtnText.classList.add("visually-hidden");
}

function stopSpinningDemo() {
	demoBtn.disabled = false;
	demoSpinner.classList.add("visually-hidden");
	demoSpinnerText.classList.add("visually-hidden");
	demoBtnText.classList.remove("visually-hidden");
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