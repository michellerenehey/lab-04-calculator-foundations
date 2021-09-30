import { add } from './calculations.js';

const addInput1 = document.getElementById('add-input1'); 
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-btn');
const addAnswer = document.getElementById('add-answer');

console.log (addInput1, addInput2, addButton, addAnswer);

addButton.addEventListener('click', () => {
  const value1 = Number(addInput1.value);
  const value2 = Number(addInput2.value);
  const result = add(value1, value2);
  addAnswer.textContent = result;
}); 