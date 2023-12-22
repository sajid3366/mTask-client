import { useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { LuLogOut } from "react-icons/lu";

const Aside = () => {
    const { user,logOut } = useAuth();
    const navigate = useNavigate()
    const handlelogOut = () =>{
        logOut();
        navigate(location?.state ? location.state : "/")

    }
    console.log(user);
    return (
        <div className="bg-purple-900 rounded-xl px-5  h-[80vh] w-[250px] sticky top-10 pt-10 text-white text-center">
            <div className="flex justify-center">
                <img className="w-[30%] rounded-full" src={user?.photoURL} alt="" />
            </div>
            <h1 className="text-2xl font-semibold mt-3 mb-3">{user?.displayName}</h1>
            <h1>{user?.email}</h1>
            <p  onClick={handlelogOut} className="flex items-center justify-center mt-[200px] gap-x-2 cursor-pointer">
                <LuLogOut className="text-sm" />

                Log Out
            </p>
        </div>
    );
};

export default Aside;