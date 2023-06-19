//  create class and export for shape 
// circle triangle square extending shape 
// refer to constructor ex
class Shape {
    constructor( color ) {
      this.color = color;

    }
  }

  class Circle extends Shape{
  render(){ 
return`<circle cx="50" cy="50" r="50" 
fill='${this.color}' />`
  }
  }
  class Square extends Shape{
    render(){
        return`<rect width="100" height="100" fill='${this.color}' />`
    }

  }
  class Triangle extends Shape{
    render(){
        return`<polygon points="0,100 50,25 50,75 100,0" fill='${this.color}'/>`
    }
  }
  module.exports={
    Circle, Square, Triangle
  }