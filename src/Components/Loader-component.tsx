import { Dna } from "react-loader-spinner";
import "./styles.css"
const LoaderComponent = () => {
  return (
    <div className="Loader-class">
      <Dna
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default LoaderComponent;
