import { assert } from "chai";

import { double } from "../src/app.js"
describe("Double numbner here",function(){
    it("double number of given number is",function(){
       assert.equal(double(10),20)
    })
})

import {  times100 } from "../src/app.js"
describe("10 for 100 times",function(){
    it("100 times the number",function(){
       assert.equal(times100(10),1000)
    })
})









