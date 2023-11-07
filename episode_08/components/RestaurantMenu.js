import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState(null);

    const {resId} = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch( 
            MENU_API + resId
        );

        const json = await data.json();
        console.log(json);

        setResInfo(
            json.data
        )
    }

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