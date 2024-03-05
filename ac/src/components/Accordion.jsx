import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={index}>
              <div className="title" onClick={() => toggleAccordion(index)}>
                <h3>{dataItem.question}</h3>
                <span>{selected === index ? '-' : '+'}</span>
              </div>
              {selected === index && (
                <div className="content">
                  {<p>{dataItem.answer}</p>}
                </div>
              )}
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

