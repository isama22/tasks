import React, {Component} from 'react';
// import Task from '../../components/Task/Task';

class Tasks extends Component{
    render() {
        return (
            // <div>
    
            // {this.props.tasks.map(task =>
            //             <Task
            //               task={task} 
            //               key={task._id}
            //               handleGetAllTasks={this.props.handleGetAllTasks}
            //             />
            //           )}
            // </div>
            <div>
            {this.props.tasks.map((t) => (
              <div key={t.task}>
                  <p>{t.task}</p>
                
              </div>
            ))}</div>
        );
    }

}
export default Tasks;