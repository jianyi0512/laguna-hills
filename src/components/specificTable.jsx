import tableData from "../data/obj/tableData";
import datatonColor from "../styles/dataton.module.scss" 
import 'bootstrap/dist/css/bootstrap.min.css'

const SpecificTable = (props) => {

    let selectWpx = tableData[props.watchpax]
    
    return(
        <>
            {(props.watchpax === 'WATCHPAX60')?
           <div className="mx-auto table-responsive">
           <h3>仕様</h3>
           <table className="table container w-100">
               <thead className={datatonColor.datatonBg}> 
                   <tr>
                       {selectWpx.itemNames.map((value) =>
                       <th className="text-end" key={value.id}>{value}</th>
                       )} 
                   </tr>
               </thead>
               <tbody>
                   {selectWpx.items.map((value) =>
                   <tr>
                       <th scope="row" key={value.id}>{value.itemname}</th>
                       <td className="text-end" key={value.id}>{value.itemS}</td>
                       <td className="text-end" key={value.id}>{value.itemA}</td>
                       <td className="text-end" key={value.id}>{value.itemB}</td>
                       <td className="text-end" key={value.id}>{value.itemC}</td>
                   </tr>
                   )}        
               </tbody>      
           </table>
   
           {selectWpx.annotation.map((value) =>
           <p key={value.id}>{value.comment}</p>
           )}   
            </div> 
        :
            <div className="mx-auto table-responsive">
                         <h3>仕様</h3>
                         <table className="table container w-100">
                             <thead className={datatonColor.datatonBg}> 
                             {selectWpx.itemNames.map((value) =>
                                 <tr>
                                     
                                     <th className="text-center" key={value.id}>{value.title}</th>
                                     <th className="text-center" key={value.id}>{value.productname}</th>
                                     
                                 </tr>
                             )}
                             </thead>
                             <tbody>
                                 {selectWpx.items.map((value) =>
                                 <tr>
                                     <th scope="row" key={value.index}>{value.itemname}</th>
                                     <td className="text-center" key={value.index}>{value.itemA}</td>
                                 </tr>
                                 )}        
                             </tbody>      
                         </table>
               
                         {selectWpx.annotation.map((value) =>
                         <p key={value.id}>{value.comment}</p>
                         )}   
                     </div>
        
        } 

        </>
    )
}
    
export default SpecificTable
