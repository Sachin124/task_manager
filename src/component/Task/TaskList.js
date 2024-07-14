import { useEffect, useState } from 'react';
import TaskItem from './TaskItem'

const TaskList = ({ tasks, onEdit, onDelete }) => {

    const [sortedTasks, setSortedTasks] = useState([...tasks]);
    const sortByStatus = (e)=>{
        const s = e === 'All' ? [...tasks]:  tasks.filter(f=> f.status === e);
        setSortedTasks(s);

    }
    let taskLists = sortedTasks.map(task => {
        return (<TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />)
    })

    useEffect(()=>{
        sortByStatus('All');
    },[tasks])

    return (
        <section className="py-md-5">

            <div className='container'>

                <div className='col-4 ms-auto'>
                    <select class="form-select"  aria-label="Default select example" onChange={(e)=>sortByStatus(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                {
                    taskLists
                }
            </div>
        </section>
    )
}

export default TaskList