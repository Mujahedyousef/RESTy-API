import './form.css';
export default function Form(props) {
// console.log(props.urlHandel);
    return (
        <div className="allForm" >
            <form className="form" >

                <input id="urlInput" type="text" name="URL"  onChange={props.urlHandel} placeholder='http://api.url.here..............' />
                <button id="go" type="submit" value="go" onClick={props.onSubmit} >GO</button>
                <div className="btn">
                    <button className="button" id="get" type="submit" value="Get" onClick={props.changeMethod} >Get</button>
                    <button className="button" id="Post" type="submit" value="Post" onClick={props.changeMethod}>Post</button>
                    <button  className="button" id="Put" type="submit" value="Put" onClick={props.changeMethod}>Put</button>
                    <button  className="button" id="Delete" type="submit" value="Delete" onClick={props.changeMethod} >Delete</button>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" onChange={props.handleBody} placeholder="Write  json {}" />
                </div>
            </form>


        </div>
    )
}
