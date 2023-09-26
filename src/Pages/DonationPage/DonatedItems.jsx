import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonatedItems = ({ donate }) => {
    const { id, title, category, image, category_bg, card_bg, button_bg, text_color, price } = donate || {};

    return (

        <div className={` flex flex-row rounded-xl w-[380px] md:w-[500px] lg:w-[500px] h-[125px] md:h-[155px] lg:h-[155px]`} style={{ backgroundColor: card_bg }}>

            <img
                className="rounded-l-lg w-44 md:w-56 lg:w-56"
                src={image}
                alt="ui/ux review check"
            />

            <div className="px-4 py-2 lg:p-4 relative">
                <div className="w-fit rounded py-1.5 px-3 text-xs lg:text-sm font-normal text-white focus:outline-none" style={{ backgroundColor: category_bg, color: text_color }}>
                    {category}
                </div>

                <h4 className={`text-sm md:text-base lg:text-base font-semibold mt-1`} style={{ color: text_color }}>
                    {title}
                </h4>

                <p className="mt-1 text-sm lg:text-base font-sans font-bold" style={{ color: text_color }}>${price}</p>

                <Link to={`/donations/${id}`}>
                    <button
                        className="absolute bottom-1.5 left-4 md:bottom-3 md:left-4 lg:bottom-3 lg:left-4 z-20 px-2 py-1 md:px-2 md:py-1 lg:px-2 lg:py-1 rounded text-sm md:text-xl lg:text-base text-white font-semibold font-sans" style={{ backgroundColor: button_bg }}>View details</button>
                </Link>
            </div>
        </div>
    );
};

DonatedItems.propTypes = {
    donate: PropTypes.object
}
export default DonatedItems;