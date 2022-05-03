import './results.scss';
import JSONPretty from "react-json-pretty";
var JSONPrettyMon = require('react-json-pretty/dist/monikai');
export default function Results(props){
  console.log(props.headers);
return(
    <div className="result">
    <br/>
   <dev className="method">

   
  <div> Method: <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.method} ></JSONPretty></div>
  <div> URL:  <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.url} ></JSONPretty></div>
    </dev> 
    <div>headers : <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.headers} ></JSONPretty></div>
    <div> Data:  <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.data} ></JSONPretty></div>
  </div>
)}

