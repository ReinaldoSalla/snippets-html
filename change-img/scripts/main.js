/*
var = simple variable
let = local variable
const = read only variable
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/home.jpg') {
		myImage.setAttribute('src', 'images/car.jpg');
	} else {
		myImage.setAttribute('src', 'images/home.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading  = document.querySelector('h1');

function setUserName() {
	let myName = prompt("Type anything");
	if(!myName || myName === null) {
		myHeading.innerHTML = 'Text: didn\'t type anything';
	} else {
		localStorage.setItem('name', myName) 
		myHeading.innerHTML = 'Text: ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.innerHTML = "Text: " + myName
}

myButton.onclick = function() {
	setUserName();
}