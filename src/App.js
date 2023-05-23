
import Facts from "./components/Facts"
import Pagination from "./components/Pagination"
import retrieveData from './API';
import { useState } from "react";
import { useEffect} from "react";

 function App() {
  const [facts, setFacts] = useState(null);
  const [url, setUrl] = useState('https://catfact.ninja/facts');


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData);
      setFacts(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [url]);

const handleDataChange = (newUrl) => {
  setUrl(newUrl);
};

  return (
    <div>
      {facts ? (
         <div >

          <div>
          <Facts facts={facts}/>
          </div> 
          <div>
            <Pagination facts={facts} handleDataChange={handleDataChange} />
          </div>
       </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
