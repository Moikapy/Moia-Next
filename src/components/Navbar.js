import Router from "../Router";
const router = Object.keys(Router);
const Navbar = ({ siteName }) => (
    <span>
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5'>
            <a className='navbar-brand' href='/'>
                {siteName}
            </a>
            <div className='' id='navbarNav'>
                <div className='navbar-nav flex-row'>
                    {router.map((route, index) => (

                        <a className='nav-item nav-link mx-2' key={index} href={Router[route]}>
                            {route}
                        </a>

                    ))}
                </div>
            </div>
        </nav>
    </span>
);
export default Navbar;