import React, { useState } from 'react';

import './index.css'
import Search from './components/search';
import List from './components/list';
import User from './types';
import userTypes from './types/user';

function App() {
 
  return (
    
    <div className="App">
      <div className="container">
        <Search />
        <List />
    
   
  </div>
    </div>
  );
}

export default App;
