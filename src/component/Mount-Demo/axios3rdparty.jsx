import { useEffect,useState } from "react";
import axios from "axios";
export function Axios(){
    const[products,setproducts]=useState([{Name:"",Price:0,Stock:true}])
    function Loadproducts(){
        axios.get("products.json")
        .then(response=>{
            setproducts(response.data);
        })
        .catch(err=>{
            console.log(err);
        })

       
    }
    useEffect(()=>{
        Loadproducts();

    },[])
    return(
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>

                    </tr>
                </thead>
                <tbody>
                    {
                       products.map(product=>
                        <tr key={product.Name}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                            <td>{(product.Stock===true)?"Available":"out of stock"}</td>
                           
                             
                        </tr>
                    
                        )

                    }
                </tbody>
            </table>

        </div>
    )

}