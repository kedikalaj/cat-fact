import "./pagination.css"
import 'bulma/css/bulma.min.css';

function Pagination({facts, handleDataChange}) {

    const handleButtonClick = (url) => {
        console.log(url)
        console.log("d")
        const newData = url;
        handleDataChange(newData);
      };
  const renderLinks = facts.links.map((link)=>{
    return (
        <div>
             
            <button className="button" onClick={()=>handleButtonClick(link.url)}>{link.label}</button>
        </div>
      );
  })

    return (
      
      <div className="flex-container">{renderLinks}</div>
    );
  }

  export default Pagination;
  