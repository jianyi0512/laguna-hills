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
                       {selectWpx.itemNames.map((value, index) =>
                       <th className="text-end" key={index}>{value}</th>
                       )} 
                   </tr>
                   
               </thead>
               <tbody>
                   {selectWpx.items.map((value, index) =>
                   <tr key={index*2}>
                       <th scope="row" >{value.itemname}</th>
                       <td className="text-end" >{value.itemS}</td>
                       <td className="text-end" >{value.itemA}</td>
                       <td className="text-end" >{value.itemB}</td>
                       <td className="text-end" >{value.itemC}</td>
                   </tr>
                   )}        
               </tbody>      
           </table>
   
           {selectWpx.annotation.map((value, index) =>
           <p key={index*3}>{value.comment}</p>
           )}   
            </div> 
        :
            <div className="mx-auto table-responsive">
                         <h3>仕様</h3>
                         <table className="table container w-100">
                             <thead className={datatonColor.datatonBg}> 
                             {selectWpx.itemNames.map((value, index) =>
                                 <tr key={index}> 
                                     
                                     <th className="text-center" >{value.title}</th>
                                     <th className="text-center" >{value.productname}</th>
                                     
                                 </tr>
                             )}
                             </thead>
                             <tbody>
                                 {selectWpx.items.map((value, index) =>
                                 <tr key={index*2}>
                                     <th scope="row" >{value.itemname}</th>
                                     <td className="text-center" >{value.itemA}</td>
                                 </tr>
                                 )}        
                             </tbody>      
                         </table>
               
                         {selectWpx.annotation.map((value, index) =>
                         <p key={index*3}>{value.comment}</p>
                         )}   
                     </div>
        
        } 

        </>
    )
}
    
export default SpecificTable
