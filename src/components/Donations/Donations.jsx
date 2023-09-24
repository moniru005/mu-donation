import DonationsCard from "./DonationsCard";
import PropTypes from 'prop-types';

const Donations = ({donations}) => {
    console.log(donations);
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-[150px] md:mt-[400px] lg:mt-[400px] place-items-center md:px-32 lg:px-32">
          {
            donations.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
          }
        </div>
    );
};

Donations.propTypes ={
    donations: PropTypes.array
}

export default Donations;