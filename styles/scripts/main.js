 // alert('Warning, this is a popup alert!!!');
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }

  // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 foxImage.onclick = sayOuch;