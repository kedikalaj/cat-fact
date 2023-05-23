import "./facts.css"
import ShowFact from "./ShowFact"
import 'bulma/css/bulma.min.css';

function Facts({facts}) {

  const rednderedFacts = facts.data.map((fact)=>{

    return <ShowFact fact={fact.fact}/>
  })

    return (
      
      <div>{rednderedFacts}</div>
    );
  }
  
  export default Facts;
  