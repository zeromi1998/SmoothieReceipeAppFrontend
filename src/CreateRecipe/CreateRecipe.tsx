import React, { useState } from "react";
import "./styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CreateRecipe = () => {
  const [mul, setMul] = useState();



  const handleChange = (e:any)=>{
// const {name,value} :any =   e.target
console.log("this is qil check",e)
// setMul((preVal)=>{
//   return 
// })

  }
  return (
    <>
      <div>
        <form className="recipe-form" onSubmit={() => {}}>
          <h1>Create new Recipe</h1>

          <input type="file" name="img" />
          <input type="text" name="name" placeholder="recipe name" />

          <input
            type="text"
            multiple
            name="ingredient"
            placeholder="ingredient"
          />

          {/* <input type="text" name="steps"  placeholder="Enter the steps" /> */}
          <ReactQuill
            className="toolbar-editor bgk"
            theme="snow"
            value={mul}
            onChange={handleChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateRecipe;
