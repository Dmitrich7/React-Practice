import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [count,setCount] = useState(0);
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
    return (
        <div>
            <span>{count}</span>
            <button className={classes.button} onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
};

export default Counter;