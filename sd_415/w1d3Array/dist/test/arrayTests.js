//import { assert } from "chai";
import { isVowel } from "../src/app.js";
describe("isVowel", function () {
    it("a is vowel", function () { assert.equal(isVowel("a"), true); });
    it("e is vowel", function () { assert.equal(isVowel("e"), true); });
    it("i is vowel", function () { assert.equal(isVowel("i"), true); });
    it("o is vowel", function () { assert.equal(isVowel("o"), true); });
    it("u is vowel", function () { assert.equal(isVowel("u"), true); });
    it("z is not vowel", function () { assert.equal(isVowel("z"), false); });
    it("5 is not vowel", function () { assert.equal(isVowel("5"), false); });
});
import { maxOfThree } from "../src/app.js";
describe("maximun number", function () {
    it("10 is maximun number", function () {
        assert.equal(maxOfThree(7, 9, 10), 10);
    });
});
describe("maximun number", function () {
    it("100 is maximun number", function () {
        assert.equal(maxOfThree(100, 50, 10), 100);
    });
});
import { sum } from "../src/app.js";
describe("sum of array", function () {
    it("sum of number is 10", function () {
        assert.equal(sum([1, 2, 3, 4]), 10);
    });
});
import { multiplication } from "../src/app.js";
describe("Multiplication of array", function () {
    it("multiplicayion of number is 24", function () {
        assert.equal(multiplication([1, 2, 3, 4]), 24);
    });
});
import { findLongestWord } from "../src/app.js";
describe("maximum length of word", function () {
    it("maximun length is eatfoodhealtymust", function () {
        assert.equal(findLongestWord(["ayesha", "apple", "eatfoodhealtymust"]), 17);
    });
});
import { reverseArray } from "../src/app.js";
describe("reverse the array", function () {
    it("reverse array done", function () {
        assert.equal(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
    });
});
import { generateArray } from "../src/app.js";
describe("generate array", function () {
    // const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    // const expected23 = [ [1, 2, 3], [4, 5, 6]];
    // const expected21 = 
    // [ [1], [2]];
    it("generate new array 3x3", function () {
        assert.deepEqual(generateArray(3, 3), [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });
});
describe("generate array", function () {
    // const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    // const expected23 = [ [1, 2, 3], [4, 5, 6]];
    // const expected21 = 
    // [ [1], [2]];
    it("generate new array 2x3", function () {
        assert.deepEqual(generateArray(2, 3), [[1, 2, 3], [4, 5, 6]]);
    });
});
describe("generate array", function () {
    // const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    // const expected23 = [ [1, 2, 3], [4, 5, 6]];
    // const expected21 = 
    // [ [1], [2]];
    it("generate new array 2x3", function () {
        assert.deepEqual(generateArray(2, 1), [[1], [2]]);
    });
});
