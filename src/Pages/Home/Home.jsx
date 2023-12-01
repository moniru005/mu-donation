import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";

const Home = () => {
    const donations = useLoaderData()

    return (
        <div>
            <Donations donations={donations} ></Donations>  
        </div>
    );
};

export default Home;