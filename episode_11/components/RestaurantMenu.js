import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null)
    
    if(resInfo === null) return <ShimmerMenu />

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[0]?.card?.card?.info.name}</h1>
            <p className="font-bold text-lg">
                {resInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")} - {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage} 
            </p>
            {
                categories.map((category, index) => (<RestaurantCategory 
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={()=> setShowIndex(index)}
                    />))
            }
           
        </div>
    )
}

export default RestaurantMenu;