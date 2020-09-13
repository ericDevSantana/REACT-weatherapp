import React from "react";
import CloudIcon from '@material-ui/icons/Cloud';
import CloudOffIcon from '@material-ui/icons/CloudOff';

function WeatherIcon(props) {
    switch (props.name) {
        case "cloud":
            return <CloudIcon fontSize={props.fontSize} color={props.color}/>
        default:
            return <CloudOffIcon />
    }
}

export default WeatherIcon;