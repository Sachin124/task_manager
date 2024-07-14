import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../../context/TaskContext';
import toastService from '../../services/toastService';
import Header from '../Layout/Header';

const TaskForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addTask, getTaskById, editTask } = useContext(TaskContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('Pending');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const fetchTask = async () => {
                try {
                    const task = await getTaskById(id);
                    setTitle(task.title);
                    setDescription(task.description);
                    setDueDate(formatDate(task.dueDate));
                    setStatus(task.status);
                } catch (error) {
                    console.error('Error fetching task:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchTask();
        } else {
            setLoading(false);
        }
    }, [id, getTaskById]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description, dueDate, status };

        try {
            if (id) {
                await editTask(id, taskData);
                toastService.success('Task updated successfully!');
            } else {
                await addTask(taskData);
                toastService.success('New task created!');
            }
            navigate('/');
        } catch (error) {
            toastService.error('Something went wrong!');
            console.log(error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Converts date to YYYY-MM-DD format
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />

            <section className="py-md-5">
                <div className="container py-md-10">
                    <form onSubmit={handleSubmit}>
                        <div className="row gy-3 overflow-hidden">
                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        id="title"
                                        value={title}
                                        placeholder="Title"
                                        required
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <label htmlFor="title" className="form-label">Title</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        rows="3"
                                    ></textarea>
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="dueDate"
                                        id="dueDate"
                                        value={dueDate}
                                        placeholder="Due Date"
                                        required
                                        onChange={(e) => setDueDate(e.target.value)}
                                    />
                                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    required
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-lg" type="submit">
                                        {id ? 'Update Task' : 'Save Task'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default TaskForm;
