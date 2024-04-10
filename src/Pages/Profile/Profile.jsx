import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";

const Profile = () => {
    const { user } = useContext(AuthContext);

    // State variables to hold user information
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [photoUrl, setPhotoUrl] = useState(user.photoURL);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic to update user information here
    };

    return (
        <div className="w-full mt-6">
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center flex-col">
                    <img src={user.photoURL} className="h-32 w-32 rounded-full" />
                    <h1 className="text-2xl font-bold mt-4">{user.displayName.toUpperCase()}</h1>
                </div>
                <div className="w-full md:w-[70%]lg:w-[70%] bg-white">
                    <form className="p-3 w-full pb-2" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered text-gray-700 bg-transparent border-gray-300" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered text-gray-700 bg-transparent border-gray-300" disabled/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photoUrl" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="input input-bordered text-gray-700 bg-transparent border-gray-300" required />
                        </div>
                        <div className="form-control mt-2 flex justify-center items-center">
                            <button type="submit" className="btn w-36 bg-[#E1B453] border-0 text-white mb-6">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
