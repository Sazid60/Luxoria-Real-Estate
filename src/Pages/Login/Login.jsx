import { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")


        setSuccess("")
        setErrorMessage("")
        console.log(email, password)
    }
    return (
        <div className="hero lg:mb-4 ">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">Login now!</h1>
                </div>
                <div className="card w-full lg:w-[40%] shadow-2xl bg-white">
                    <form className="card-body w-full" onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-sm">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-sm">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                            {
                                errorMessage && <p className='text-red-500 text-xs mt-4'>Error :{errorMessage} </p>
                            }
                            {
                                success && <p className='text-blue-700 text-xs mt-4'>{success}</p>
                            }
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-[#E1B453] border-0 text-white">Login</button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-gray-700 text-sm">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/register"}>Register</Link> </p>
                        </div>
                    </form>
                    <div className="divider text-gray-700">Continue With</div>
                    <div className="flex justify-center gap-4 lg:gap-7 mb-6 pb-0">
                        <button className="btn rounded-full" ><FaGoogle />Google</button>
                        <button className="btn rounded-full" ><FaGithub />GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;