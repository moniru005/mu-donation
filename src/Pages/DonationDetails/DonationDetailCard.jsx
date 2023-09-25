import Swal from 'sweetalert2';

const DonationDetailCard = ({ donation }) => {

    const { id, title, image, button_bg, description, price } = donation || {};

    const handleDonate = () =>{
        
    }


    return (
        <div className="flex max-w-[48rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 px-4">
            <div className="mx-auto w-fit relative">
                <img
                    className="w-[48rem] rounded-lg  z-0"
                    src={image}
                    alt="image"
                />
                <div className="bg-black h-16 md:h-32 lg:h-32 rounded-b-lg absolute bottom-0 z-10  w-full opacity-50">
            </div>
            <button 
            onClick={handleDonate}
            className="absolute bottom-3.5 left-5 md:bottom-10 md:left-10 lg:bottom-10 lg:left-10 z-20 px-2 py-1 md:px-4 md:py-3 lg:px-4 lg:py-3 rounded text-lg md:text-xl lg:text-xl text-white font-semibold font-sans" style={{backgroundColor:button_bg}}>Donate {price} </button>
            </div>
            

            <div className="mt-14">
                <h6 className="mb-4 block  text-2xl font-bold text-[#0B0B0B]">
                    {title}
                </h6>
                <p className="mb-8 block text-base text-[#0B0B0BB2] text-justify">
                    {description}
                </p>
                <a className="inline-block" href="#">

                </a>
            </div>
        </div>
    );
};

export default DonationDetailCard;