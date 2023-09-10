import React, { useEffect, useState } from "react";
import MoreCondition from "./MoreCondition";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
const url = `https://api.weatherapi.com/v1/current.json`;
const apiKey = `cb4fa102256c4b219d0145334230609&q`;
const target = "mumbai";
const Emojiss = ({ imgIs }) => <img src={imgIs} alt="e" />;
const Temp = ({ tempIs }) => (
  <div className="temp">
    <p>
      {tempIs}
      <span>°C</span>
    </p>
  </div>
);

const Condition = ({ conditionIs, feelsLikeIs }) => (
  <div className="condition">
    <p>{conditionIs}</p>
    <span>feels like {feelsLikeIs}</span>
  </div>
);

const WeatherCondition = ({ targetIs }) => {
  const [loca, setLoca] = useState("");
  const [region, setRegion] = useState("");
  const [tempInDegree, setTempInDegree] = useState("");
  const [condition, setCondition] = useState("");
  const [emoji, setEmoji] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [uv, setUv] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${url}?key=${apiKey}=${
          targetIs !== undefined ? targetIs : target
        }&aqi=yes`
      );

      const newEmoji = `https:${data.current.condition.icon}`;

      setRegion(data.location.region);
      setLoca(data.location.name);
      setEmoji(newEmoji);
      setFeelsLike(data.current.feelslike_c);
      setTempInDegree(data.current.temp_c);
      setCondition(data.current.condition.text);
      setWindSpeed(data.current.wind_kph);
      setHumidity(data.current.humidity);
      setPressure(data.current.pressure_mb);
      setUv(data.current.uv);
    };
    fetchData().then(console.log("all right")).catch(console.log("not"));
  }, [targetIs]);

  return (
    <>
      <CurrentWeather locationIs={loca} regionIs={region} />
      <div className="mainContainer">
        <Emojiss imgIs={emoji} />
        <Temp tempIs={tempInDegree} />
        <Condition conditionIs={condition} feelsLikeIs={feelsLike} />
      </div>
      <div className="bottomContainer">
        <MoreCondition windIs={windSpeed} />
        <MoreCondition humidityIs={humidity} />
        <MoreCondition pressureIs={pressure} />
        <MoreCondition uvIs={uv} />
      </div>
    </>
  );
};

export default WeatherCondition;
