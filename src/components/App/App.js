import React, { useState } from 'react';
import './app.scss';

import CardContent from '../CardContent/CardContent';
import CardLogo from '../CardLogo/CardLogo';


function App() {
  const [state, setState] = useState({
    app: [
      {
        pseudo: '@dccedia', 
        firstname: 'Dave', 
        lastname: 'Ceddia'
      },
      {
        pseudo: '@gcosara', 
        firstname: 'Guéna', 
        lastname: 'Cosara'
      },
      {
        pseudo: '@ttata', 
        firstname: 'Toto', 
        lastname: 'Tata'
      },    
    ],   
    
  });
  return (
    <div className="App">
      {state.app.map(user => (
        <div className="App-card">
        <CardLogo />
        <CardContent 
          key={user.pseudo}
          pseudo={user.pseudo}
          firstname={user.firstname}
          lastname={user.lastname}
        />
        {console.log(user.pseudo)}
      </div> 
      ))}
       
     
     
    </div>
  );
}

export default App;
