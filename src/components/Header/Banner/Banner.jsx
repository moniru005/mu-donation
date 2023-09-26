import bannerImage from '../../../../public/images/volunteers.jpg'
import PropTypes from 'prop-types';

const Banner = ({handleSubmit, searchText}) => {

    return (
        <div className={`h-[70vh]  bg-white absolute top-0 lg:w-full z-0 `}>
            <img
                className='opacity-10 relative'
                src={bannerImage} alt="" />
            
            <div className='absolute p-4 md:top-52 lg:top-52 flex flex-col justify-center items-center w-screen'>
            <h1 className=' text-xl font-bold lg:text-3xl lg:font-bold mb-6'>I Grow By Helping People In Need</h1>

            {/* <div className="join">
                <div>
                    <div>
                        <input className="input input-bordered join-item focus:outline-none md:w-64 lg:w-64" id='search-field' name='name' type='text' placeholder="Search here..." />
                    </div>
                </div>
                <div className="indicator">
                    <button onClick={handleSubmit} className="btn join-item bg-[#FF444A] text-white">Search</button>
                </div>
            </div>   */}

            <form onSubmit ={handleSubmit} className='join'>
                <input className="input input-bordered join-item focus:outline-none md:w-64 lg:w-64" type="search" name="name" id="" onChange={handleSubmit} value={searchText} />
                <input className="btn join-item bg-[#FF444A] text-white" type="submit" value="Search" />
            </form>

            </div>
            
        </div>
    );
};

Banner.propTypes = {
    handleSubmit: PropTypes.func,
    searchText: PropTypes.string
  }

export default Banner;