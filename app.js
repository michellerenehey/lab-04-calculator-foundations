import { add } from './calculations.js';

//addition
const addInput1 = document.getElementById('add-input1'); 
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-btn');
const addAnswer = document.getElementById('add-answer');

addButton.addEventListener('click', () => {
  const value1 = Number(addInput1.value);
  const value2 = Number(addInput2.value);
  const result = add(value1, value2);
  addAnswer.textContent = result;
}); 

//subtraction 
const subInput1 = document.getElementById('sub-input1');
const subInput2 = document.getElementById('sub-input2');
const subButton = document.getElementById('sub-btn');
const subAnswer = document.getElementById('sub-answer');

subButton.addEventListener('click', () => {
  console.log("button clicked!")
});