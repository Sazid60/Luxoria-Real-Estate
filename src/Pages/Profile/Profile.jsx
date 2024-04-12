import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    // State variables to hold user information
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [photoUrl, setPhotoUrl] = useState(user.photoURL);
    const navigate = useNavigate()

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, photoUrl)

        updateUser(name, photoUrl)
            .then(() => {

                // Since the profile is not updating instantly
                setUser({ displayName: name, photoURL: photoUrl })

                toast.success('Update Successful');
                setSuccess("Successfully Update")
                navigate("/")
            })
            .catch(error => {
                setErrorMessage(error.message)
                console.log(errorMessage)
            })
    };

    return (
        <div className="w-full mt-6">
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center lg:justify-normal flex-col lg:w-[50%]">
                    <img src={user.photoURL} className="h-24 w-24 lg:h-32 lg:w-32 rounded-full" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320"/>
                    <h1 className="text-2xl font-bold mt-4"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="400"> {user.displayName.toUpperCase()}</h1>
                </div>
                <div className="w-full md:w-[70%]lg:w-[70%] bg-white">
                    <h1 className="text-lg font-bold mt-6 ml-3" data-aos="fade-up" data-aos-duration="500" data-aos-delay="420">Want To Update Profile ?</h1>
                    <form className="p-3 w-full pb-2" onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                        <div className="form-control" >
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered text-gray-700 bg-transparent border-gray-300" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered text-gray-700 bg-transparent border-gray-300" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photoUrl" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="input input-bordered text-gray-700 bg-transparent border-gray-300" required />
                        </div>
                        <div className="form-control mt-2 flex justify-center items-center" >
                            <button type="submit" className="btn w-36 bg-[#E1B453] border-0 text-white mb-6">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
