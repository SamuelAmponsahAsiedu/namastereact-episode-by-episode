import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) return <ShimmerCard />

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    
    return(
        <div>
            <h1 >{resInfo?.cards[0]?.card?.card?.info.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")} - {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage} </p>
            <h1>Menu</h1>
            <ul>
                {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} -{item.card.info.price/100}
                </li>)
                )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;