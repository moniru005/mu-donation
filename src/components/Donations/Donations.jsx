
import { useState } from "react";
import Banner from "../Header/Banner/Banner";
import DonationsCard from "./DonationsCard";
import PropTypes from 'prop-types';


const Donations = ({ donations }) => {

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);


  const handleSubmit = e =>{
    e.preventDefault();
    // console.log(e.target.name.value)
    const searchText = e.target.name.value
    setSearchText(searchText);

    const filteredResult = donations?.filter(item => item.category.toLowerCase().includes(searchText.toLowerCase()));

    setSearchResult(filteredResult);

 }



  return (
    <>
      <Banner handleSubmit={handleSubmit} searchText={searchText}></Banner>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-[150px] md:mt-[400px] lg:mt-[400px] place-items-center md:px-32 lg:px-32">
        {
        searchText?
          searchResult.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>) :
          donations.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
        }
      </div>
    </>
  );
};

Donations.propTypes = {
  donations: PropTypes.array
}

export default Donations;