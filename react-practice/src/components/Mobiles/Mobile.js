import React, { useState } from 'react';
import './Mobile.css'

const Mobile = () => {
    const [count, setCount] = useState(100)
    const decreaseCount = () =>{
        if(count > 0){
            setCount(count - 10)
           
        
        }
        else {
            setCount(0)
        }
       
    }
    return (
        <div className='battery'>
            <h4>Mobile Charge {count}</h4>
            <button className='btn-battery' onClick={decreaseCount}>Battery down</button>
        </div>
    );
};

export default Mobile;
