import { useEffect, useState } from "react";
import DonatedItems from "./DonatedItems";


const DonationPage = () => {
    const [donated, setDonated] = useState([]);
    const [noFound, setNoFound] = useState(false);

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donation'));

        if (donateItems) {
            setDonated(donateItems);
            console.log(donateItems);
        } else {
            setNoFound("No Favorite data found!!")
        }

    }, [])
    return (
        <div className="">

            {
               noFound? <p className="flex justify-center items-center h-screen"> {noFound} </p> 
               :
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center md:px-32 lg:px-32">
                    {
                        donated?.map(donate => <DonatedItems key={donate.id} donate={donate}></DonatedItems>)
                    }
               </div>
            }

        </div>
    );
};

export default DonationPage;