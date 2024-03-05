import data from './data';  // Make sure to import the 'data' variable

function Accordion() {
  return (
    <div className='wrapper'> 
      {
        data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div key={index}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )
      }
    </div>
  );
}

export default Accordion;