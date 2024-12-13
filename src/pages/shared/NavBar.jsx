import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/jobs-logo.png"
const NavBar = () => {

  const { user , loading , signOutUser } = useContext(AuthContext);
  const handleSignOut = () =>{

    signOutUser()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    })
  }

  const links = <>
   <li>
            <Link to="/">Home</Link>
              </li>
                <li>
                <Link to="/myApplication">My Applications</Link>
                </li>
               

              <li>
                <a>Other 2</a>
              </li>
  </>

if (loading) {
  return <div>Loading...</div>;  // You can replace this with a loading spinner or animation
}
  return (
    <div>
      <div className="navbar bg-base-100 w-9/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
{links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl"><img src={logo} alt="" /> Job Portal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
{links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user? (
              <div>
                <span>Hello, {user.email}!</span>
                <button onClick={handleSignOut} className="btn m-2">Logout</button>
              </div>
            ) : (
              <div>
                          <Link to="/login" className="btn">Sign In</Link>
                          <Link to="/register" className="btn">Register</Link>
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default NavBar;
