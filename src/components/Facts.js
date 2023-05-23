import { useState } from "react";
import { useEffect } from "react";
import "./facts.css"
import ShowFact from "./ShowFact"
import 'bulma/css/bulma.min.css';

function Facts({facts}) {

  const [data, setData]=useState(facts.data);
  

  const handleDelete=(index)=>{
       data.splice(index, 1);
       setData(data);
  }

  const rednderedFacts = data.map((fact, index)=>{
    console.log(index)
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
  