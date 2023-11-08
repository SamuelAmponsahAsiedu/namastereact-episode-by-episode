import { useState } from "react";

const User = ({name, location, username}) => {
    const[count1, setCount1] = useState(0);
    const[count2] = useState(1);

    return(
        <div>
            <h1>Count: {count1}</h1>
            <h1>Count: {count2}</h1>
            <button onClick={()=>{
                setCount1(count1 +1)
            }}>
                Increase Count
            </button>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <h2>{username}</h2>
        </div>
    )
}

export default User;