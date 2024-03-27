// export function EventBinding(){
//     function InsertClick(e){
//         console.log(`X Position=${e.clientX}\nName=${e.target.name}`);
       
       
            



//     }
//     return(
//         <div className="container-fluid">
//             <button onClick={InsertClick}  id="btninsert" name="insert"className="btn btn-success">Insert</button>

//         </div>
//     )
    

    // }
// export function EventBinding(){
//     function InsertClick(title,cities,e){
//         console.log(title);
//         console.log(cities);
//         console.log(e.clientX + "\n", e.target.id)

//     }
//     return(
//         <div className="container-fluid">
//             <h2>Event Binding</h2>
//             <button name="Insert"className="btn btn-success m-4" onClick={(e)=>{InsertClick('Welcome',['delhi','bangalore'],e)}}>Insert</button>

//         </div>
//     )
// }
// export function EventBinding()
// {

//     function InsertClick(title, cities, e){
//        console.log(title);
//        console.log(cities);
//        console.log(e.clientX + "\n" + e.target.id);
//     }

//     return(
//         <div className="container-fluid">
//             <h2>Event Binding</h2>
//             <button onClick={(e)=>{ InsertClick('Welcome',['Delhi','Hyd'], e) }} name="Insert" id="btnInsert" className="btn btn-primary"> Insert </button>
//         </div>
//     )
// }


// export function EventBinding(){
//     function SubmitClick(e){
//         e.preventDefault();
//         alert('form submitted to server');


//     }

//     return(
//         <div className="container-fluid">
//             <h2>internally default function for generic elements
                
//             </h2>
//             <form  onSubmit={SubmitClick} action="">
//             UserName:
//             <input type="text" name="username" id="" />
//             <button type="submit">Submit</button>
//             </form>

//         </div>

//     )
// }

// export function EventBinding(){
//     function handleNavbarClick(){
//         alert('alert navbar clicked');

//     }
//     function handleSearchClick(e){
//         alert('search button clicked');
//        e.stopPropagation()

//     }
//     return(
//         <div className="container-fluid">
//             <h2>Event propagation method</h2>
//             <nav onClick={handleNavbarClick} className="p-4 bg-dark text-white">
//             <h3>NAVBAR</h3>
//             <button onClick={handleSearchClick}  className=" btn btn-warning bi bi-search">Search</button>
//             </nav>


//         </div>


//     )
// }



