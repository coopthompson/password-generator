const slider = document.getElementById("myRange");
const output = document.querySelector(".slideDisplay");
const passwordDisplay = document.querySelector(".displayBox");
const numberCheck = document.querySelector("#numbers");
const capitalCheck = document.querySelector("#capitalLetters");
const specialCheck = document.querySelector("#specialCharacters");





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








