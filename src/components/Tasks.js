import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from "./Task";

class Tasks extends Component {
  render(){

    const tasks = this.props.tasks.map((task, index) => <Task key={index} task={task} />)
    return (
      <div>
        <ul>
          {tasks}
        </ul>
      </div>
    );
  }
}

/*mapStateToProps turns state attributes into props
for this component only
*/
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(Tasks);
// export const AllTasks = connect(mapStateToProps)(Tasks);

/*mapStateToProps turns state into a prop then Tasks is the class that
receieves it */
