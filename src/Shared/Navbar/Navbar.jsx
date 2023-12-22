import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=" lg:flex justify-between py-1 items-center px-4 h-[100%] ">
            <div>
                <Link to="/">
                    <h1 className='text-4xl font-bold ml-20'>M Task</h1>
                </Link>
            </div>

            <div className='lg:flex '>
                <ul className="flex flex-wrap gap-y-3 justify-center font-semibold mt-5 lg:mt-0 lg:ml-12 items-center gap-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                            }>
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/createProject" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/assignments" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Contact 
                        </NavLink>
                    </li>
                    
                    

                </ul>
                <div className="mt-5 lg:ml-10 flex justify-center items-center gap-2 lg:mt-0 py-2">

                    <div>
                        {
                            // user ? <>

                            //     <div className="flex gap-2 items-center">

                            //         {/* <p className="text-xl w-full flex  font-semibold">{user.displayName}</p> */}
                            //         {/* <img className={` w-[40px] h-[40px] rounded-full`} src={user.photoURL} alt="" />
                            //      */}

                            //         <div className="relative group cursor-pointer">
                            //             <img src={user.photoURL} alt="Your Image" className="w-[40px] h-[40px] rounded-full group-hover:opacity-50" />
                            //             <div className="absolute w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            //                 <p className="text-black text-lg ">{user.displayName}</p>
                            //             </div>
                            //         </div>
                            //         <div>
                            //             <button onClick={handleLogout} className="  ml-2 bg-slate-300 rounded-sm  text-black px-4 py-2">Logout</button>
                            //         </div>

                            //     </div>
                            // </>
                            //     : <div className="w-1/3  items-center">
                            //         <NavLink to='/login'><button className="bg-slate-300 rounded-sm text-black  px-4 py-2">Login</button></NavLink>
                            //     </div>
                        }
                    </div>



                </div>
            </div>


        </nav>
    );
};

export default Navbar;