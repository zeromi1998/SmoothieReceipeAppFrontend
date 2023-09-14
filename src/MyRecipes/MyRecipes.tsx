import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MyRecipeCard from "../Components/myRecipe-card";
import LoaderComponent from "../Components/Loader-component";
import { prodUrl } from "../constant";
import InfiniteScroll from "react-infinite-scroll-component";
const MyRecipes = () => {
  const [myRecipe, setMyRecipe] = useState<any>([]);
  const [_loader, setLoader] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [range, setRange] = useState(0);
  const dataSize = 2;
  useEffect(() => {
    getMyRecipes();
  }, []);

  const getMyRecipes = async () => {
    setLoader(true);
    const userData = JSON.parse(localStorage.getItem("userData")!);

    const headers = {
      "content-type": "application/json",
      authorization: `Bearer ${userData.token}`,
    };

    const res = await axios.get(
      `${prodUrl}/smoothie?from=${range}&size=${dataSize}`,
      {
        headers,
      }
    );
    if (res.data.length > 0) {
      setLoader(false);
      setHasMore(true);
      setMyRecipe((preVal: any) => {
        return [...preVal, ...res.data];
      });
    } else {
      setHasMore(false);
    }
  };

  const fetchData = () => {
    setRange(range + 2);
    // setHasMore()
    getMyRecipes();
  };

  return (
    <>
      <div className="createRecipe">
        <Link to="/createRecipe">Create New Recipe</Link>
      </div>

      <>
        <InfiniteScroll
          dataLength={myRecipe.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<LoaderComponent />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              {myRecipe.length > 0 ?  <b>Yay! You have seen it all</b> : " "}
             
            </p>
          }
        >
          {myRecipe.length > 0 ? (
            <MyRecipeCard
              recipeData={myRecipe}
              getSmoothie={getMyRecipes}
              flag={true}
            />
          ) : (
            <div>
              {hasMore ? (
                ""
              ) : (
                <h3>No Recipe Found !. Please Create New Recipe </h3>
              )}
            </div>
          )}
        </InfiniteScroll>

        {/* {myRecipe.length > 0 ? (
            <MyRecipeCard
              recipeData={myRecipe}
              getSmoothie={getMyRecipes}
              flag={true}
            />
          ) : (
            <div>
              <h3>No Recipe Found !. Please Create New Recipe </h3>
            </div>
          )} */}
      </>

      {/* <div className="myRecipes">
        {myRecipe.map((data:any) => {
          return (
            <div>
              <div className="recipe-card">
                <img src={data.smoothieImg} alt="mango" />

                <div className="flex-card">
                  <h3>{data.name}</h3>
                  <Link to="/viewrecipe">See Full Recipe</Link>
                </div>
              </div>
              <button className="edit">
                <FaEdit className="edit-icon" />
              </button>
              <button className="delete">
                <AiFillDelete className="delete-icon" />
              </button>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default MyRecipes;
