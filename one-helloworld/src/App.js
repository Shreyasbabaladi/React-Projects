import React from 'react';
import Button from './Button';
import "./style.css";

  const App=()=>{
        
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Hello Word!</h1>
            <Button title="App Store"/>
            <Button title="Play Store"/>
            <Button />
        </div>
    );

}
export default App;