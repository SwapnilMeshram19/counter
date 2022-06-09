import React from "react";
const Count = (prop) => {
    // console.log(prop)
    var {counter}=prop;
    // console.log(counter)

    var [counter, setCounter]=React.useState(counter);


    const increase = () =>{
        setCounter(counter+1);
    }

    const decrease = () =>{
        setCounter(counter-1);
    }

    const double = () =>{
        setCounter(counter*2);
    }




    
    return (
        <>
            {counter % 2===0?<h1 style={{color:"green"}} className="heading">Counter: {counter}</h1>:<h1 style={{color:"red"}}>Counter: {counter}</h1>}
            <button onClick={increase}>INCREMENT</button>
            <button onClick={decrease}>DECREMENT</button><br/>
            <button onClick={double}>Double</button>
        </>
    )
}

export default Count;