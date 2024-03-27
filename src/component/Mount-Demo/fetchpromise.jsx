import{useEffect,usestate} from "react";
export function FetchPromise(){
    fetch("products.json")
    .then(response=>response.json())
    .then(products=>{
        setproducts(products);
    })

}
useEffect(() =>{
    Loadproducts();

},[]);
return(
    <div className="containe-fluid">

    </div>
)