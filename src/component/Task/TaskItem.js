import React from 'react'

const TaskItem = (task, onEdit, onDelete) => {
   
    const t = task?.task;
    return (
        <div  class="accordion py-md-2" id="accordionPanelsStayOpenExample">
                <div class="accordion-item ">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle={"collapse"}
                         data-bs-target={'#panelsStayOpen-collapse'+t?.id} aria-expanded="true" aria-controls={'panelsStayOpen-collapse'+t?.id}>
                            {t?.title}
                        </button>
                    </h2>
                    <div id={'panelsStayOpen-collapse'+t?.id} class="accordion-collapse collapse ">
                        <div class="accordion-body">
                            <strong>{t?.title}</strong> 
                           {t?.description}
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default TaskItem