import Header from "./components/Header/header";
import { useState } from "react";
import Form from "./components/Form /form";
import Results from "./components/Results/results";
import Footer from "./components/Footer/footer";
import "./App.css";

function App() {
  const [data, setData] = useState({});
const [method, setMethod] = useState("Get");
const [url, setUrl] = useState("");

function getUrl(e) {
  e.preventDefault();
  setUrl(e.target.value);
  console.log(url);
}
function changeMethod(e) {
  e.preventDefault();
  setMethod(e.target.value);
  console.log(method);
}



  function onSubmit(e) {
    e.preventDefault();
    const mockRes = {
      Results: "Response",
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    };
    setData(mockRes);
  }
  return (
    <div id="app">
      <Header />
      <Form  changeMethod={changeMethod} getUrl={getUrl} />
      {setData ? <Results data_1={data} /> : null}
      <Footer />
    </div>
  );
}

export default App;
