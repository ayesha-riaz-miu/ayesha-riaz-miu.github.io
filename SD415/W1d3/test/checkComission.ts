function compoundInterest(initial_amount,annual_interst,years_commpound){
    let monthly_interst=annual_interst/12;
   
    for(let i=0;i<years_commpound*12;i++){
        let interst=initial_amount*monthly_interst
        initial_amount=initial_amount+interst;
    }
    return initial_amount;
}




let initial_amount=100;
let annual_interst=10;
let years_commpound=1
console.log("expect 110.47", compoundInterest(initial_amount,annual_interst,years_commpound));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });
