import './header.scss';
export default function Header() {

    return (
        <div className='header'>
       

            <h1 id="title">RESTy</h1>

        
        <nav className='nav'>
            <ul className='ul'> 
            <li><a className='a' href="/">Home</a></li>
            <li><a className='a' href="/History">History</a></li>
            <li><a className='a' href="/Help">Help</a></li>
            </ul>
        </nav>
        </div>
    )

} 