import Container from "./Container";


function MainContainer({btn,inputDisplay,onButtonClick}) {
  return (
    <div className="container">
      <div className="textarea">
        <input type="text" className="textarea1"  value={inputDisplay} readOnly/>
      </div>

      <Container btn={btn} onButtonClick={onButtonClick}></Container>
    </div>
  );
}

export default MainContainer;