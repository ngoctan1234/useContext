import { useContext } from "react"
import { AppContext } from "../AppContext"
import { Table, } from "reactstrap"
export default function Cart(){
    const {cart,delete_cart}=useContext(AppContext)
    console.log(cart)
    return (
        <div>
            
                    
                    <Table dark>
                    <thead>
                      <tr>
                        <th>
                          #
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Price
                        </th>
                        <th>
                          Quantity
                        </th>
                        <th>
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                cart&&cart.map((item,index)=>  (
                      <tr>
                        <th scope="row">
                          {index}
                        </th>
                        <td>
                          {item.product_name}
                        </td>
                        <td>
                          {item.price}
                        </td>
                        <td>
                          {item.qty}
                        </td>
                        <td>
                            <button onClick={()=>delete_cart(item.id)}>Delete</button>
                        </td>
                      </tr>
                ))
                      }
                    </tbody>
                  </Table>
                
            
        </div>
    )
}