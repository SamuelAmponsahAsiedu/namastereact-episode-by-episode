import RestaurantCard from '../components/RestaurantCard';
import { useState, useEffect } from 'react';
import ShimmerCard from './Shimmer';

const Body = () => {
    //to display we use filteredRestaurant and whenever we want to filter we use listOfRestaurants
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        
        setListOfRestaurants(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
    }



    return listOfRestaurants.length === 0 ? ( 
        <ShimmerCard />
    ) : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                    <button onClick={()=>{

                    const filteredRestaurant = listOfRestaurants.filter((el) =>
                        el.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        Search
                    </button>
                </div>
                <button onClick={() =>{
                    const filteredList = listOfRestaurants.filter((el) => el.info.avgRating > 4)
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard Key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;




