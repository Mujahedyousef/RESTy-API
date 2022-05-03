import './results.scss';
import JSONPretty from "react-json-pretty";
var JSONPrettyMon = require('react-json-pretty/dist/monikai');
export default function Results(props){
  console.log(props.headers);
return(
    <div className="result">
    <br/>
   <dev className="method">

   
  <span id="button"> {props.method}</span>  
  <span id='url'> {props.url} </span>
    </dev> 
    <div className='result-container'>headers : <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.headers} ></JSONPretty>
     Data:  <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.data} ></JSONPretty></div>
  </div>
)}

