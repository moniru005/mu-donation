import bannerImage from '../../../../public/images/volunteers.jpg'
const Banner = () => {
    return (
        <div className={`h-[70vh]  bg-white absolute top-0 w-full z-0 `}>
            <img
                className='opacity-10 relative'
                src={bannerImage} alt="" />
            
            <div className='absolute top-52 flex flex-col justify-center items-center w-screen'>
            <h1 className='text-3xl font-bold mb-6'>I Grow By Helping People In Need</h1>
            <div className="join">
                <div>
                    <div>
                        <input className="input input-bordered join-item focus:outline-none w-64" placeholder="Search here..." />
                    </div>
                </div>
                <div className="indicator">
                    <button className="btn join-item bg-[#FF444A] text-white">Search</button>
                </div>
            </div>  
            </div>
            
        </div>
    );
};

export default Banner;