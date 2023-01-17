
function passGenerator(length) {
    let AllChars = [];
    for (let i=32; i<127; i++) {
        AllChars.push(String.fromCharCode(i));
    }
    let result = '';
    let characters = AllChars.join('')
    let trueChar = characters.trim()
    let charactersLength = trueChar.length;
    for ( i = 0; i < length; i++ ) {
        result += trueChar.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let trueLength = parseInt(prompt('How long do you want your password?'))

console.log(passGenerator(trueLength))






