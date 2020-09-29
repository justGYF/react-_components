// 定义键盘数据
// type: 1 --- 上下两行内容
// type: 2 --- 长度不同，但是文本唯一
// type: 3 --- 字母，默认小写


const keyData1 = [
    {
        valueUp: '~',
        valueDown: '`',
        type: 1
    },
    {
        valueUp: '!',
        valueDown: '1',
        type: 1
    },
    {
        valueUp: '@',
        valueDown: '2',
        type: 1
    },
    {
        valueUp: '#',
        valueDown: '3',
        type: 1
    },
    {
        valueUp: '$',
        valueDown: '4',
        type: 1
    },
    {
        valueUp: '%',
        valueDown: '5',
        type: 1
    },
    {
        valueUp: '^',
        valueDown: '6',
        type: 1
    },
    {
        valueUp: '&',
        valueDown: '7',
        type: 1
    },
    {
        valueUp: '*',
        valueDown: '8',
        type: 1
    },
    {
        valueUp: '(',
        valueDown: '9',
        type: 1
    },
    {
        valueUp: ')',
        valueDown: '0',
        type: 1
    },
    {
        valueUp: '_',
        valueDown: '-',
        type: 1
    },
    {
        valueUp: '+',
        valueDown: '=',
        type: 1
    },
    {
        value: 'Backspace',
        type: 2,
        style: {
            width: '80px'
        }
    }
]
const keyData2 = [{
        value: 'Tab',
        style: {
            width: '70px'
        },
        type: 2
    },
    {
        upper: 'Q',
        low: 'q',
        type: 3
    },
    {
        upper: 'W',
        low: 'w',
        type: 3
    },
    {
        upper: 'E',
        low: 'e',
        type: 3
    },
    {
        upper: 'R',
        low: 'r',
        type: 3
    },
    {
        upper: 'T',
        low: 't',
        type: 3
    },
    {
        upper: 'Y',
        low: 'y',
        type: 3
    },
    {
        upper: 'U',
        low: 'u',
        type: 3
    },
    {
        upper: 'I',
        low: 'i',
        type: 3
    },
    {
        upper: 'O',
        low: 'o',
        type: 3
    },
    {
        upper: 'P',
        low: 'p',
        type: 3
    },
    {
        valueUp: '{',
        valueDown: '[',
        type: 1
    },
    {
        valueUp: '}',
        valueDown: ']',
        type: 1
    },
    {
        valueUp: '|',
        valueDown: '\\',
        type: 1
    }
]

const keyData3 = [{
        value: 'CapsLock',
        style: {
            width: `80px`
        },
        type: 2
    },
    {
        upper: 'A',
        low: 'a',
        type: 3
    },
    {
        upper: 'S',
        low: 's',
        type: 3
    },
    {
        upper: 'D',
        low: 'd',
        type: 3
    },
    {
        upper: 'F',
        low: 'f',
        type: 3
    },
    {
        upper: 'G',
        low: 'g',
        type: 3
    },
    {
        upper: 'H',
        low: 'h',
        type: 3
    },
    {
        upper: 'J',
        low: 'j',
        type: 3
    },
    {
        upper: 'K',
        low: 'k',
        type: 3
    },
    {
        upper: 'L',
        low: 'l',
        type: 3
    },
    {
        valueUp: ':',
        valueDown: ';',
        type: 1
    },
    {
        valueUp: '"',
        valueDown: '\'',
        type: 1
    },
    {
        value: 'Enter',
        style: {
            width: `100px`
        },
        type: 2
    }
]
const keyData4 = [{
        value: 'Shift',
        style: {
            width: `120px`
        },
        type: 2
    },
    {
        upper: 'Z',
        low: 'z',
        type: 3
    },
    {
        upper: 'X',
        low: 'x',
        type: 3
    },
    {
        upper: 'C',
        low: 'c',
        type: 3
    },
    {
        upper: 'V',
        low: 'v',
        type: 3
    },
    {
        upper: 'B',
        low: 'b',
        type: 3
    },
    {
        upper: 'N',
        low: 'n',
        type: 3
    },
    {
        upper: 'M',
        low: 'm',
        type: 3
    },
    {
        valueUp: '<',
        valueDown: ',',
        type: 1
    },
    {
        valueUp: '>',
        valueDown: '.',
        type: 1
    },
    {
        valueUp: '?',
        valueDown: '/',
        type: 1
    },
    {
        value: 'Shift',
        style: {
            width: `120px`
        },
        type: 2
    }
]
const keyData5 = [{
        value: 'Ctrl',
        style: {
            width: `70px`
        },
        type: 2
    },
    {
        value: 'Fn',
        type: 2
    },
    {
        value: 'Win',
        type: 2
    },
    {
        value: 'Alt',
        type: 2
    },
    {
        value: 'Space',
        style: {
            width: '220px'
        },
        type: 2
    },
    {
        value: 'Alt',
        type: 2
    },
    {
        value: 'Ctrl',
        type: 2
    },
    {
        value: '↑',
        type: 2
    },
    {
        value: '→',
        type: 2
    },
    {
        value: '↓',
        type: 2
    },
    {
        value: '←',
        type: 2
    }
]

const keyArr = [keyData1, keyData2, keyData3, keyData4, keyData5]
export default keyArr