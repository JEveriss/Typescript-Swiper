import "./App.css";
import Banner from "./components/banner";
import data from "./components/data.json";

console.log(data);

function App() {
  return (
    <>
      {" "}
      <h1>FILMS</h1>
      <Banner />
    </>
  );
}

export default App;
