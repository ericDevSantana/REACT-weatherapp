import React from "react";
import WeatherIcon from "./WeatherIcon";
import App from "./server";

function Card(props) {

    const data = App(props.name);

    return (
        <div
            className="card bg-dark text-white mb-3 rounder"
            style={{
            width: "25rem"
        }}>
            <div className="card-header">
                <h1 style={{
                    float: "left"
                }}>{data.name}</h1><WeatherIcon name={data.weather} color="primary"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">Temperature</h5>
                <h1 className="card-text">{data.tempCelsius} °C</h1>
                <h6 className="card-text floatR">{data.tempFarenheit} °F</h6>
            </div>
        </div>
    )

}

export default Card;