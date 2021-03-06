// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add_two, add, sub, mult, div, mod, intDiv } from '../calculations.js';

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

test('subtract(4,3) function', (expect) => {
    
    const input1 = 4; 
    const input2 = 3; 
    const expected = 1; 

    const actual = sub(input1, input2); 

    expect.equal(actual, expected, "should subtract 4 & 3");
});

test('multiply(8,6) function', (expect) => {
    const input1 = 8; 
    const input2 = 6; 
    const expected = 48; 

    const actual = mult(input1, input2); 

    expect.equal(actual, expected, "should multiply 8 & 6")
}); 

test('divide(12, 3) function', (expect) => {
    const input1 = 12; 
    const input2 = 3; 
    const expected = 4; 

    const actual = div(input1, input2); 

    expect.equal(actual, expected, "should divide 12 by 3")
});

test('modulo(15,4) fucntion', (expect) => {
    const input1 = 15;
    const input2 = 4; 
    const expected = 3; 

    const actual = mod(input1, input2); 

    expect.equal(actual, expected, "should modulo 14 % 4")
}); 

test('modulo(234,66) function', (expect) => {
    const input1 = 234;
    const input2 = 66; 
    const expected = 36; 

    const actual = mod(input1, input2); 

    expect.equal(actual, expected, "should modulo 234 % 66")
}); 

test('intDiv(5, 2) function', (expect) => {
    const input1 = 5;
    const input2 = 2; 
    const expected = 2; 

    const actual = intDiv(input1, input2); 

    expect.equal(actual, expected, "should divide 5 by 2 and round down")
}); 