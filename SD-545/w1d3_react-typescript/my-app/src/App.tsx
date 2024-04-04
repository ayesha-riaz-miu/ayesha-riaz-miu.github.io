//2. Create a temperature converter component that allows users to enter a temperature in Celsius and 
//converts it to Fahrenheit when a button is clicked. Use useState to manage the temperature input and output.

import { ChangeEvent, useState } from "react";

function App(){

    const[celsius,setcelsius] = useState('')

    const handle_input=()=>{

        const celsiusValue = parseFloat(celsius);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        console.log(fahrenheitValue)

    }
    const handle_change=(e:ChangeEvent<HTMLInputElement>)=>{

        setcelsius(e.currentTarget.value)

    }


    return(
        <input type="text" onChange={handle_change}><button onClick={handle_input}>Click Me</button></input>
    )

}

export default App;