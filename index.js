/*{
    ruleId: null,
    fatal: true,
    severity: ,
    source: String,
    message: String,
    line: Number,
    column: Number
}
*/


const fs = require('fs')
const {Linter} = require('eslint')
const linter = new Linter()

const code = fs.readFileSync('test.js').toString()

const messages = linter.verify(code, {
    parser: 'babel-eslint',
    rules: {
        semi: [2, 'always'],
        'no-console': [2, 'always'],
        'no-alert': [1, 'always'],
    }
}, {
    filename: '文件名',
    // preprocess: '',
    // postprocess: '',
    // allowInlineConfig: '',
    // reportUnusedDisableDirectives: ''
})

console.log(messages);

if (messages.some(v => v.fatal)) {
    throw new Error(messages[0].message)
}



// messages.forEach()
