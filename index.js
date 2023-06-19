const inquirer = require('inquirer');
const {Circle,Triangle,Square} = require('./lib/shape')
const fs = require('fs')
const questions= [
    {
        type:'input',
        name:'text',
        message:'Enter text'

    },
    {
        type:'input',
        name:'Color_text',
        message:'Enter color of the text'
    },
    {
        type:'list',
        name:'Shape',
        message:'Select shape',
        choices:['circle','square','triangle']

    },
    {
        type:'input',
        name:'Shape_color',
        message:'enter shape color',
    
    },

]

function askQuestion() {
    inquirer.prompt(questions)
   .then(function (answers){
    console.log(answers)
    if (answers.Shape==='circle') {
    const circle = new Circle(answers.Shape_color)
    console.log(circle);
    }
    
    if(answers.Shape==='square'){
        const square = new Square(answers.Shape_color)
    }
    if (answers.Shape==='triangle') {
        const triangle= new Triangle(answers.Shape_color)
    }
   } )
}
function writeToFile(fileName,data) {
    fs.writeFileSync(fileName,data)
    
}
function renderSvg(){
    return`<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    ${render()}
    </svg>
    `
}
askQuestion();
// call the fu