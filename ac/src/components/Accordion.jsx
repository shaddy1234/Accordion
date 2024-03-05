import data from "./data";
import "./styles.css";

function Accordion() {
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={index}>
                <div className="title">
                <h3>{dataItem.question}</h3>
              <span>+</span>
                </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
