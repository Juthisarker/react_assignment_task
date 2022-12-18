
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.calculationResult}</h3> <button className="btn-loop" ></button>
      <p>{task.title}</p>
    </div>
  )
}

export default Task
