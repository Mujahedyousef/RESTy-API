import Header from "./components/Header/header";
import { useState, useEffect } from "react";
import Form from "./components/Form /form";
import Results from "./components/Results/results";
import Footer from "./components/Footer/footer";
import "./App.scss";

function App() {
  const [data, setData] = useState({});
  const [method, setMethod] = useState("Get");
  const [url, setUrl] = useState();
  const [headers, setHeaders] = useState({});
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
      // console.log(data);
      // console.log(method);
      // console.log(url);
      
    } else if (method === "Post") {
      const response = await fetch(url, {
        url: url,
        method: "Post",
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          JSON.parse(body)
          ),
      });
      let header= await response.headers.get("Content-Type");
      setHeaders({header});
      const data = await response.json();
      
      setData(data);
    } else if (method === "Put") {
      const response = await fetch(url, {
        url: url,
        method: "Put",
        headers: {  
          'Accept': 'application/json',
          "Content-Type": "application/json",
        
        },
        body: JSON.stringify(
          JSON.parse(body)
        ),
      });
      const data = await response.json();
      setData(data);
     
    } else if (method === "Delete") {
      const response = await fetch(url, {
        url: url,
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}) ,
      });
      const data = await response.json();
      setData(data);
      
    }
  }
 

  const remData = new Promise((resolve)=>{setTimeout(resolve,25000)})
   
  useEffect(() => {
    remData.then(()=>{
      setData({});
      setHeaders({});
      setBody({});
      setLoading(false);
    }
    )
  }, []);
  
  // way two to remove data with out using useEffect
 // removeData.then(()=>{
    //   setData({})
    //   setHeaders({})
    //   setBody({})
    //   setLoading(false)
    // }

  
  return (
    <div id="app">
      <Header />
      <Form
        changeMethod={changeMethod}
        handleBody={handleBody}
        urlHandel={urlHandel}
        onSubmit={onSubmit}
        setData={setData}
      />
      {loading ? <Results data={data}  method={method}
        url={url}
        // body={body}
        headers={headers}
         /> : null}
      <Footer />
    </div>
  );
}

export default App;
