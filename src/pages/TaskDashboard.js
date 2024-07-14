import React, { useContext, useEffect } from 'react'
import TaskList from '../component/Task/TaskList'
import { TaskContext } from '../context/TaskContext';

const TaskDashboard = () => {
    const {tasks, fetchTasks, addTask, editTask, removeTask} = useContext(TaskContext);

    useEffect(()=>{
        fetchTasks();
    }, [])
    return (
      <TaskList tasks={tasks} onEdit={editTask} onDelete={removeTask}/>
    )
}

export default TaskDashboard