import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailCard from "./DonationDetailCard";

const DonationDetails = () => {

    const [donation, setDonation] = useState()

    const {id} = useParams();
    const donations = useLoaderData();



    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id === id)
        setDonation(findDonation)
    }, [id, donations])

    

    return (
        <div className="flex justify-center">
            <DonationDetailCard donation={donation}></DonationDetailCard>
        </div>
    );
};

export default DonationDetails;