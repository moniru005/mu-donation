import { useEffect, useState } from "react";
import PiChart from "./PiChart";
import PropTypes from 'prop-types';

const DonationChart = ({ donations }) => {

    const [totalDonations, setTotalDonations] = useState([]);
    const [donated, setDonated] = useState([]);

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donation'));
        setDonated(donateItems.length);
        setTotalDonations(donations.length);

    }, [donations])
    // console.log(donated)
    // console.log(totalDonations)

    return (
        <div className="w-screen">
            
            <PiChart 
            totalDonations={totalDonations}
            donated={donated}
            ></PiChart>
            
        </div>
    );
};

DonationChart.propTypes = {
    donations: PropTypes.array
    
  }
export default DonationChart;
