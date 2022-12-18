import { useState, ChangeEvent } from "react";
import { evaluate, compile } from 'mathjs'

const AddTask = ({ onAdd }) => {
  const [title, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [calculationResult, setResult] = useState("0");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFileName(file.name);
      setFileContent(reader.result);
    };
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("please add task");
      return;
    }
    if (!fileName && !fileContent) {
      return;
    }
    const calculateResult = compile(fileContent)
    const calculationResult = calculateResult.evaluate();
    console.log("result",calculationResult);
    setResult(calculationResult)
    const task = { title, fileName, fileContent, calculationResult };

    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        //   "content-type": "multipart/form-data"
      },
      body: JSON.stringify(task),
    });

    console.log(res);

    //  onAdd({ res })
     setText('');
 
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Calculation Title"
          value={title}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <input type="file" onChange={handleFileChange} />

        <div>{`${fileName}`}</div>
      </div>
      {/* <div className='form-control'>
           <label>Set Reminder</label>
           <input type='checkbox' />
        </div> */}

      <input type="submit" value="Calculate" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
