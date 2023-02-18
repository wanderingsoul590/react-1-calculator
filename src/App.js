import Button from "./Coponents/Button";
import React, { useState } from "react";

function App() {
  const [Value, setValue] = useState(0);
  const number = [ 1,2,3,4,5,6,7,8,9,0 ];

  const [ Action, setAction ] = useState('');
  const actions = [ '+', '-', 'x', '/' ];

  const [ Result, setResult ] = useState(0);

  function changeValue(event){
    setValue(Value + event.target.value)
  }

  function changeAction(event){
    setAction(event.target.value)
    setResult(Value)
    setValue(0)
  }

  function resetField(){
    setValue(0)
  }

  function Calculate(){
    console.log('first')
    if ( Action === '+' ){
      setValue( parseInt(Result) + parseInt(Value) )
    }
    else if ( Action === '-' ){
      setValue( parseInt(Result) - parseInt(Value) )
    }
    else if ( Action === 'x' ){
      setValue( parseInt(Result) * parseInt(Value) )
    }
    else if ( Action === '/' ){
      setValue( parseInt(Result) / parseInt(Value) )
    }
    setAction('')
  }
  
  function formChange(event){
    setValue(event.target.value)
  }

  return (
    <div className="App">
      <div className="display">
        <input type='number' value={Value} onChange={formChange}/>
        <p className="action">{Action}</p>
      </div>
      <div className="maincalc">
      <Button stylename="AC number" name="AC" value='AC' onclick={resetField}/>
        <div className="row1">
         {
          number.map( ( number, index ) => (
            <Button stylename="number" name={number} value={number} onclick={changeValue} key={index}/>
          ))
         }
        </div>
        <div className="row2">
         {
          actions.map( ( action, index ) => (
            <Button stylename="action" name={action} value={action} key={index} onclick={changeAction}/>
          ))
         }
        </div>
      </div>
      <Button stylename="action iquelto" name='=' value='=' key='=' onclick={Calculate}/>

    </div>
  );
}

export default App;
