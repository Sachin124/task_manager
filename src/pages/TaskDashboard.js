import React, { useContext, useEffect } from 'react'
import TaskList from '../component/Task/TaskList'
import { TaskContext } from '../context/TaskContext';
import Header from '../component/Layout/Header';

const TaskDashboard = () => {
    const {tasks, fetchTasks,  editTask, removeTask} = useContext(TaskContext);

    useEffect(()=>{
        fetchTasks();
    }, [])
    return (
      <>
      <Header />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={removeTask}/>
      </>
    )
}

export default TaskDashboard