//2. Create a temperature converter component that allows users to enter a temperature in Celsius and 
//converts it to Fahrenheit when a button is clicked. Use useState to manage the temperature input and output.



// function App(){

//     const[celsius,setcelsius] = useState('')

//     const handle_input=()=>{

//         const celsiusValue = parseFloat(celsius);
//         const fahrenheitValue = (celsiusValue * 9/5) + 32;

//         console.log(fahrenheitValue)

//     }
//     const handle_change=(e:ChangeEvent<HTMLInputElement>)=>{

//         setcelsius(e.currentTarget.value)

//     }


//     return(
//         <input type="text" onChange={handle_change}><button onClick={handle_input}>Click Me</button></input>
//     )


// }
// function App(){
//     const [input1,setinput1] = useState(0)
//     const [input2,setinput2] = useState(0)
//     const [input3,setinput3] = useState(0)
//     const change_input1=(e:ChangeEvent<HTMLInputElement>)=>{
//         setinput1(parseInt(e.currentTarget.value))
//     }
//     const change_input2=(e:ChangeEvent<HTMLInputElement>)=>{
//         setinput2(parseInt(e.currentTarget.value))
//     }
//     const chnage_data=()=>{
//       const addition=input1+input2;
//       setinput3(addition)
//     }
//     return(
//         <>
//         <input type="number" value={input1} onChange={change_input1}></input>
//        + <input type="number" value={input2} onChange={change_input2}></input>
//        = <input type="number" value={input3} ></input>
//        <button onClick={chnage_data}>add</button>

//         </>
//     )
// }



// export default App;


import { useState } from "react";


function App(){

    let[count,setcount] = useState<number>(0)

    const Counter_increment=()=>{

        setcount(count+1)
        console.log(count)
        
    }
    const Count_decrement=()=>{

       setcount(count-1)
       console.log(count)

    }

return(

<div>
    <span>This is react state:</span>
    {count}
    <hr></hr>

<button onClick={Counter_increment}>Counter increment</button>
<hr></hr>

<button onClick={Count_decrement}>Counter decrement</button>
</div>

    
)


}

export default App;