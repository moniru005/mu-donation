import { useLoaderData } from "react-router-dom";
import DonationChart from "../../components/PieComponent/DonationChart";

const StatisticsPage = () => {
    const donations = useLoaderData();
    return (
        <div>
                <DonationChart donations={donations}></DonationChart>

        </div>
    );
};

export default StatisticsPage;