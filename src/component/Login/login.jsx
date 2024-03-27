
import './login.css';
export function Login(){
    return(
        <div className='container'>
            <form action="" className='form-login alert alert-warning alert-dismissible'>
                <h1 className='bi bi-person-fill' >USER LOGIN</h1>
                <button type="button" data-bs-dismiss="alert" className='btn btn-close'></button>
                <dl>
                    <dt>User Name:-</dt>
                    <dd><input type="text" name="" id="" /></dd>
                    <dt>Password:-</dt>
                    <dd><input type="password" name="" id="" /></dd>
                    <dt>User Email</dt>
                    <dd><input type="email" name="" id="" /></dd>
                </dl>
               <button type="button" className='btn btn-success'>Login</button>
               <button type="button" className='btn btn-danger ms-4'>Reset</button>
            </form>
        </div>

    )
}
