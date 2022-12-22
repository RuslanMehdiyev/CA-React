import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
function Weather() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Baku");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=dec99d6ddad14745a1b101453222212&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [city]);

  return (
    <div className="wether">
      <div className="forecast">
        <input type="text" onChange={(e) => setCityName(e.target.value)} />
        <button onClick={() => setCity(cityName)}>Get Forecast</button>
      </div>
      <div className="display">
        {data.error ? (
          <h1>Data not Found</h1>
        ) : isLoading ? (
          <ClipLoader size={50} color="red" />
        ) : (
          <>
            <div
              className="region"
              style={{ textAlign: "end", paddingRight: "10px" }}
            >
              {data.location?.tz_id}
            </div>
            <div className="country">
              {data.location?.country}/{data.location?.name}
            </div>
            <div className="img">
              <img src={"https:" + data?.current?.condition?.icon} />
              <h4>{data.current?.condition?.text}</h4>
            </div>
            <div className="temp-c">
              Temp: {data.current?.temp_c} C<sup>o</sup> /{" "}
              {data.current?.temp_f} F
            </div>
            <div className="more-info">
              <div>Wind: {data.current?.wind_kph}KpH</div>
              <div>Wind dir. "{data.current?.wind_dir}"</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weather;
