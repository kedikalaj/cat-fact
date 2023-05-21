import "./facts.css"
import ShowFact from "./ShowFact"

function Facts({facts}) {
  console.log(facts);
  const rednderedFacts = facts.data.map((fact)=>{
    console.log("test11111111");
    console.log(fact);
    return <ShowFact fact={fact}/>
  })

    return (
      <div className="facts-list">{rednderedFacts}</div>
    );
  }
  
  export default Facts;
  