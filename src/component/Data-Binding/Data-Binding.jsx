
export function DataBinding(){
   
        var Data=[
            {Name:"TV", Price:"4000.0" ,Model:"2019"},
            {Name:"Mobile",Price:"16000",Model: "2022"},
        ];
        reutrn (
            <div className="containet-fluid">
                <h2>Data Binding</h2>
                <table className="table ">
                <thead>
                    <tr>
                        <thead>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Model</th>

                        </thead>
                    </tr>

                </thead>
                <tbody>
                    {
                        Data.map(products=>(tr))
                            
                    }

                </tbody>

                </table>
               

            </div>
        )

    
}
