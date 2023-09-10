import { useState } from "react";
import "./Counter.css"

function Counter(){
    const [x,SetX] = useState(0);

    return(
        <>
            <div className="box">
                <h1 className="value">{x}</h1>
                <div className="btn-box">
                    <button onClick={()=>SetX(x+1)} className="btn">Increment</button>
                    <button onClick={()=>SetX(x-1)} className="btn">Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Counter;