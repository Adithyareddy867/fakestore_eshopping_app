import { useState } from "react";
export function ClassBinding(){
    const [ClassObject,setClassObject]=useState('btn btn-dark w-100')
    return(
        <div className="container-fluid">
            <form  className=""action="">
                <h2 className="bi bi-person-fill">USER LOGIN</h2>
                <div>
                 <label htmlFor="">USERNAME</label>

                    <div>
                        <input type="text" className="form-contrl" />
                    </div>
                    <div><label htmlFor="">Password</label>
                        <div><input type="password" className="form-control" id="" /></div>
                    </div>
                    <div>
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
