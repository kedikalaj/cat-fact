import "./facts.css"

function ShowFact({ fact }) {
  return (
    <div class="box">
      <div>
      <strong><p>{fact}</p></strong> 
      </div>
    </div>
  );
}

export default ShowFact;
