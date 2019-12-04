import React, { Component }  from 'react'

class TaskDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            details: "",
            dueDate: "",
            createdBy: "",
            modifiedBy: ""
        }
    }
    handleClick(){

    }
    
    render() {
        let str = ""
        if(this.props.task == null)
            str = "Click a task to view details..."
        else
            str = "Task Details"
        return (
            <div>
                {str}
            </div>
        )
    }
}
export default TaskDetails