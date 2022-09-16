import { useState } from 'react';
import './App.css';

function App() {
  //adding constant values for later use;
const[weight,setWeight]=useState(0)
const[bottles,setBottles]=useState(0)
const[gender,setGender]=useState('male')
const[time,setTime]=useState(0);
const[alcoholLevel,setAlcoholLevel]=useState(0)
//calculation equation & conditionals;
const calculate=(e)=>{
  e.preventDefault()
  let litres=bottles * 0.33
  let grams= litres * 8 * 4.5
  let burning = weight/ 10
  let gramsL = grams - (burning * time)

  let results = 0
  if (gender=== "male") {
    results = grams / (weight * 0.7)}
  else{
    results = grams / (weight * 0.6)}
  if (results <0 ) {results = 0}
    setAlcoholLevel(results)
  
}

// Submitting a form and handling;
  return (
    
    <div>
      <h3>Alcohol blood level calculation:</h3>
      <form onSubmit={calculate}>
     <div>
      <label>Weight:</label>
      <input type="number" value={weight} onChange={e=>setWeight(e.target.value)}></input>
     </div>
     <div>
      <label>Bottles:</label>
      <select  value={bottles} onChange={e =>setBottles(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
     </div>
     <div>
      <label>Time:</label>
      <select value={time} on onChange={e=>setTime(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
     </div>

     <div>
      <input type="radio" name="gender" value="male" defaultChecked onChange={e=>setGender(e.target.value)} /><label>Male</label>
      <input type="radio" name="gender" value="female"  onChange={e=>setGender(e.target.value)} /><label>Female</label>
     </div>
     

     <div>
      <button>Calculate</button>
     </div>
     <div>
      <output>{alcoholLevel.toFixed(2)}</output>
     </div>
      </form>
    </div>

   
  );
}

export default App;
