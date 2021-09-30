// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add_two, add } from '../calculations.js';

const test = QUnit.test;

// function add_two(num){
//     return num + 2;
// }

// moved this over to calculations.js (which is NOT in the test folder)...
// and then added "export" to the front of it
// then, here in this test file, i added "import" (shown above!)

test('add two numbers function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add(3,2) function', (expect) => {
    // arrange
    const input1 = 3; 
    const input2 = 2; 
    const expected = 5;

    // act (call the function)
    const actual = add(input1, input2); 

    // assert 
    expect.equal(actual, expected, "should add 3 & 2"); 
});

test('add(10,2) function', (expect) => {
    // arrange
    const input1 = 10; 
    const input2 = 2; 
    const expected = 12;

    // act (call the function)
    const actual = add(input1, input2); 

    // assert 
    expect.equal(actual, expected, "should add 10 & 2"); 
});