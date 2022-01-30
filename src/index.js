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
    let wordsInString = '';
    let newString = '';
    let stringDecoder = '';

    for (let key in expr)
    {
      wordsInString = wordsInString + expr[key] 
      for (let keys in MORSE_TABLE)
        {
          if (expr[key] === MORSE_TABLE[keys])
            {
              newString = newString + keys;
            }
        }
    }

    for (let key in newString)
    {
      if (newString[key] === '.')
        {
          stringDecoder = stringDecoder + '10';
        } else if (newString[key] === '-') 
          {
            stringDecoder = stringDecoder + '11';
          } else if (newString[key] === '*') 
            {
              stringDecoder = stringDecoder + '*'
            }
    }  
  expr = expr + stringDecoder;
  return expr;
}

module.exports = {
    decode
}