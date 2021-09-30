import { add, sub } from './calculations.js';

// console.log(sub)

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