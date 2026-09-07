function Container({ btn,onButtonClick }) {
  return (
    <div className="button">
      {btn.map((item,index) => (
        <button key={index} className="btn" onClick={()=>onButtonClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Container;