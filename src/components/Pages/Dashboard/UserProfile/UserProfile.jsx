import { IoSearchSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import ToDoTask from "./ToDoTask";
import Modarate from "./Modarate";
import CompleteTask from "./CompleteTask";

const UserProfile = () => {
    const [startDate, setStartDate] = useState();
    const axiosPublic = useAxiosPublic();
    const [success, setSuccess] = useState("")
    const [todoTasks, setTodoTasks] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/tasks/todo`)
            .then(result => {
                console.log(result.data);
                setTodoTasks(result.data)
            })
    }, [axiosPublic])
    useEffect(() => {
        axiosPublic.get(`/tasks/moderate`)
            .then(result => {
                console.log(result.data);
                setOngoingTasks(result.data)
            })
    }, [axiosPublic])
    useEffect(() => {
        axiosPublic.get(`/tasks/completed`)
            .then(result => {
                console.log(result.data);
                setCompletedTasks(result.data)
            })
    }, [axiosPublic])

    const handleCreateTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const priority = form.priority.value;
        const date = form.date.value;
        const description = form.description.value;

        const taskInfo = {
            title, description, priority, date,
            status: "todo"
        }
        console.log(taskInfo);

        axiosPublic.post(`/tasks`, taskInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    setSuccess(true);

                }
            })

        form.reset();
    }



    return (
        <div className="flex-1">
            <div>
                <form>
                    <input className="outline-none text-black text-xl  h-[50px] shadow-sm rounded-md py-2 px-3 w-[350px]" type="text" placeholder="Search" /><IoSearchSharp className=" absolute ml-[300px] -mt-[40px] text-2xl search" />
                </form>
            </div>
            <div className="mt-8 flex justify-between items-center mb-3">
                <h1 className="text-3xl font-bold">Task Management</h1>
                {/* <p className="bg-purple-900 rounded-sm py-[4px] px-[6px] text-white cursor-pointer">Create Task</p> */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <p className=" bg-purple-900 rounded-sm py-[4px] px-[6px] text-white cursor-pointer" onClick={() => document.getElementById('my_modal_1').showModal()}>Create Task</p>

                <dialog id="my_modal_1" className="modal">
                    <div className="bg-white rounded-md py-4 px-6 w-[500px] text-black">
                        <h1 className="text-black font-bold text-2xl mb-5">Create Task</h1>
                        <hr />
                        <form onSubmit={handleCreateTask}>

                            <div className='mt-5'>
                                <p>Task Title</p>
                                <input className='border-2 rounded-md mt-1 border-solid px-4 w-full h-[50px]' placeholder='Assignment Name' required type="text" name="title" id="" />

                            </div>

                            <div className='mt-5'>
                                <p>Description</p>
                                <textarea className='border-2   rounded-md px-4 mt-1 py-2  border-solid w-full h-[200px]' placeholder='Description' required type="text" name="description" id="" />

                            </div>
                            <div className="flex gap-x-5 mt-5">
                                <div className='w-1/2'>
                                    <p>Priority</p>
                                    <select name="priority" required className="select max-w-xs border-gray-300  border-2 mt-1 rounded-md px-4 border-solid w-full h-[50px]">
                                        <option>Low</option>
                                        <option>Moderate</option>
                                        <option>High</option>
                                    </select>
                                </div>

                                <div className='w-1/2 '>
                                    <p>Dead Line</p>
                                    <DatePicker required className="border-2  rounded-md mt-1 px-4 border-solid  lg:w-full h-[50px]" name="date" placeholderText="Due Date" selected={startDate} onChange={(date) => setStartDate(date)} />

                                </div>

                            </div>
                            <div className="mt-3">
                                {
                                    success ? <p className="text-green-600" >Task Succussfully Created</p> : ""
                                }
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className=" bg-red-600 rounded-sm py-1 px-3   text-white cursor-pointer font-semibold">Close</button>


                                    {/* if there is a button in form, it will close the modal */}
                                </form>
                                <input method="dialog" className=" bg-purple-900 rounded-sm py-[4px] px-[8px] text-white cursor-pointer font-semibold" type="submit" value="Creat Task" />
                            </div>

                            {/* <input className=" bg-purple-900 rounded-sm py-[4px] px-[8px] text-white cursor-pointer font-semibold" type="submit" value="Creat Task" /> */}

                        </form>


                    </div>
                </dialog>
            </div>
            <hr />

            <div className="mt-5 grid grid-cols-3 gap-x-5">
                <div className="text-left">
                    <h1 className="text-lg font-bold mb-3">To-Do</h1>

                    {
                        todoTasks.map(task => <ToDoTask key={task._id} task={task}></ToDoTask>)
                    }

                </div>
                <div >
                    <h1 className="text-lg font-bold mb-3">Ongoing</h1>
                    {
                        ongoingTasks.map(task => <Modarate key={task._id} task={task}></Modarate>)
                    }
                    
                </div>
                <div >
                    <h1 className="text-lg font-bold mb-3">Completed</h1>
                    {
                        completedTasks.map(task => <CompleteTask key={task._id} task={task}></CompleteTask>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UserProfile;

// bg-[#151f30]