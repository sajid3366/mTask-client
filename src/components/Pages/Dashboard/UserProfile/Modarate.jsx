import { IoMdFlag } from "react-icons/io";

const Modarate = ({ task }) => {
    const { title, description, priority, date } = task;
    console.log(title);
    return (
        <div className=" mb-5 rounded-sm px-5 pt-5 pb-8 bg-white shadow-md">
            <div className=" flex justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-sm mt-2">{description}</p>
                </div>
                <div>
                    <p className="text-lg font-medium bg-purple-800 text-white rounded-md px-3 py- mt-3">{priority}</p>
                </div>

            </div>
            <p className="mt-5 flex gap-x-2 items-center"><IoMdFlag /> {date}</p>
            {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
    );
};

export default Modarate;