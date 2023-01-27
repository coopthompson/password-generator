const slider = document.getElementById("myRange");
const output = document.querySelector(".slideDisplay");
const passwordDisplay = document.querySelector(".displayBox");





function generatePass(length) {
    let AllChars = [];
    for (let i=33; i<127; i++) {
        AllChars.push(String.fromCharCode(i));
    }
    let result = '';
    let characters = AllChars.join('')
    let charactersLength = characters.length;
    for ( i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


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
//let trueLength = output.textContent;








