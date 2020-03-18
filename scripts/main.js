let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vanilla.jpg') {
        myImage.setAttribute('src', 'images/vanille2.webp');
    } else {
        myImage.setAttribute('src', 'images/vanilla.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName || myName === null){
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Gewürzvanille ist cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Gewürzvanille ist cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
