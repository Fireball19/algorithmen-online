function generateHashtable(hashtableDivId, size) {
	var hashtable = document.getElementById(hashtableDivId);
	
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