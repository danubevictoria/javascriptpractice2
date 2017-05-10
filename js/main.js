// http://codifyacademy.com/wk9/

$(document).ready(function (){
	// set the background color of the box to red
	document.getElementById('box').setAttribute("style", "background-color: red");
	
	// create an h1 element
	var h1 = document.createElement("h1");
	// set h1 text to hi
	h1.innerHTML = 'Hi';
	// add h1 to the h1div
	document.getElementById('h1div').appendChild(h1);

	// create an h1 element
	var header = document.createElement("h1");
	// create a textNode with text hello
	var textNode = document.createTextNode("Hello");
	// adds the text from textNode to header
	header.appendChild(textNode);
	// add the header h1 element to the div3
	document.getElementById('div3').appendChild(header);

	// setImg sets the src and the alt attribute
	function setImg() {
		document.getElementById('img').src = "https://s-media-cache-ak0.pinimg.com/originals/72/eb/05/72eb05876b1c1ad731bc3f21074ff6ae.png"
		document.getElementById('img').setAttribute('alt', "Bunny");
	}

	// when button is clicked, the img properties will be set
	$('#button').click(function () {
		setImg();
	})
});