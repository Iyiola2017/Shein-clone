import axios from 'axios';
import { useState } from 'react';
import img1 from '../images/caret-down-fill.svg';
function Register() {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    });
    let postData = register
    const [err, setErr] = useState(false);
    const post = (e) => {
        e.preventDefault();

        if (register.name === "" || register.email === "" || register.phone === "" || register.password === "") {
            setErr(true)
        } else {
            axios.post("http://159.65.21.42:9000/register", postData)
                .then((resp) => {
                    let response = resp.data.error
                    if (response) {
                        alert("user exist")
                    } else {
                        alert("User Registered successfully")
                    }
                    setRegister({
                        name: "",
                        email: "",
                        password: "",
                        phone: ""
                    })
                }).catch((err) => { console.log(err) })
        }
    }
    return (
        <div className='register'>
            <div className="register-txt">
                <h4>New to SHEIN</h4>
            </div>
            <div className="reg-location-txt">
                <p>Location:</p>
                <p>Nigeria <span><img src={img1} alt="Image" className='' /></span></p>
            </div>

            <form className='register-form' onSubmit={post}>
                <div className='reg'>
                    <label htmlFor="Full Name">Full Name</label>
                    <input type="text" value={register.name} onChange={(e) => setRegister({ ...register, name: e.target.value })} />
                    {err && register.name === "" ? <span>Full Name Required</span> : null}
                </div>
                <div className='reg'>
                    <label htmlFor="Phone Number">Phone Number</label>
                    <input type="text" value={register.phone} onChange={(e) => setRegister({ ...register, phone: e.target.value })} />
                    {err && register.phone === "" ? <span>Phone Number Required</span> : null}

                </div>
                <div className='reg'>
                    <label htmlFor="Email Address">Email Address</label>
                    <input type="text" value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} />
                    {err && register.email === "" ? <span>Email Address Required</span> : null}
                </div>
                <div className='reg'>
                    <label htmlFor="Password">Password</label>
                    <input type="password" value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} />
                    {err && register.password === "" ? <span>Password Required</span> : null}
                </div>
                <div className='style-pref'>
                    <p>Style Preference</p>
                </div>
                <div className='style-pref-input'>
                    <div className='style-pref1'>
                        <div className='check'>
                            <input type="checkbox" />
                            <p>Women</p>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <p>Plus Size</p>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <p>Home</p>
                        </div>
                    </div>

                    <div className='style-pref1'>
                        <div className='check'>
                            <input type="checkbox" />
                            <p>Men</p>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <p>Kids</p>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <p>Pet Supplies</p>
                        </div>
                    </div>
                </div>

                <div className='agreement'>
                    <input type="checkbox" />
                    <p>By regeristering, you agree to receive exclusive offers and latest news by email.
                        If you wish to no longer receive email, please check the unsubscribe option.
                    </p>
                </div>
                <div className='reg-btn'>
                    <button>Register</button>
                    <p>Get US$3 off coupon and more</p>
                    <p>Why Register?</p>
                </div>
            </form>
        </div>
    )
};
export default Register;