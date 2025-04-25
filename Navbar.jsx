import './Navbar.css';

function Navbar(){
    return (
        <>
        <div className="nav">

        <div className="left">
            <h2>Dribbble</h2>
        </div>

        <div className="mid">
            <a href="#">Explore</a>
            <a href="#">Hire a Designer</a>
            <a href="#">Find Jobs</a>
            <a href="#">Blog</a>
        </div>

        <div className="right">
            <button className="signup">Sign up</button>
            <button className="login">Log in</button>
        </div>
        
        </div>

        </>
    )
}

export default Navbar;