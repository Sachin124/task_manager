import React from 'react'
import { Link } from 'react-router-dom';

const TaskItem = (task, onEdit, onDelete) => {
    const sClas = 'badge rounded-pill  ms-3 text-bg-'

    const statusClasses = {
        'Pending': `${sClas}warning`,
        'Completed': `${sClas}success`,
        'In Progress': `${sClas}danger`,
        'default': `${sClas}default`
    };

    const t = task?.task;
    const statusClass = statusClasses[t.status] || statusClasses['default'];
    const currentDate = new Date(t?.dueDate)
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div class="accordion py-md-2" id="accordionPanelsStayOpenExample">
            <div class="accordion-item ">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle={"collapse"}
                        data-bs-target={'#panelsStayOpen-collapse' + t?.id} aria-expanded="true" aria-controls={'panelsStayOpen-collapse' + t?.id}>
                        {t?.title}
                        <span className={statusClass}>{t.status}</span>
                    </button>
                </h2>


                <div id={'panelsStayOpen-collapse' + t?.id} class="accordion-collapse collapse ">
                    <div class="accordion-body">
                        <h5 className='text-end'><strong> Due Date:</strong> {formattedDate}</h5>
                        <div className='text-end'>

                        <button type='btn' class="btn btn-sm rounded-pill text-bg-light text-light"><Link to={`/edit-task/${t.id}`}>Edit</Link></button>
                            <button type='btn' class="btn btn-sm rounded-pill text-bg-danger  ms-1" onClick={() => task.onDelete(t.id)}>Delete</button> 
                             </div>
                    <p className='lh-sm text-body-secondary text-justify p-5'> {t?.description} </p>
                </div>
            </div>
        </div>

        </div >
    )
}

export default TaskItem