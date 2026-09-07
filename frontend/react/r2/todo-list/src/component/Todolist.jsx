function Todolist({todoName,todoDate,onDeleteClicck }) {
  

  return (
    
    <div className="container">
      <div className="row ps-rows">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger ps-button" onClick={()=> onDeleteClicck(todoName)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Todolist;