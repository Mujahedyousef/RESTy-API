import './form.css';
export default function Form(props) {

    return (
        <div className="allForm" >
            <form className="form" >

                <input id="urlInput" type="text" name="URL" placeholder='http://api.url.here..............' />
                <button id="go" type="submit" value="go" onClick={props.onSubmit} >GO</button>
                <div className="btn">
                    <button id="get" type="submit" value="Get" >Get</button>
                    <button id="Post" type="submit" value="Post" >Post</button>
                    <button id="Put" type="submit" value="Put" >Put</button>
                    <button  id="Delete" type="submit" value="Delete" >Delete</button>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Write  json {}" />
                </div>
            </form>


        </div>
    )
}
