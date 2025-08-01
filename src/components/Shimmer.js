import { ShimmerSimpleGallery, ShimmerFeaturedGallery } from "react-shimmer-effects";

const Shimmer = () => {
    return (
      <div className="restaurant-list">
        {/* <div className="shimmer-card"></div> */}
        {Array(10).fill("").map((e,index)=>(<div className="shimmer-card" key={index} ></div>))}
      </div>
    );
}

export default Shimmer;