import Card from "./assets/Components/Card";
import "./index.css";
import data from "./assets/data.json";
import Header from "./assets/Components/Header/header";
function App() {
  console.log(data);
  return (
    <div>
      <Header />
      <div className="aldiv container">
        {data.length &&
          data.map((el, index) => {
            return <Card key={index} data={el}></Card>;
          })}
      </div>
    </div>
  );
}

export default App;
