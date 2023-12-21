import Aside from "./Aside/Aside";
import UserProfile from "./UserProfile/UserProfile";

const Dashboard = () => {
    return (
        <div className="max-w-[1450px] mx-auto mt-8 flex gap-x-8">
            
            <Aside></Aside>
            <UserProfile></UserProfile>
        </div>
    );
};

export default Dashboard;