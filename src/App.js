import { Component } from "react";
import TaskList from "./components/TaskList";
import DatePicker from "./components/DatePicker";

import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id:0,
      levels: [
        {
          id: 0,
          level: "Low",
        },
        {
          id: 1,
          level: "Medium",
        },
        {
          id: 2,
          level: "High",
        },
      ],
      checked: "",
      arrDeadlineName: [
        {
          idTask: 0,
          nameTask: '',
        },
      ],
      getColorLevel: "",
    };
  }

  handleDelete=()=>{
    this.setState(
      {
        arrDeadlineName: this.state.arrDeadlineName=this.state.arrDeadlineName.filter(e=>e!==e[0])
      })
  }

  handleCheck = (check, colorLevel) => {
    this.setState({
      checked: (this.state.checked = check),
      getColorLevel: (this.state.getColorLevel = colorLevel),
    });
  };
  handleGetName = (e) => {
    this.setState({
      name: (this.state.name = e.target.value),
    });
  };

  renderOnTaskList = () => {
    this.refs.someName.value = "";
    this.setState({
      id:this.state.id = this.state.id +1,
      arrDeadlineName: (this.state.arrDeadlineName = [
        ...this.state.arrDeadlineName,
        {
          idTask: this.state.id  ,
          nameTask: this.state.name === ''? null :  this.state.name ,
        },
      ]),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="new-task ">
            <div className="container">
              <div className="title">
                <h1>New Task</h1>
              </div>
              <div className="form-input">
                <div>
                  <h3>Name</h3>
                </div>
                <input
                  className="inputName"
                  ref="someName"
                  onChange={this.handleGetName}
                  type="text"
                  placeholder="Name task..."
                />
              </div>
              <div className="deadline">
                <div>
                  <h3>Deadline</h3>
                </div>
              </div>
              <div className="deadline-picker">
                <DatePicker />
              </div>
              <div>
                <h3>Priority</h3>
              </div>
              <div className="radio">
                {this.state.levels.map((level) => (
                  <div className="radio-container" key={level.id}>
                    <input
                      checked={level.id === this.state.checked}
                      onChange={() => this.handleCheck(level.id, level.level)}
                      id={level.id}
                      type="radio"
                    />
                    <label className={level.level} htmlFor={level.id}>{level.level}</label>
        
                  </div>
                ))}
              </div>
              <div className="btn-add">
                <button className="btn-AddName" onClick={this.renderOnTaskList}>
                  Add Task
                </button>
              </div>
            </div>
          </div>
          <div className="container-list">
            <TaskList
             handleDelete={this.handleDelete}
              iconLevel={this.state.getColorLevel}
              deadlineNames={this.state.arrDeadlineName}
            />
          </div>
        </div>
      </div>
    );
  }
}
