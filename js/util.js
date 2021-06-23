var demoSpinner = document.getElementById("demo-spinner");
var demoSpinnerText = document.getElementById("demo-spinner-text");
var demoBtn = document.getElementById("demo-btn");
var demoBtnText = document.getElementById("demo-btn-text");
var demoLogDiv = document.getElementById("demo-log-div");
var demoLogCheckbox = document.getElementById("checkbox-demo-log");

function randomNumber() {
	return Math.ceil(Math.random() * 100);
}

function uniqueRandomNumbers(n) {
	var numbers = [];
		while (numbers.length < n) {
   			var r = randomNumber();
    		if (numbers.indexOf(r) == -1) {
				numbers.push(r);
			}
	}

	return numbers;
}

function randomChar() {
	var chars = ["A", "B", "C", "D", "E", "F", "G",
	"H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
	"R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	return chars[Math.ceil(Math.random() * 25)];
}

function mod(x, m) {
    return (x % m + m) % m;
}

function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

function checkboxDemoLog() {
	demoLogCheckbox.blur();
	if (demoLogCheckbox.checked == true){
		demoLogDiv.classList.remove("visually-hidden");
	} else {
		demoLogDiv.classList.add("visually-hidden");
  }
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