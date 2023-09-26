import { useEffect, useState } from "react";
import DonatedItems from "./DonatedItems";
import Swal from 'sweetalert2';


const DonationPage = () => {
    const [donated, setDonated] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donation'));

        if (donateItems) {
            setDonated(donateItems);
            // console.log(donateItems);
        } else {
            setNoFound("Currently no donations are here!!!")
        }

    }, [])

    const handleRemove = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                localStorage.clear();
                setDonated([]);
                setNoFound("Currently no donations are here!!!")
            }
        })



    }

    return (
        <div className="">
            
            {
                noFound ? <p className="flex justify-center items-center text-3xl font-sans"> {noFound} </p>
                    :
                    <div>
                        <h1 className="mb-10 text-center text-gray-700 text-xl font-semibold">Total {donated.length} Donation here </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center md:px-32 lg:px-32">
                            {
                                isShowAll ? 
                                donated?.map(donate => <DonatedItems key={donate.id} donate={donate}></DonatedItems>) 
                                :    
                                donated?.slice(0, 4).map(donate => <DonatedItems key={donate.id} donate={donate}></DonatedItems>)
                            }
                        </div>

                        <div className="flex gap-4 py-10 justify-center ">
                            <div>
                                {
                                    donated.length > 4 &&  <button
                                        onClick={() => setIsShowAll(!isShowAll)}
                                        className={`py-2 px-3 rounded-lg flex items-center justify-center mx-auto ${isShowAll? 'bg-white' : 'bg-[#009444]'} ${isShowAll? 'bg-white' : 'hover:bg-[#4aad6bfd]'} text-white hover:text-white`}>
                                        {isShowAll ? '' : 'Show All'}
                                        
                                    </button>
                                }
                            </div>
                            <div>
                                {
                                    donated.length > 0 && <button
                                        onClick={handleRemove}
                                        className="bg-gray-200 py-2 px-3 rounded-lg flex items-center justify-center mx-auto text-black hover:bg-[#FF444A] hover:text-white">
                                        Remove All
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default DonationPage;