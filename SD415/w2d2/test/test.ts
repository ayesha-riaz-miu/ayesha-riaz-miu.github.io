/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

//import {calculate} from "../src/app.ts";  //import objects used in the Mocha tests

import {add,multipication} from "../src/app.js";


// describe("test calculator with values 2, 3", function () {
//     calculator.setValues(2, 3);  //values for the tests

//     it("checks initial values 2 and 3", function () {
//         assert.strictEqual(calculator.operand1, 2);
//         assert.strictEqual(calculator.operand2, 3);
//     });

//     it("when 2 and 3 are entered, the sum is 5", function () {
//         assert.strictEqual(calculator.sum(), 5);
//     });

//     it("when 2 and 3 are entered, the product is 6", function () {
//         assert.strictEqual(calculator.mul(), 6);
//     });


// });

describe("calsulate the number:",function(){
  
    it("The sum of 3 1nd 2 is:",function(){
        assert.strictEqual(add(3,2), 5);
    })
})
describe("calsulate the number:",function(){
   
    it("The multiplicayion of 3 1nd 2 is:",function(){
        assert.strictEqual(multipication(3,2), 6);
    })
})




