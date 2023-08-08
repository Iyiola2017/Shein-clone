import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import img1 from '../images/caret-down-fill.svg';
import img2 from '../images/facebook.svg';
import img3 from '../images/google.svg';
function Login() {
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    let confirmLogin = login;
    const loginData = (e) => {
        e.preventDefault();

        console.log(confirmLogin)

        if (login.email === "" || login.password === "") {
            setErr(true);
        } else {
            axios.post("http://159.65.21.42:9000/login", confirmLogin)
                .then((resp) => {
                    if (resp.data.error) {
                        alert(resp.data.error)
                    } else { alert("You have successfully logged in") }
                    navigate("/");
                })

                .catch((error) => console.log(error));
        }
    };
    return (
        <form className="sign-in" onSubmit={loginData}>
            <div className="sign-in-txt">
                <h4>Sign In</h4>
            </div>
            <div className="location-txt">
                <p>Location:</p>
                <p>Nigeria <span><img src={img1} alt="Image" className='' /></span></p>
            </div>

            <div className='login-form'>
                <div className='email'>
                    <label htmlFor="Email Address">Email Address</label>
                    <input type="text" onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                    {err && login.email === "" ? <span>Email Required</span> : null}
                </div>
                <div className='email'>
                    <label htmlFor="Password">Password</label>
                    <input type="password" onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                    {err && login.password === "" ? <span>Password Required</span> : null}
                </div>
            </div>
            <div className='sign-in-btn'>
                <button>SIGN IN</button>
                <p>Forget your password?</p>
                <p>or</p>
            </div>
            <div className='Google'>
                <button> <span><img src={img3} alt="Image" className='' /> </span>Sign in With Google</button>
                <button><span> <img src={img2} alt="Image" className='' /> </span>Sign In With Facebook</button>
            </div>
            <div className='condition'>
                <p>By signing in to your account, you agree to our <span>Privacy & Cookie Policy and Terms & Conditions.</span></p>
                <p>Get US$3 off for the first order</p>
                <p>Verify & earn extra <span>100</span> points</p>
            </div>
        </form>
    )
};
export default Login;