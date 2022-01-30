const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

  let arrayDecode = [];

  for (let key of expr.match(/[0-9*]{1,10}/g))
  {
    if (key === '**********') 
    {
      key = arrayDecode.push(" ")
    } 
    else 
    {
      let letterDecoder = [];
      const array = key.toString().match(/[0-9*]{1,2}/g)
      for (let keys of array) 
      {
        if (keys === '10') 
        {
          keys = letterDecoder.push('.');
        }
        else if (keys === '11')
        {
          keys = letterDecoder.push('-');
        }
      }
    let arraySpace = MORSE_TABLE[letterDecoder.join("")];
    arrayDecode.push(arraySpace);
    }
  }
  return arrayDecode.join('')
}

module.exports = {
    decode
}