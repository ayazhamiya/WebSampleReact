import React from 'react'
import TaskDetails from './TaskDetails'

class TaskCard extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(task) {
        // console.log("task div "+ task.title+" clicked")
        this.props.fetchData(task)
    }

    render() {
        const inLineStyle={}
        const today = new Date();
        const due = new Date(this.props.task.dueDate)
        if(today <= due)
            inLineStyle.backgroundColor = "#32c105"
        else
            inLineStyle.backgroundColor = "#e3051b"
        return(
            <div className="task-card" style={inLineStyle} onClick={this.handleClick.bind(this, this.props.task)}>
                <h1>{this.props.task.title}</h1>
                <p>{this.props.task.detail}</p>
                <h3>Due Date: {this.props.task.dueDate}</h3>
            </div>
        )
    }
}
export default TaskCard