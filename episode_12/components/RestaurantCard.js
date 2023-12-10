import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) => {
    const {resData} = props;

    const{name, cuisines, avgRating, costForTwo, costForTwoMessage, cloudinaryImageId} = resData.info;
    const{deliveryTime} = resData.info.sla;
    return(
        <div className='m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300' >
            <img 
            className='rounded-lg h-[200px] w-[250px]'
            alt='res-logo' 
            src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoMessage || costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    )
}

export const withOpenLabel = (RestaurantCard) =>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-green-400 text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;






