import React,{useState,useContext, useEffect} from 'react'




const Display = ({data}) =>{
   

    return(
        <>
       { data !== null && (data.map((e)=>{
    
      return ( 
      <>
      <div key={e.id} className = "display">
      <div>
                <small>
                    Name:{e.firstName}  {
                        e.middleName !== "" && (
                            <>
                            {e.middleName}
                            </>
                        )
                    }  {e.lastName}
                    
                  </small>
            </div>
            <div>
                <small>email: {e.email} </small>
            </div>
            <div>
                <small>phone: {e.phone} </small>
            </div>
            <div>
                <small>Address: {e.address},{e.country},{e.state} , {e.zip}</small> 
            </div>
            <div className="form-group1">
            <div className="form-group1-sub p2">
                <small>Height: {e.height} cm</small> 
            </div>
            <div className="form-group1-sub p2">
                <small>Weight: {e.weight} Kgs</small>
            </div>
            </div>
        </div>
          
            </>
            )
       })
            )}
          
        </>
    )
}

export default Display