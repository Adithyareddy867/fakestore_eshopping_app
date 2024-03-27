import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './event-binding.css';

export function EventBinding()
{
    const [images, setImages] = useState([{img_src:""}]);
    const [previewSrc, setPreviewSrc] = useState("images/m1.jpeg");
    

    useEffect(()=>{

        axios.get("mobiles.json")
        .then(response=>{
            setImages(response.data);
            console.log(response)
        })

    },[])

    function handleMouseOver(e){
        setPreviewSrc(e.target.src);
    }
   
    return(
        <div className="container-fluid">
           <div className="row mt-4">
                <div className="col-2">
                    {
                        images.map(image=>
                            <div key={image.img_src} className="border my-3 border-2" style={{width:'90px'}} >
                                 <img onMouseOver={handleMouseOver} src={image.img_src} width="80" height="80" />  
                            </div>
                            )
                    }
                </div>
                <div className="col-10">
                    <img width='400' src={previewSrc} height="500" />
                </div>
           </div>
        </div>
    )
}

// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// // import './event-binding.css';

// export function EventBinding()
// {
//     const [images, setImages] = useState([{img_src:""}]);
//     const [previewSrc, setPreviewSrc] = useState('images/m1.png');

//     useEffect(()=>{

//         axios.get("mobiles.json")
//         .then(response=>{
//             setImages(response.data);
//         })

//     },[])

//     function handleMouseOver(e){
//         setPreviewSrc(e.target.src);
//     }
   
//     return(
//         <div className="container-fluid">
//            <div className="row mt-4">
//                 <div className="col-2">
//                     {
//                         images.map(image=>
//                             <div key={image.img_src} className="border my-3 border-2" style={{width:'90px'}} >
//                                  <img onMouseOver={handleMouseOver} src={image.img_src} width="80" height="80" />  
//                             </div>
//                             )
//                     }
//                 </div>
//                 <div className="col-10">
//                     <img width='400' src={previewSrc} height="500" />
//                 </div>
//            </div>
//         </div>
//     )
// }
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import './event-binding.css';

// export function EventBinding()
// {
//     function handleMouseOver(e){
//         e.target.stop();
//     }
//     function handleMouseOut(e){
//         e.target.start();
//     }
   
//     return(
//         <div className="container-fluid">
//             <div className="mt-4">
//                 <marquee scrollamount="10" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
//                     <img src="m1.png" className="m-4" width="200" height="200" />
//                     <img src="m2.png" className="m-4" width="200" height="200" />
//                     <img src="m3.png" className="m-4" width="200" height="200" />
//                     <img src="m4.jpeg" className="m-4" width="200" height="200" />
//                 </marquee>
//             </div>
//         </div>
//     )
// }

// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import './event-binding.css';

// export function EventBinding()
// {

//     const [users, setUsers] = useState([{UserId:''}]);
//     const [msg, setMsg] = useState('');
//     const [errorClass, setErrorClass] = useState('');
//     const [capsError, setCapsError] = useState({display:'none'});

//     useEffect(()=>{
//         axios.get('users.json')
//         .then(response=>{
//             setUsers(response.data);
//         })
//     },[]);

//     function handleVerifyUser(e){
//         for(var user of users)
//         {
//             if(user.UserId===e.target.value){
//                 setMsg('User Id Taken - Try Another');
//                 setErrorClass('text-danger');
//                 break;
//             } else {
//                 setMsg('User Id Available');
//                 setErrorClass('text-success');
//             }
//         }
//     }
//     function handleVerifyPassword(e){
//         if(e.which>=65 && e.which<=90) {
//             setCapsError({
//                 display: 'block'
//             })
//         } else {
//             setCapsError({
//                 display: 'none'
//             })
//         }
//     }

//     return(
//         <div className="container-fluid">
//             <h2>Register User</h2>
//             <dl>
//                 <dt>UserId</dt>
//                 <dd><input type="text" onKeyUp={handleVerifyUser} /></dd>
//                 <dd className={errorClass}>{msg}</dd>
//                 <dt>Password</dt>
//                 <dd><input type="password" onKeyPress={handleVerifyPassword} /></dd>
//                 <dd style={capsError}>
//                     <span className="bi bi-exclamation-triangle-fill text-warning"></span> <span>CAPS ON</span>
//                 </dd>
//             </dl>
//         </div>
//     )
// }
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import './event-binding.css';

// export function EventBinding()
// {
   
//     const [styleObj, setStyleObj] = useState({position:'', top:'', left:''})

//     function handleMouseMove(e){
//         setStyleObj({
//             position: 'fixed',
//             left: e.clientX + 'px',
//             top: e.clientY + 'px'
//         })
//     }

//     return(
//         <div className="container-fluid" onMouseMove={handleMouseMove}>
//             <div style={{height:'1000px'}}>
//                 <p>Mouse mouse pointer to test</p>
//             </div>
//             <img style={styleObj} src="images/holi.gif" width="50" height="50"/>
//         </div>
//     )
// }


// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import './event-binding.css';

// export function EventBinding()
// {
   
//     const [size, setSize] = useState({width:'100px', height:'100px'});

//     function handleMouseDown(){
//         setSize({
//             width: '400px',
//             height: '400px'
//         })
//     }
//     function handleMouseUp(){
//         setSize({
//             width: '100px',
//             height: '100px'
//         })
//     }


//     return(
//         <div className="container-fluid">
//             <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
//                 <img src="images/m1.jpeg" style={size} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
//             </div>
//         </div>
//     )
// }

