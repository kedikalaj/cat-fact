import { useState } from "react";
import { useEffect } from "react";
import "./facts.css"
import ShowFact from "./ShowFact"
import 'bulma/css/bulma.min.css';

function Facts({facts}) {

  const [data, setData]=useState([]);
  useEffect(()=>{
    setData(facts.data);
  },[])
 
  

  const handleDelete=(index)=>{
    console.log(data);
    console.log(index);
       const list = data;
       const arr = data.splice(index, 1);
       const filteredList = list.filter(item => item !== arr);

       console.log(filteredList);
       setData(filteredList);
  }

  const rednderedFacts = data.map((fact, index)=>{
    return <ShowFact fact={fact.fact} index={index} handleDelete={handleDelete}/>
  })

    return (
      <div>
        <h1 className="title">Cat Facts!</h1>
      <div>{rednderedFacts}</div>
      </div>
    );
  }
  
  export default Facts;
  