import React,{useState,useContext,useEffect} from 'react'
import MyForm from '../components/form'
import Display from '../components/display'

const Dashboard = () => {

  const [data,setData] = useState([]);

  const viewData=()=>{
      if(JSON.parse(localStorage.getItem("formDetails"))!== null){
          var extdata = JSON.parse(localStorage.getItem("formDetails"))
          console.log("extdata",extdata)
          setData(extdata.tdetail)
        }else{
          console.log("error")
        }
    
    }

    console.log ( data)
    useEffect(()=>{
      viewData()
  },[])


  return (

    <div>
      <div className="page_info">
        <div>
          <h3 className="heading24_bold mytitle">My form</h3>
        </div>
      </div>
      <div>
            <MyForm viewData={viewData}/>
        </div>
        <div >
            <Display data={data}/>
        </div>
        
    </div>

  );
}

export default Dashboard
