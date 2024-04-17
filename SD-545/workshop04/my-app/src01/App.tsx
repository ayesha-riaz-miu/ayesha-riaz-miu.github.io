import React, { useState } from 'react';

import './index.css'
import Search from './components/search';
import List from './components/list';
import User from './types';
import userTypes from './types/user';

function App() {
  const [user,setUsers] = useState<userTypes>({
    isFirst:true,
    isLoading:false,
    isError:false,
    user:[]

  }
    
  )
  return (
    
    <div className="App">
      <div className="container">
        <Search  setUser={setUsers}/>
        <List user={user}/>
    
   
  </div>
    </div>
  );
}

export default App;
