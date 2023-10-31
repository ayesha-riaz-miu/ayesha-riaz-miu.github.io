function computeSalesCommission(salary, sales){
    if(salary==true){
        if(sales<300)
        {
            let  sales_commision="no commission"
           return  sales_commision
        }
        else if((sales>=300) && (sales<500))
        {
            sales_commision=0.01*salary
           return  sales_commision;
        }
        
        else if(sales>=500)
        {
            sales_commision=0.02*salary
            return  sales_commision;
            
        }
    }
    else
    if(salary==false){
        if(sales<300)
        {
            let  sales_commision="no commission"
           return  sales_commision
        }
        else if((sales>=300) && (sales<500))
        {
            sales_commision=0.01*sales
           return  sales_commision;
        }
        
        else if(sales>=500)
        {
            sales_commision=0.02*sales
            return  sales_commision;
            
        }
    }




}



console.log("expect 0: ", computeSalesCommission(true, 300));
console.log("expect 0: ", computeSalesCommission(false, 300));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));



