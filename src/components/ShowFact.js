import { useState } from "react";
import "./facts.css"

function ShowFact({ fact, index, handleDelete }) {
  const [toggle, setToggle] = useState(false);

  const setVisibility = () => {
    setToggle(!toggle)
  }
  return (
    <div className="flex-box" onClick={() => setVisibility()}>
      <div className="flex-item" >
        {fact}

        {toggle ? (
          <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
              <div className="box" style={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{ fontSize:'20px'}}>
                Length: {fact.length}
                </div>
                <div> 
                  <button className="button is-info" onClick={() => setVisibility()}>Return</button>
                  <button className="button is-danger" onClick={() => handleDelete(index) } >Delete</button>
                </div>
              </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => setVisibility()}></button>
          </div>
        ):(<div></div>)}

      </div>
    </div>
  );

}

export default ShowFact;
