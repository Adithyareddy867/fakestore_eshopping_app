import {useEffect, useState } from "react";
import axios, { AxiosHeaders } from "axios";
export function Fakestore(){
    const{categories,setcategories}=useState([]);
    const{products,setproducts}=useState([{id:0,title:"",price:0,description:'',image:'',rating:{rate:0,count:0}}])
    function Loadcategories(){
        axios.get('https://fakestoreapi.com/products/categories;')
        .then(response=>{
            response.data.unshift("all");
            setcategories(response.data);
        })
    }
        function Loadproducts(){
           axios.get('https://fakestoreapi.com/products;')
           .then(response=>{
            setproducts(response.data);

           })
        }
        useEffect(()=>{
            Loadcategories()
            Loadproducts()

        },[]);    
    return(
       <div>
         <header className="d-flex justify-content-between  bg-dark text-white p-1 border-2 mt-2 ">
            <h2>FAKESTORE</h2>
            <div >
                <span className="me-3">Home </span>
                <span className="me-3">Electronics</span>
                <span className="me-3">Mens-Fashion</span>
                <span className="me-3">Womens-fashion</span>
                <span className="me-3">Jeweley</span>
            </div>
            <div>
                <span className="bi bi-heart-fill me-3" ></span>
                <span className="bi bi-person-fill me-3"></span>
                <button className=" bi bi-cart4 btn btn-warning  position-relative me-3"><span className="badge bg-danger  position-absolute rounded rounded-circle">0</span></button>

            </div>
        </header>
        <section className="mt-4 row">
            <nav className="col-2">
                <div>
                    <label htmlFor="" className="form-label fw-bold">select Category</label>
                    <div>
                        <select className="form-select" id="">
                            {
                                categories.map(category=> <option value=""key={category}>{category.toUpperCase()}</option>)
                            }
                        </select>

                    </div>
                </div>

            </nav>
            <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                {
                    products.map(products=>
                        <div className="card "style={{width:'500px'}} >
                            <div className="card-header">
                                <img src="{product.image}" className="card-img-top" height="120" alt="" />
                            </div>
                            <div className="card-body">

                            </div>
                            <div className="card-footer">
                                <button className="bi bi-cart4 btn-dark w-100">Add to cart</button>

                            </div>

                        </div>
                        )
                }


            </main>

        </section>
       </div>
        
        
       
       
    )
}


