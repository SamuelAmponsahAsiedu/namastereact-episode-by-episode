import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item))
    }

    return(
        <div>
           
                {items.map((item)=> (
                <div key={item.card.info.id}
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
                    <div className="w-10/12">
                    <div className="py-2">
                        <span className="font-semibold">{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price ? 
                            item.card.info.price / 100 :
                            item.card.info.defaultPrice / 100}
                        </span>
                    </div>
                    <p className="text-sm">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 ">
                        <div className="absolute ">
                        <button className="p-2 rounded-lg mx-16 bg-green-400 text-white"
                            onClick={() => handleAddItem(item)}>
                            ADD +
                        </button>
                        </div>  
                        <img className="w-full p-1" src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
                ))}
         
        </div>
    )
}

export default ItemList;