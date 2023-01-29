const slider = document.getElementById("myRange");
const output = document.querySelector(".slideDisplay");
const passwordDisplay = document.querySelector(".displayBox");
const numberCheck = document.querySelector("#numbers");
const capitalCheck = document.querySelector("#capitalLetters");
const specialCheck = document.querySelector("#specialCharacters");
const allCheck = document.querySelector(".allButton")
const passwordContents = document.querySelector(".passwordContents");
const checkBoxes = document.querySelectorAll(".checkBox")
const copyButton = document.querySelector(".copyButton")


function generatePass(length) {
    let AllChars = [];
    if (capitalCheck.checked === true) {
        for (let i=65; i<=90; i++) {
            AllChars.push(String.fromCharCode(i));
        };
    };
    if (numberCheck.checked === true) {
        for (let i=48; i<=57; i++) {
            AllChars.push(String.fromCharCode(i));
        };
    };
    if (specialCheck.checked === true) {
        for (let i=32; i<=47; i++) {
            AllChars.push(String.fromCharCode(i));
        };
        for (let i=58; i<=64; i++) {
            AllChars.push(String.fromCharCode(i));
        };
        for (let i=91; i<=96; i++) {
            AllChars.push(String.fromCharCode(i));
        };
        for (let i=123; i<127; i++) {
            AllChars.push(String.fromCharCode(i));
        };
    }
    for (let i=97; i<=122; i++) {
        AllChars.push(String.fromCharCode(i));
    };
    let result = '';
    let characters = AllChars.join('')
    let charactersLength = characters.length;
    for ( i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    };
    return result;
};

slider.addEventListener('mouseover', function changeOutputText() {
    output.textContent = this.value
})

slider.addEventListener('click', function recordPasswordLength() {
    slider.oninput = function() {
        output.textContent = this.value;
    };
    output.textContent = slider.value;
    let trueLength = output.textContent;
    passwordDisplay.textContent = generatePass(trueLength);
});

let numbVal = 0
let capVal = 0
let specVal = 0
let allVal = 0
let newPass = ''


checkBoxes.forEach(checkBox => 
    checkBox.addEventListener('change', function() { 
        if (capitalCheck.checked === true && newPass.search(', capital letters') === -1 && capVal <= 0) {
            capVal++;
            newPass = passwordContents.textContent.concat(', capital letters');
            passwordContents.textContent = newPass;
        } else if (capitalCheck.checked === false && newPass.search(', capital letters') > -1) {
            newPass = passwordContents.textContent.replace(', capital letters','')
            passwordContents.textContent = newPass;
            capVal = 0
        }
        if (numberCheck.checked === true && newPass.search(', numbers') === -1 && numbVal <= 0) {
            numbVal++;
            newPass = passwordContents.textContent.concat(', numbers');
            passwordContents.textContent = newPass;
        } else if (numberCheck.checked === false && newPass.search(', numbers') > -1) {
            newPass = passwordContents.textContent.replace(', numbers','')
            passwordContents.textContent = newPass;
            numbVal = 0;
        }
        if (specialCheck.checked === true && newPass.search(', special characters') === -1 && specVal <= 0) {
            specVal++;
            newPass = passwordContents.textContent.concat(', special characters');
            passwordContents.textContent = newPass;
        } else if (specialCheck.checked === false && newPass.search(', special characters') > -1) {
            newPass = passwordContents.textContent.replace(', special characters','')
            passwordContents.textContent = newPass;
            specVal = 0
        }
}));

allCheck.addEventListener('click', function() {
    if (newPass.search(', special characters') === -1 || newPass.search(', capital letters') === -1 || newPass.search(', numbers') === -1) {
        specialCheck.checked = true;
        numberCheck.checked = true;
        capitalCheck.checked = true;
        newPass = 'Password contains: lowercase letters, capital letters, numbers, special characters';
        passwordContents.textContent = newPass;
        capVal++
        numbVal++
        specVal++
    };
});
    
copyButton.addEventListener('click', function() {
    if (passwordDisplay.textContent.length < 3) {
            return;
    };
    navigator.clipboard.writeText(passwordDisplay.textContent);
    alert('Copied to clipboard!');
});

    








