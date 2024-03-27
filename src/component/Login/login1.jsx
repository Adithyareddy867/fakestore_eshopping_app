import './login.css';
export function Login1(){
    return(
        <div className="container-fluid">
            <h1>Bootstrap in REACT</h1>
            <button className='btn btn-primary' data-bs-target="#login"data-bs-toggle="modal">LOGIN</button>
            <div className='modal fade '  id="login">
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className="modal-header">
                            <h2>USER LOGIN</h2>
                            <button  data-bs-dismiss="modal"className='btn btn-close'></button>
                            




                        </div>
                        <div className='modal-body'>
                                <dl>
                                    <dt>Name</dt>
                                    <dd><input type="text" className="form-text" /></dd>
                                    <dt>Password</dt>
                                    <dd><input type="password"  className="form-text" /></dd>
                                    <dt>Email</dt>
                                    <dd><input type="email" className='dorm-text' /></dd>

                                </dl>

                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-success'>Login</button>
                            <button className='btn btn-danger'>cancel</button>

                        </div>
                           

                    </div>

                </div>

            </div>
            



        </div>
    )
}
