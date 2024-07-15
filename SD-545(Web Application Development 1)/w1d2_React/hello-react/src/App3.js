function Foo(){// comonent => return jxs

  return(
    <h1>react component</h1>
  )

}

function App(){
      //const name = 'ayesha'
    return(<>
        <div className="App">
            <h1 className="App-heading" style={{fontSize:'30px',backgroundColor:'red',color:'yellow'}}> my name is ayesha riaz</h1>
        </div>
        <div>
            {/* comment here*/}
            <div>Enter here <input type="text"/></div>
            
        </div>
       <Foo></Foo>
        </>
    ) 

}

export default App;


