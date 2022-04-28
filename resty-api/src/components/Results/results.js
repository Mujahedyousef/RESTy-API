import './results.css';
import JSONPretty from "react-json-pretty";
export default function Results(props){

return(
    <div className="result">
    <br/>
    <section>{<JSONPretty data={props.data}></JSONPretty>}</section>
  </div>
)}