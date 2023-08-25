import { Link, Route, Routes } from "react-router-dom"
import {AppProvider} from "./AppContext"
import Count from "./components/Count"
import Count2 from "./components/Count2"
import Products from "./components/Products"
import Cart from "./components/Cart"

export default function App(){

    return (
        <div>
            <AppProvider>
                <Link to="/" >Home</Link>
                <Link to="/products" >Products</Link>
                <Link to="/cart" >Cart</Link>
                <Link to="/count2" >count2</Link>

                <Routes>
             <Route index element={<Count/>} />
             <Route path="/*" element={<h1>Error Page</h1>}></Route>
             <Route path="/cart" element={<Cart />}></Route>
             <Route path="/products" element={<Products />}></Route>
             <Route path="/count2" element={<Count2 />}></Route>
             </Routes>
            </AppProvider>
            
        </div>
    )
}