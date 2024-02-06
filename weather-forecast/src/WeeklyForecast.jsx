import React from "react";
import { DayForecast } from "./DayForecast.jsx";

export const WeeklyForecast = () =>{
    return (
        <>
        <div className="week-forecast">
            <DayForecast
                header="Mon"
                image="weather-cloudy"
                tempDay={18}
                tempNight={11}
            />
            <DayForecast
                header="Tue"
                image="weather-partly-cloudy"
                tempDay={21}
                tempNight={15}
            />
            <DayForecast
                header="Wed"
                image="weather-rainy"
                tempDay={8}
                tempNight={1}
            />
            <DayForecast
                header="Thu"
                image="weather-rainy"
                tempDay={8}
                tempNight={1}
            />
            <DayForecast
                header="Thu"
                image="weather-snowy"
                tempDay={-2}
                tempNight={-7}
            />
            <DayForecast
                header="Fri"
                image="weather-stormy-rain"
                tempDay={28}
                tempNight={21}
            />
            <DayForecast
                header="Sat"
                image="weather-stormy"
                tempDay={35}
                tempNight={27}
            />
            <DayForecast
                header="Sun"
                image="weather-sunny"
                tempDay={28}
                tempNight={22}
            />
        </div>
        </>
    )
}