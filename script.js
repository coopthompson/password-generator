function passLength() {
    return parseInt(prompt('How long do you want your password to be?'));
}

let length = passLength()
const allChar = ['1','!', '2', '@','3','#','4','$','5','%','6','^','7','&','8','*',
'9','(',')','-','_','+','=','q','Q','w','W','e','E','r','R','T','t','y','Y'
,'u','U','i','I','o','O','P','p','[',']','{','}','a','A','s','S','d','D','f',
'F','g','G','h','H','j','J','k','K','l','L',';',':','"',",",'z','Z','x','X',
'c','`','~','v','b','B','n','N','m','M',',','<','>','.','>','/','?','\\','|'];
const randomChar = allChar[Math.floor(Math.random() * allChar.length)];

console.log(randomChar)



