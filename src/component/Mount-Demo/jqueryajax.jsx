import { useEffect,useState } from "react";
import $  from 'jquery';

import React from "react"; 

export function MountDemo(){
    const[products,setproducts]=useState([{Name:"",Price:0, Stock:false}]);
     function Loadproducts(){
        $.ajax({
            method:"get",
            url:'products.json',
            success:(response)=>{
                setproducts(response);

            }
        })
    }
    useEffect(()=>{
        Loadproducts();

    },[])

    return(
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
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
   