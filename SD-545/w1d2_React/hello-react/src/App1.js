


function foo(){
    return 'MIU Students'
}


function App(){

    const location = ['Fairfield', 'Ottumwa', 'Iowa City'];

    //const list = location.map(city=><li>{city}</li>)
 
    return <ul>

        {location.map(city=><li>{city}</li>)}
        

    </ul>
}

export default App;
