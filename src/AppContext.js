import { createContext, useState,useEffect } from "react" 
import axios from 'axios'
export const AppContext=createContext({})
export  function  AppProvider({children}){
    const [count, setCount]=useState(1)
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    const handle_increase=()=>{
        setCount(pre=>pre+1)
    }
    


    async function getProducts() {
        try {
          const response = await axios.get('https://64e840f099cf45b15fdf4935.mockapi.io/products');

          setProducts(response.data)
        } catch (error) {
          console.error(error);
        }
      }
    useEffect (()=>{
        getProducts();
    },[])
    const delete_cart=(id)=>{
        setCart(cart.filter(item=>item.id !=id))
    }
    const addCart=(id)=>{
        const item=products.find(item=>item.id==id)
        const index=cart.findIndex(item=>item.id==id)
        if(index>=0){
            let newCart=cart
            newCart[index]["qty"]++
            setCart(newCart)
        }
        else{
            setCart([...cart,{...item,qty:1}])
        }
        console.log(item)
       

    }
    return (
        <AppContext.Provider value={{count,setCount,handle_increase,products,addCart,cart,delete_cart}}>
            {children}
        </AppContext.Provider>
    )
}