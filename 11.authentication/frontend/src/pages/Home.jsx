import { useContext } from "react";
import { dataContext } from "../context/userContext.jsx";

function Home(){
    const { userData } = useContext(dataContext);

    return (
        <div>{userData?.firstName}</div>
    )
}

export default Home;
