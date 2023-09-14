import "./styles.css";
import axios from "axios";
import MyRecipeCard from "../Components/myRecipe-card";
import { useEffect, useState } from "react";
import LoaderComponent from "../Components/Loader-component";
import { prodUrl } from "../constant";
import InfiniteScroll from "react-infinite-scroll-component";

const ViewSmoothie = () => {
  const [smoothies, setSmoothies] = useState<any>([]);

  const [hasMore, setHasMore] = useState(true);
  const [range, setRange] = useState(0);
  const dataSize = 2;
  const [loader, setLoader] = useState(false);
  const getSmoothies = async () => {
    setLoader(true);
    const userData = JSON.parse(localStorage.getItem("userData")!);

    const headers = {
      "content-type": "application/json",
      authorization: `Bearer ${userData.token}`,
    };

    const smoothiesData = await axios.get(
      `${prodUrl}/smoothies?from=${range}&size=${dataSize}`,
      {
        headers,
      }
    );
    if (smoothiesData.data.length > 0) {
      setLoader(false);
      setHasMore(true);
      setSmoothies((preVal: any) => {
        return [...preVal, ...smoothiesData.data];
      });
    } else {
      setLoader(false);
      setHasMore(false);
    }

  };
  useEffect(() => {
    getSmoothies();
  }, []);

  const fetchData = () => {
    setRange(range + 2);
    // setHasMore()
    getSmoothies();
  };
  return (
    <>
      <div className="main-view">
        <InfiniteScroll
          dataLength={smoothies.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<LoaderComponent />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              {smoothies.length > 0 ? <b>Yay! You have seen it all</b> : " "}
            </p>
          }
        >
          {smoothies.length > 0 ? (
            <MyRecipeCard recipeData={smoothies} />
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
      </div>
    </>
  );
};

export default ViewSmoothie;

// {/* <div className="main-block">
// {/* <h1>Smoothies</h1> */}
// {smoothies.map((data: any) => {
//   return (
//     <div className="card">
//       <img src={data.smoothieImg} alt="mango" />
//       <h3>{data.name}</h3>
//       <Link state={data} className="btn" to="/viewrecipe">
//         View Recipe
//       </Link>
//     </div>
//   );
// })}
// </div> */}
