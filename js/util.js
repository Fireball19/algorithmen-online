var demoSpinner = document.getElementById("demo-spinner");
var demoSpinnerText = document.getElementById("demo-spinner-text");
var demoBtn = document.getElementById("demo-btn");
var demoBtnText = document.getElementById("demo-btn-text");

function randomNumber() {
	return Math.ceil(Math.random() * 100);
}

function randomChar() {
	return String.fromCharCode(Math.ceil(Math.random() * 65));
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