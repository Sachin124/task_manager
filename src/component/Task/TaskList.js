import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, onEdit, onDelete}) => {
    let taskLists =   tasks.map(task=>{
       return( <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete}/>)
})
    return (
        <section className="bg-dark  py-md-5  ">
            <div className='container'>

            {
                      taskLists
                    }
                {/* <div class="accordion" id="accordionPanelsStayOpenExample">
                   
                    
                </div> */}
            </div>
        </section>
    )
}

export default TaskList