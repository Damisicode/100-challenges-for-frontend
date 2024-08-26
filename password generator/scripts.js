'use strict'


// querying selectors

const password = document.querySelector('.password-text');
const submit = document.querySelector("button");
const copyPassword = document.querySelector('#copy-password');
const newPassword = document.querySelector('#new-password');

let passwordLength = document.querySelector("#char-length").value;
let uppercase = document.querySelector("#uppercase").checked;
let lowercase = document.querySelector("#lowercase").checked;
let number = document.querySelector("#numbers").checked;
let symbol = document.querySelector("#symbols").checked;

console.log(passwordLength, uppercase, lowercase, symbol, number);

// Creating an Integer array from 0 to 9
const numArr = []
for (let i = 0; i<10; i++) {
    numArr.push(i);
}

console.log(`The possible integer values are: ${numArr}`);

// Creating a Character array for the lowercase values
const lowercaseArr = []
for (let i = 0; i<26; i++) {
    lowercaseArr.push(String.fromCharCode(65+i));
}

console.log(`The possible lowercase character values are: ${lowercaseArr}`);

// Creating a Character array for the uppercase values
const uppercaseArr = []
for (let i = 0; i<26; i++) {
    uppercaseArr.push(String.fromCharCode(97+i));
}

console.log(`The possible uppercase character values are: ${uppercaseArr}`);

// Creating a Character array for the symbols
const symbolArr = []
for (let i = 0; i<10; i++) {
    symbolArr.push(String.fromCharCode(33+i));
}

console.log(`The possible symbol character values are: ${symbolArr}`);

document.querySelector("#char-length").addEventListener('input', function () {
    document.querySelector('.counter').textContent = this.value;
})

const passwordGenerator = function () {
    
    passwordLength = document.querySelector("#char-length").value;
    let uppercase = document.querySelector("#uppercase").checked;
    let lowercase = document.querySelector("#lowercase").checked;
    let number = document.querySelector("#numbers").checked;
    let symbol = document.querySelector("#symbols").checked;

    console.log(passwordLength, uppercase, lowercase, symbol, number);

    const passwordGeneralArr = []
    uppercase ? passwordGeneralArr.push(...uppercaseArr) : console.log("Uppercase Characters not wanted in the password");
    lowercase ? passwordGeneralArr.push(...lowercaseArr) : console.log("Lowercase Characters not wanted in the password");
    number ? passwordGeneralArr.push(...numArr) : console.log("Numbers not wanted in the password");
    symbol ? passwordGeneralArr.push(...symbolArr) : console.log("symbolic Characters not wanted in the password");

    console.log(passwordGeneralArr);
    
    const passwordArr = [];
    for (let i = 0; i<passwordLength; i++) {
        passwordArr.push(passwordGeneralArr[Math.trunc(Math.random() * passwordGeneralArr.length)]);
    }

    console.log(`Here is the list of the generated password: ${passwordArr}`);
    const passwordStr = passwordArr.join('');
    console.log(`Here is the generated password: ${passwordStr}`);
    password.textContent = passwordStr;
}

const copyToClipboard = function (text) {
    window.focus();

    // Using the Clipboard API
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

submit.addEventListener('click', passwordGenerator);
newPassword.addEventListener('click', passwordGenerator);
copyPassword.addEventListener('click', copyToClipboard(password.textContent));