import Header from "./components/Header/header";
import { useState } from "react";
import Form from "./components/Form /form";
import Results from "./components/Results/results";
import Footer from "./components/Footer/footer";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [method, setMethod] = useState("Get");
  const [url, setUrl] = useState();
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(false);

  function urlHandel(e) {
    e.preventDefault();
    setUrl(e.target.value);
    // console.log(url);
  }

  function handleBody(e) {
    e.preventDefault();
    setBody(e.target.value);
    // console.log(body);
  }
  function changeMethod(e) {
    e.preventDefault();
    // console.log(method);
    setMethod(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (method === "Get") {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      
    } else if (method === "Post") {
      const response = await fetch(url, {
        method: "Post",
        headers: {
          // 'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          JSON.parse(body)
          ),
      });
      const data = await response.json();
      setData(data);
    } else if (method === "Put") {
      const response = await fetch(url, {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          JSON.parse(body)
        ),
      });
      const data = await response.json();
      setData(data);
      console.log(data);
      console.log(body);
    } else if (method === "Delete") {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      
      setData(data);

    }
  }

  return (
    <div id="app">
      <Header />
      <Form
        changeMethod={changeMethod}
        handleBody={handleBody}
        urlHandel={urlHandel}
        onSubmit={onSubmit}
      />
      {loading ? <Results data={data} /> : null}
      <Footer />
    </div>
  );
}

export default App;
