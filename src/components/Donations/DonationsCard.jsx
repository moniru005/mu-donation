import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const DonationsCard = ({ donation }) => {
    const {id, title, category, image, category_bg, card_bg, text_color } = donation || {};

    
    return (    
        <>
        <Link to={`/donations/${id}`}>
        <div className={`relative flex max-w-[24rem] flex-col rounded-xl bg-clip-border text-gray-700 shadow-md bgColor`} style={{backgroundColor:card_bg}}>
            <div className="relative m-0 overflow-hidden rounded-none  bg-clip-border text-gray-700 shadow-none">
                <img
                    className="rounded-t-lg"
                    src={image}
                    alt="ui/ux review check"
                />
            </div>
            <div className="p-4">
                <div className="w-fit rounded bg-black py-1.5 px-3 text-sm font-normal text-white focus:outline-none" style={{backgroundColor:category_bg, color:text_color}}>
                    {category}
                </div>

                <h4 className={`text-base font-semibold mt-1`} style={{color:text_color}}>
                    {title}
                </h4>
            </div>
        </div>
        </Link>
        </>
    );
};
DonationsCard.propTypes = {
    donation: PropTypes.object
  }
export default DonationsCard;