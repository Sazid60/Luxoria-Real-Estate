import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import toast from 'react-hot-toast';

const Register = () => {

    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const { createUser, updateUser } = useContext(AuthContext)
    // console.log(createUser)

    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        const name = form.get("name")
        const photoUrl = form.get("photoUrl")
        // console.log(email, password,photoURL,name)
        setSuccess("")
        setErrorMessage("")

        createUser(email, password)
            .then((result) => {
                updateUser(name, photoUrl)
                    .then(() => {
                        toast.success('Registration Successful.');
                        setSuccess("Successfully Registered ")
                        navigate("/")
                        console.log(result.user)
                    })
                    .catch(error=>{
                        console.log(error)
                    })
            })
            .catch(error => {
                setErrorMessage(error.message)
                // console.log(error.message)
            })
    }
    return (
        <div className="w-full lg:mb-4 ">
            <div className="hero-content flex-col w-full">

                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold md-2 ">Register now!</h1>
                </div>
                <div className="card w-full lg:w-[40%] shadow-2xl bg-white">
                    <form className="card-body w-full pb-2" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photoUrl" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                            {
                                errorMessage && <p className='text-red-500 text-sm mt-4'>Error :{errorMessage} </p>
                            }
                            {
                                success && <p className='text-blue-700 text-sm mt-4'>{success}</p>
                            }
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn  bg-[#E1B453] border-0 text-white">Register</button>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-gray-700 text-sm">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/login"}>Login</Link> </p>
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

export default Register;