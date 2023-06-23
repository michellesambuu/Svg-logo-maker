const inquirer = require('inquirer');
const {Circle,Triangle,Square} = require('./lib/shapes')
const fs = require('fs');

const questions = [
    {
        type:'input',
        name:'text',
        message:'Enter your logo name'

    },
    {
        type:'input',
        name:'color_text',
        message:'Enter color of the text'
    },
    {
        type:'list',
        name:'shape',
        message:'Select a shape',
        choices:['circle','square','triangle']

    },
    {
        type:'input',
        name:'shape_color',
        message:'enter your shape color',
    
    },

];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
      if (err) {
          console.log("Something wrong happened!")
      } else {
          console.log("SVG file successfully generated!")
      }
  })
}


function askQuestion() {

    inquirer.prompt(questions)
    .thenthen((answers)=>{
      console.log(answers)
    
     let shape;


            if(answers.shape == "circle") {
                shape = new Circle(answers.text, answers.color_text, answers.shape_color)
            }

            if(answers.shape == "triangle") {
                shape = new Triangle(answers.text, answers.color_text, answers.shape_color)
            }
            if(answers.shape == "square") {
                shape = new Square(answers.text, answers.color_text, answers.shape_color)
            }

   
          writeToFile("logo.svg", shape.render());
        });
}

askQuestion();


