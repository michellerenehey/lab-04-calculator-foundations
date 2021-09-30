import { add, sub, mult } from './calculations.js';

//addition
const addInput1 = document.getElementById('add-input1'); 
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-btn');
const addAnswer = document.getElementById('add-answer');

addButton.addEventListener('click', () => {
  const addValue1 = Number(addInput1.value);
  const addValue2 = Number(addInput2.value);
  const addResult = add(addValue1, addValue2);
  addAnswer.textContent = addResult;
}); 

//subtraction 
const subInput1 = document.getElementById('sub-input1');
const subInput2 = document.getElementById('sub-input2');
const subButton = document.getElementById('sub-btn');
const subAnswer = document.getElementById('sub-answer');

subButton.addEventListener('click', () => {
  const subValue1 = Number(subInput1.value); 
  const subValue2 = Number(subInput2.value); 
  const subResult = sub(subValue1, subValue2); 
  subAnswer.textContent = subResult;
});

// multiplication

const multInput1 = document.getElementById('mult-input1');
const multInput2 = document.getElementById('mult-input2');
const multButton = document.getElementById('mult-btn');
const multAnswer = document.getElementById('mult-answer');

multButton.addEventListener('click', () =>{
  const multValue1 = Number(multInput1.value); 
  const multValue2 = Number(multInput2.value); 
  const multResult = mult(multValue1, multValue2); 
  multAnswer.textContent = multResult;
});

// division

const divInput1 = document.getElementById('div-input1');
const divInput2 = document.getElementById('div-input2'); 
const divButton = document.getElementById('div-btn'); 
const divAnswer = document.getElementById('div-answer'); 

divButton.addEventListener('click', () => {

})