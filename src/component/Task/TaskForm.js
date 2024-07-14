import React, { useContext, useState } from 'react'
import { createTask } from '../../api/tasks';
import { TaskContext } from '../../context/TaskContext';

const TaskForm = ({onSubmit, task}) => {
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
    const [status, setStatus] = useState(task ? task.status : 'Pending');

    const {addTask} = useContext(TaskContext);

    const handleSubmit = async (e) => {
        e?.preventDefault();
        // onSubmit({title, description, dueDate, status})

        try {
            const response = await addTask({title, description, dueDate, status});
            if (response) {
                alert('Task Created!')
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='container py-md-5'>
 <form onSubmit={handleSubmit}>
            <div className="row gy-3 overflow-hidden">
                <div className="col-12">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="title" id="title" value={title} placeholder="Title" required onChange={(e) => setTitle(e.target.value)} />
                        <label for="title" className="form-label">Title</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" value={description} onChange={(e) => setDescription(e.target.value)} rows="3"></textarea>
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating mb-3">
                        <input type="date" className="form-control" name="dueDate" id="dueDate" value={dueDate} placeholder="Due Date" required onChange={(e) => setDueDate(e.target.value)} />
                        <label for="dueDate" className="form-label">Due Date</label>
                    </div>
                </div>

                <div className='col-12'>
                    <select class="form-select" aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option selected>Open this select menu</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="col-12">
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Save Task</button>
                    </div>
                </div>
            </div>
        </form>
        </div>
       
    )
}

export default TaskForm