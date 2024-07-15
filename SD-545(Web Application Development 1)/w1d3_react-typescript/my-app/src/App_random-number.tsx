//3.Build a component that generates a random number between 1 and 100 when a button is clicked.
// Display the generated number using useState

import { useState } from "react";

function App(){

    let[number,setnumber]=useState<number|null>(null)
       
    


    const random_number=()=>{

        const generated_numbers = Math.floor(Math.random()*100)+1;

        setnumber(generated_numbers)
        console.log(generated_numbers)

    }

return (
    
    <button onClick={random_number}>Generate random number</button>
)

}

export default App;