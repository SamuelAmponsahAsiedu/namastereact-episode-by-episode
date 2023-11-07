import RestaurantCard from '../components/RestaurantCard';
import { useState, useEffect } from 'react';
import ShimmerCard from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RES_LIST } from '../utils/constants';

const Body = () => {
    //to display we use filteredRestaurant and whenever we want to filter we use listOfRestaurants
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch( RES_LIST );

        const json = await data.json();
        console.log(json);
        
        setListOfRestaurants(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return(
        <h1>Looks like you're offline, check your internet connection!</h1>
    )

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
                <Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}> <RestaurantCard resData={restaurant} /> </Link>  
                ))}
            </div>
        </div>
    )
}

export default Body;




