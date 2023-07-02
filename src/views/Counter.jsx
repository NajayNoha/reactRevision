import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../store/reducers/counterSlice";

const Counter = () => {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    return (
        <div>
          <button onClick={()=>{ dispatch(increment()) }}>+</button>
            { count }
          <button onClick={()=>{ dispatch(decrement()) }}>-</button>
          <br />
          <input type="number" value={amount} onChange={(e)=>{setAmount(parseInt(e.target.value))}}/>
          <button onClick={()=>{dispatch(incrementByAmount(amount))}}>Increment By</button>
        </div>
    )
};


export default Counter;
