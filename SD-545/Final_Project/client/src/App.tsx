import {  useRoutes } from 'react-router-dom';

import routes from './routes';




export default function App() {
  const element = useRoutes(routes)
  
  return  (

    <div className="container">
      
        <div className="col-9">
          {element}
        </div>
      </div>
    
  );
}


