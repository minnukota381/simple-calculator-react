import React from 'react';
import Calculator from './Calculator';
import './Calculator.css'; 
const App = () => {
  return (
    <div className="app">
      <h1 style={{textAlign:'center'}}>Simple Calculator</h1>
      <Calculator />
    </div>
  );
};
export default App;
