import React, { useState } from "react";
import "./styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

interface userSmoothiedata {
  name: string;
  ingredient: string;
}
const CreateRecipe = () => {
  const [smoothieImg, setSmoothieImg] = useState<any>();
  const [smoothieData, setSmoothieData] = useState<userSmoothiedata>({
    name: "",
    ingredient: "",
  });
  const [desc, setDesc] = useState("");

  const handleDescChange = (data: string) => {
    setDesc(data);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSmoothieData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmitFormData = async (e: any) => {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    e.preventDefault();

    const headers = {
      'content-type': 'application/json',
      authorization:`Bearer ${userData.token}`
    }

    const data = {
      smoothieImg: smoothieImg,
      name: smoothieData.name,
      ingredients: smoothieData.ingredient,
      description: desc,
      author: {
        name: userData.name,
        userId: userData.user,
      },
    };
    const res = await axios.post("http://localhost:3000/smoothie", data,{headers});

    console.log("this is form data", res);
  };

  const uploadImg = (e: any) => {
    let reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log("this is reader res", reader.result);
      setSmoothieImg(reader.result);
    };
    reader.onerror = (err) => {
      // TO DO  - need to handle error
      console.log("this is error", err);
    };
  };

  return (
    <>
      <div>
        <form className="recipe-form" onSubmit={onSubmitFormData}>
          <h1>Create new Recipe</h1>

          <input type="file" onChange={uploadImg} name="img" accept="image/*" />
          <input
            type="text"
            name="name"
            value={smoothieData.name}
            placeholder="recipe name"
            onChange={handleChange}
          />

          <input
            type="text"
            multiple
            value={smoothieData.ingredient}
            name="ingredient"
            placeholder="ingredient"
            onChange={handleChange}
          />

          {/* <input type="text" name="steps"  placeholder="Enter the steps" /> */}
          <ReactQuill
            className="toolbar-editor bgk"
            theme="snow"
            value={desc}
            onChange={handleDescChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateRecipe;
