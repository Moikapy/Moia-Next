import Router from "../Router";
const router = Object.keys(Router);
const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        {
            router.map((route,index)=>(
                <li className="nav-item" key={index}><a className="nav-link" href={Router[route]}>{route}</a></li>
            ))
        }
        </ul>
        </div>
    </nav>
)
export default Navbar;