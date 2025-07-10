import { IMG_CDN_URL } from "../constant";
const RestrauntCard=({name,cuisines,cloudinaryImageId,deliveryTime}) => {
        return(
            <div className="card">
                <img src={ IMG_CDN_URL + cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{deliveryTime + "minutes"}</h4>
            </div>
        );
    };

export default RestrauntCard;