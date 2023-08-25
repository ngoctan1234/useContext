import { useState ,useContext} from "react"
import { AppContext } from "../AppContext"
export default function  Count2(){
   const {count}=useContext(AppContext)
    return (
        <div>
            <h1>Count 2: {count}</h1>
        </div>
    )
}