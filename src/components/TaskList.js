import { Component } from "react";

export default class TaskList extends Component {
  shouldComponentdidUpdate(nextProps, nextState) {
    if (this.props.iconLevel !== nextProps) {
      return true;
    } else return false;
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="task-list ">
        <div className="container-task-list">
          <div className="title">
            <h1> Task List</h1>
          </div>
          <div className="list-deadline">
            {this.props.deadlineNames.map((deadlineName) => (
              <div className="list" key={deadlineName.idTask}>
                <button id="btn-icon" className={this.props.iconLevel} />
                <h2>{deadlineName.nameTask}</h2>
                <button
                  onClick={this.props.handleDelete}
                  className="btn-delete"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
