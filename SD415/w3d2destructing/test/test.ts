/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import { topSalary } from "../src/app.js";
describe("topSalary", function() {
    it("returns top-paid person", function() {
      const salaries1 = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
      assert.equal( topSalary(salaries1), "Pete" );
    });

    it("returns top-paid of salaries2", function() {
      const salaries2 = {
        "John": 100,
        "Pete": 300,
        "Mary": 250,
        "Bob": 301,
        "Alice": 400,
        "Sally": 250
      };
      assert.equal( topSalary(salaries2), "Alice" );
    });    
  
    it("returns none for the empty object", function() {
        console.log("topsalary: ", topSalary({}) );
      assert.strictEqual( topSalary({}), "none");
    });
  });