import { useState } from "react";
import "./styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoaderComponentForImg from "../Components/LoaderComponentForImg";
import sample from "../assets/sample.jpg";
import { prodUrl } from "../constant";

interface userSmoothiedata {
  name: string;
  ingredients: string;
}
const CreateRecipe = () => {
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const [errorDesc, setErrorDesc] = useState("");
  const propsData = location.state;

  const [smoothieImg, setSmoothieImg] = useState<any>(
    propsData ? propsData.smoothieImg : ""
  );
  const [smoothieData, setSmoothieData] = useState<userSmoothiedata>(
    propsData
      ? {
          name: propsData.name,
          ingredients: propsData.ingredients,
        }
      : {
          name: "",
          ingredients: "",
        }
  );
  const [desc, setDesc] = useState(propsData ? propsData.description : "");

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
      "content-type": "application/json",
      authorization: `Bearer ${userData.token}`,
    };

    const data = {
      smoothieImg: smoothieImg,
      name: smoothieData.name,
      ingredients: smoothieData.ingredients,
      description: desc,
      author: {
        name: userData.name,
        userId: userData.user,
      },
    };
    
    if (propsData) {
      try {
      //  const res = 
       await axios.patch(`${prodUrl}/smoothie/${propsData._id}`, data, {
          headers,
        });

        navigate("/myRecipes");
      } catch (error) {
        console.log("Edit Error ", error);
      }
    } else {
      if (desc) {
        try {
          // res = 
          await axios.post(`${prodUrl}/smoothie`, data, {
            headers,
          });
          navigate("/myRecipes");
        } catch (error) {
          console.log("Create recipe Error  ", error);
        }
      } else {
        setErrorDesc("Please add Recipe Steps");
      }
    }

  };

  const uploadImg = async (e: any) => {
    let res;
    const formData = new FormData();
    setLoader(true);
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "smoothieImg");
    formData.append("cloud_name", "ddhlxd7eq");

    try {
      res = await axios.post(
        "https://api.cloudinary.com/v1_1/ddhlxd7eq/image/upload",
        formData
      );

      setSmoothieImg(res.data.secure_url);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form className="recipe-form" onSubmit={onSubmitFormData}>
          {propsData ? <h1>Edit Recipe</h1> : <h1>Create new Recipe</h1>}
          <div>
            <label htmlFor="upload-button">
              {loader ? (
                <>
                  <LoaderComponentForImg />{" "}
                </>
              ) : smoothieImg ? (
                <>
                  <img
                    src={smoothieImg}
                    alt="dummy"
                    className="upload-preview"
                  />
                  {propsData ? (
                    <h5 className="text-center">Edit Smoothie photo</h5>
                  ) : (
                    <h5 className="text-center">Upload Smoothie photo</h5>
                  )}
                </>
              ) : (
                <>
                  <span className="fa-stack fa-2x mt-3 mb-2">
                    <img
                      src={sample}
                      className="upload-preview"
                      alt="default-image"
                    />
                  </span>
                  <h5 className="text-center">Upload Smoothie photo</h5>
                </>
              )}
            </label>
            <input
              type="file"
              onChange={uploadImg}
              name="img"
              id="upload-button"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          <input
            type="text"
            name="name"
            value={smoothieData.name}
            placeholder="recipe name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            multiple
            value={smoothieData.ingredients}
            name="ingredients"
            placeholder="ingredients"
            onChange={handleChange}
            required
          />

          {/* <input type="text" name="steps"  placeholder="Enter the steps" /> */}
          <ReactQuill
            className="toolbar-editor bgk"
            theme="snow"
            value={desc}
            onChange={handleDescChange}
          />
          {errorDesc ? <h4 className="alert-error">{errorDesc}</h4> : ""}
          <button type="submit">
            {propsData ? "Edit Recipe" : "Create Recipe"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateRecipe;
