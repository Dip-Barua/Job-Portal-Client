import Lottie from "lottie-react";
import loginLottieData from '../../assets/lottie/login.json'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const SignIn = () => {

const {signInUser} = useContext(AuthContext);
const location = useLocation();
const Navigate = useNavigate();
const from = location.state || '/';


const handleSignIn = e => {
    e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  // validate email and password here...
  console.log(email, password);
  // send request to server to authenticate user...

signInUser(email, password)
.then(result => {
    console.log(result.user)
    Navigate(from)
})
.catch(error => {
    console.error(error);
     
})


}


    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left w-3/6">
  <Lottie animationData={loginLottieData}></Lottie>
</div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
<h1 className="text-5xl font-bold ml-8 mt-4">Login now!</h1>

  <form onSubmit={handleSignIn} className="card-body">
    
    <div className="form-control">
        
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button  className="btn btn-primary">Login</button>
    </div>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default SignIn;