import React from "react";

export const DayForecast = (props) => {
    return (
        <>
        <div className="day-forecast">
            <div className="day-forecast__header">{props.header}</div>
            <div className="day-forecast__body">
                <div className={`day-forecast__image ${props.image}`}></div>
                <div className="day-forecast__temps">
                    <span className="temp-day">{props.tempDay}°</span>
                    <span className="temp-night">{props.tempNight}°</span>
                </div>
            </div>
        </div>
        </>
    )
}