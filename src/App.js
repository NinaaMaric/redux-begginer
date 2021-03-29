import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from './action'

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch()

  return (
    <div className="App">
      counter: {counter}
     <button onClick={()=> dispatch(increment(5))} >+</button>
     <button  onClick={()=> dispatch(decrement())}>-</button> 

      {isLogged ? <h3>I soudnt see this</h3> : ""}
    </div>
  );
}

export default App;
