import RestaurantCard from '../components/RestaurantCard';
import { useState } from 'react';
import resList from '../utils/mockData';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return(
        <div className='body'>
            <div className='filter'>
                <button onClick={() =>{
                    const filteredList = listOfRestaurants.filter((el) => el.info.avgRating > 4)
                    setListOfRestaurants(filteredList)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard Key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;




