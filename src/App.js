
import Facts from "./components/Facts"
import retrieveData from './API';
import { useState } from "react";

 function App() {
  const [facts, setFacts] = useState("https://catfact.ninja/facts");



  const updateData = async (facts)=>{
    const result = await retrieveData(facts);
    setFacts(result);
  };
  updateData(facts).then((data)=>{return data})
  return (
    
    <div >
      <Facts facts={}/>
    </div>
  );
}

export default App;
