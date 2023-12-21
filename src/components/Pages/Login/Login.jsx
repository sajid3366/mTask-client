import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
    const { login, googleLogin } = useAuth();
    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            email, password
        }
        console.log(user);
    }

    const handleGoogleSignin = e => {
        e.preventDefault();

        googleLogin()
            .then(resuslt => {
                console.log(resuslt.user);
                // setSuccess('Successfully Logged In');
                navigate(location?.state ? location.state : "/dashboard")
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="text-white flex justify-around items-center mt-[60px]">
            <div className="text-black max-w-md text-center">
                <div className="flex justify-center mb-10">
                    <svg width="4rem" fill="currentColor" className="bi bi-clipboard-check text-black" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                    </svg>
                </div>
                <h1 className="text-4xl mb-12">M-Task Let's Management Better</h1>
                <img src="http://pixelwibes.com/template/my-task/html/dist/assets/images/login-img.svg" alt="" />
            </div>
            <div className="text-center w-[450px] -ml-[300px] bg-[#131720] px-12 py-8 rounded-lg pt-10">
                <div className="text-5xl mb-16">
                    Sign in
                </div>
                <form onSubmit={handleLogin}>
                    <div >
                        <input className="bg-[#151f30] mb-5 w-full rounded-xl h-12 px-5" type="email" name="email" placeholder='Email' />
                    </div>
                    <div>
                        <input className="bg-[#151f30] mb-5 w-full rounded-xl h-12 px-5" type="password" name="password" id="" placeholder='Password' />
                    </div>
                    <div className="text-left"><input className="text-white mr-2" type="checkbox" defaultChecked name="rememberme" id="" />
                        Remember me
                    </div>
                    <div>
                        <input className="btn btn-primary w-full rounded-2xl uppercase mt-5 mb-3 hover:bg-slate-100 hover:text-black color " type="submit" value="Login" />
                    </div>
                </form>
                <div>
                    <p>or</p>
                    <div className='flex gap-x-5 justify-between text-2xl mt-3'>
                        <div className='bg-[#3b5999] w-full flex justify-center rounded-2xl py-2 color hover:bg-slate-100'><FaFacebookF /></div>
                        <div onClick={handleGoogleSignin} className='bg-[#df4a32] w-full flex justify-center rounded-2xl py-2 color hover:bg-slate-100'><FaGoogle /></div>
                        <div className='bg-[#1da1f2] w-full flex justify-center rounded-2xl py-2 color hover:bg-slate-100'><IoLogoTwitter /></div>
                    </div>
                    <div>
                        <h2 className='mt-5'>Don't have an account? <Link to="/signup" className='text-[#2f80ed] '>SIgn up!</Link></h2>
                        <Link to="/"><h2 className='text-[#2f80ed] mt-3'>Forget Password?</h2></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;