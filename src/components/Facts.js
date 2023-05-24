import { useState } from "react";
import { useEffect } from "react";
import "./facts.css"
import ShowFact from "./ShowFact"
import 'bulma/css/bulma.min.css';
import SearchBar from "./SearchBar";

function Facts({ facts }) {

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(facts.data);
  }, [facts])



  const handleDelete = (index) => {
    const list = data;
    const arr = data.splice(index, 1);
    const filteredList = list.filter(item => item !== arr);
    const temporary = filteredList;
    setData(temporary);
  }

  const handleSearch = (term) => {
    const list = data;
    console.log(term)
    if (term != "") {
      const searchResult = list.filter((item) => item.fact.includes(term));
      setData(searchResult);
    }
    else {
      console.log("null")
    }
  }

  const rednderedFacts = data.map((fact, index) => {
    return <ShowFact fact={fact.fact} index={index} handleDelete={handleDelete} />
  })
  return (
    <div>
      <div>
        <h1 className="title">Cat Facts!</h1>
        <div style={{ marginLeft: '70%' }} >
          <SearchBar handleSearch={handleSearch} />
        </div>
      </div>
      <div>{rednderedFacts}</div>
    </div>
  );
}

export default Facts;
