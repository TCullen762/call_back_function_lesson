//console.log('linked')

//add = (x,y)=> x +y ** Learn this 
function add (x,y){
    return x+y
}

function calculator(x,y,equipment) {
    
    return equipment (x,y)
}

function multiply (x,y){
    return x * y 
}

function divide(x,y){
    return x / y 
}
const output1 = calculator(1,2,add)
const multiplyOutput  = calculator(1,2, multiply)
const divideOutput  = calculator(1,2, divide)
console.log({output1,multiplyOutput,divideOutput})//curlies make it an object

//copied from DMG's code, this is not mine
const mainElement = document.querySelector('main')

const xInput = document.createElement('input')
xInput.type = "number"
const yInput = document.createElement('input')
yInput.type = "number"

const addButton = document.createElement('button')
addButton.append('+')
const multiplyButton = document.createElement('button')
multiplyButton.append('*')
const divideButton = document.createElement('button')
divideButton.append('/')

mainElement.append(
    'My Calculator',
    xInput,
    yInput, 
    addButton,
    multiplyButton,
    divideButton
)

addButton.addEventListener('click', function () {
    console.log ('add button works')
    const x = xInput.value
    const y = yInput.value
})

//this is shit figure out what has gone wrong
//addEventListener has lower case l

/*const input1 = document.querySelector("#input_box")
const addButt = document.querySelector("#add")

addButt.addEventlistener("click", function(){
    let addInput = input1.value 
    return addInput
    



})

console.log(addInput)*/
 
//buttons for add multiply and divide wrtie an EL click for each which calls calulator with correct x and y valuse
//and correct call back function
//will need two text boxes
// one of x and Y