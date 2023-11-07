import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) => {
    const {resData} = props;

    const{name, cuisines, avgRating, costForTwo, costForTwoMessage, cloudinaryImageId} = resData.info;
    const{deliveryTime} = resData.info.sla;
    return(
        <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
            <img 
            className='res-logo'
            alt='res-logo' 
            src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoMessage || costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    )
}

export default RestaurantCard;