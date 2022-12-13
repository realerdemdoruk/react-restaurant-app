import React from 'react';

const Nav = ({ setRestaurants, restaurants }) => {
  const fetchRestaurant = async () => {
    const res = await fetch(
      'https://random-data-api.com/api/restaurant/random_restaurant'
    );
    const data = await res.json();
    setRestaurants([...restaurants, data]);
  };

  return (
    <div className="navbar">
      <button onClick={fetchRestaurant}>Add New Restorant</button>
    </div>
  );
};

export default Nav;
