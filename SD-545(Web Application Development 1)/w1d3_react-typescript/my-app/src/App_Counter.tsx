//1. Create a simple React component called Counter that displays a counter value initialized to 0. 
//Include two buttons: one for incrementing the counter and another for decrementing it. 
//Use useState to manage the counter state.

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