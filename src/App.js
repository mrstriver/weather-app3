

import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import React,{useState} from 'react';



 function Heading(){
  
  const[city,setCity]=useState("");
  const[data,setData]=useState();
  
  const APIkey='94030a40a5e16e2ca0e7c715f328d42f';
  const fetchdata= async ()=>{

    try{
      const responsible = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=${APIkey}`);
      setData(responsible.data);
      console.log(data);
       
    
    }
    catch(err){
alert("error in api call");
    }
  }
  return(
    <div className='orgi'>
    
    
    
    
   {/*<form className="row domain-search bg-pblue">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2 className="form-title">Climate For <strong>Better World</strong></h2>
                    <p>Search for your forecast</p>
                </div>
                <div className="col-md-9">
                    <div className="input-group">
                        <input type="text" className="form-control" value={city}  placeholder='ENTER THE CITY' onChange={e => setCity(e.target.value)}/>
                        <span className="input-group-addon"><button  className="btn btn-primary"  placeholder='search' onClick={fetchdata} >submit</button></span>
                    </div> 
                  
                   
                    <div className="container mt-3"></div>
    <div className="card">
    <div className="card-body"> {data &&(<div><p >{ data.main.temp_min}</p></div>)}</div>
  </div>
                </div>
            </div>
        </div>
  </form>*/}
   
 
    
  


    <div className='fieldarea'>
    <input  type="text"  value={city}  placeholder='ENTER THE CITY' onChange={e => setCity(e.target.value)}/><br></br>
    <button   placeholder='search' onClick={fetchdata} >submit</button>
    </div>
    <div className='card'> {data &&(<div><h1 >&#9925;: { Math.round(data.main.temp/10) }°C  &#65039;</h1><h2>	&#128508;:{data.name}</h2><h3>&#x1F4A8; : {data.wind.speed}</h3></div>)}</div>
  
    </div>
  )
 };

export default Heading;
