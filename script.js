const slider = document.getElementById("myRange");
const output = document.querySelector(".slideDisplay");
const passwordDisplay = document.querySelector(".displayBox");
passwordDisplay.textContent = ''
output.textContent = slider.value;

slider.oninput = function() {
    output.textContent = this.value;
  }


function generatePass(length) {
    let AllChars = [];
    for (let i=32; i<127; i++) {
        AllChars.push(String.fromCharCode(i));
    }
    let result = '';
    let characters = AllChars.join('')
    let trueCharacters = characters.trim()
    let charactersLength = trueCharacters.length;
    for ( i = 0; i < length; i++ ) {
        result += trueCharacters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


slider.addEventListener('click', function recordPasswordLength() {
    let trueLength = output.textContent;
    passwordDisplay.textContent = generatePass(trueLength);
});
//let trueLength = output.textContent;








