import React from "react";

const CurrentWeather = ({ locationIs, regionIs }) => {
  return (
    <div className="currentWeather">
      <div>
        <h2>current weather</h2>
      </div>
      <p>
        {locationIs},<span>{regionIs}</span>
      </p>
    </div>
  );
};

export default CurrentWeather;
