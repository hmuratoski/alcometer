import { useState } from 'react';
import './App.css';

function AlcoApp() {
  //adding constant values for later use;
const[weight,setWeight]=useState(0);
const[bottles,setBottles]=useState(0);
const[gender,setGender]=useState("male");
const[time,setTime]=useState(0);
const[alcoholLevel,setAlcoholLevel]=useState(0);
//calculation equation & conditionals;
const calculate=(e)=>{
  let litres=bottles * 0.33;
  let grams= litres * 8 * 4.5;
  let burning = weight/10;
  let gramsL = grams - (burning * time);

  let results = 0;
  if (gender=== "male") {
    result = gramsL / (weight * 0.7)
  }
  else{
    result = gramsL / (weight * 0.6)
  }
  if (result<0) {result = 0
    setAlcoholLevel(result.toFixed(2))
  }
}
  return (
   
  );
}

export default AlcoApp;
