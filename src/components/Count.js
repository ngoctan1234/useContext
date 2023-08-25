import { useState ,useContext} from "react"
import { AppContext } from "../AppContext"
export default function  Count(){
   
   const {count,setCount,handle_increase} =useContext(AppContext)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handle_increase}>Increase</button>
        </div>
    )
}