
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.calculationResult}={task.title}</h3> <button className="btn-loop" >Input</button>
      <p> </p>
    </div>
  )
}

export default Task
