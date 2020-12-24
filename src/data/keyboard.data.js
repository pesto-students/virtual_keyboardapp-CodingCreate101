//* Object structure example:
//* [ // Keyboard row
//*   { // Key inside a row
//*     caps: '[', // Primary
//*    small: '', // Primary
//*     special: '{', // secondary
//*     keyType: 'special', // special | alphabet | functional
//*   }
//* ],

export const keyboardData = [
  [
    {
      caps: '`', // Primary
      small: '`', // Primary
      special: '~', // secondary
      keyType: 'special', // special | alphabet | functional
    },
    {
      caps: '1',
      small: '1',
      special: '!',
      keyType: 'special',
    },
    {
      caps: '2',
      small: '2',
      special: '@',
      keyType: 'special',
    },
    {
      caps: '3',
      small: '3',
      special: '#',
      keyType: 'special',
    },
    {
      caps: '4',
      small: '4',
      special: '$',
      keyType: 'special',
    },
    {
      caps: '5',
      small: '5',
      special: '%',
      keyType: 'special',
    },
    {
      caps: '6',
      small: '6',
      special: '^',
      keyType: 'special',
    },
    {
      caps: '7',
      small: '7',
      special: '&',
      keyType: 'special',
    },
    {
      caps: '8',
      small: '8',
      special: '*',
      keyType: 'special',
    },
    {
      caps: '9',
      small: '9',
      special: '(',
      keyType: 'special',
    },
    {
      caps: '0',
      small: '0',
      special: ')',
      keyType: 'special',
    },
    {
      caps: '-',
      small: '-',
      special: '_',
      keyType: 'special',
    },
    {
      caps: '=',
      small: '=',
      special: '+',
      keyType: 'special',
    },
    {
      caps: 'Backspace',
      small: 'Backspace',
      special: '',
      keyType: 'functional',
    },
  ],
  [
    {
      caps: 'Tab',
      small: 'Tab',
      special: '',
      keyType: 'functional',
    },
    {
      caps: 'Q',
      small: 'q',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'W',
      small: 'w',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'E',
      small: 'e',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'R',
      small: 'r',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'T',
      small: 't',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'Y',
      small: 'y',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'U',
      small: 'u',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'I',
      small: 'i',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'O',
      small: 'o',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'P',
      small: 'p',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: '[',
      small: '[',
      special: '{',
      keyType: 'special',
    },
    {
      caps: ']',
      small: ']',
      special: '}',
      keyType: 'special',
    },
    {
      caps: '\\',
      small: '\\',
      special: '|',
      keyType: 'special',
    },
  ],
  [
    {
      caps: 'Caps Lock',
      small: 'Caps Lock',
      special: '',
      keyType: 'functional',
    },
    {
      caps: 'A',
      small: 'a',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'S',
      small: 's',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'D',
      small: 'd',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'F',
      small: 'f',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'G',
      small: 'g',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'H',
      small: 'h',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'J',
      small: 'j',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'K',
      small: 'k',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'L',
      small: 'l',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: ';',
      small: ';',
      special: ':',
      keyType: 'special',
    },
    {
      caps: "'",
      small: "'",
      special: '"',
      keyType: 'special',
    },
    {
      caps: 'Enter',
      small: 'Enter',
      special: '',
      keyType: 'functional',
    },
  ],
  [
    {
      caps: 'Shift',
      small: 'Shift',
      special: '',
      keyType: 'functional',
    },
    {
      caps: 'Z',
      small: 'z',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'X',
      small: 'x',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'C',
      small: 'c',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'V',
      small: 'v',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'B',
      small: 'b',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'N',
      small: 'n',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: 'M',
      small: 'm',
      special: '',
      keyType: 'alphabet',
    },
    {
      caps: ',',
      small: ',',
      special: '<',
      keyType: 'special',
    },
    {
      caps: '.',
      small: '.',
      special: '>',
      keyType: 'special',
    },
    {
      caps: '/',
      small: '/',
      special: '?',
      keyType: 'special',
    },
    {
      caps: 'Shift',
      small: 'Shift',
      special: '',
      keyType: 'functional',
    },
  ],
  [
    {
      caps: 'Space',
      small: 'Space',
      special: '',
      keyType: 'functional',
    },
  ],
];

export const state = {
  capsLock: false,
  shift: false,
  content: '',
};
