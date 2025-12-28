import axios from "axios"

// https://api.open-meteo.com/v1/forecast?latitude=43.7064&longitude=-79.3986&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&current=temperature_2m,wind_speed_10m,weather_code&timezone=America%2FNew_York&timeformat=unixtime

export function getWeather(lat, lon, timezone) {
    return axios.get(
        "https://api.open-meteo.com/v1/forecast?daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&current=temperature_2m,wind_speed_10m,weather_code&timeformat=unixtime",
        {
            params: {
                latitude: lat,
                longitude: lon,
                timezone,
            }
        }
    ).then(
        res => {
            return {
                current: parseCurrentWeather(res.data),
                daily: parseDailyWeather(res.data),
                hourly: parseHourlyWeather(res.data)
            }
        }
    )
}

function parseCurrentWeather({current, daily}) {
    const {
        temperature_2m: currentTemp,
        wind_speed_10m: windSpeed,
        weather_code: iconCode
    } = current
    const {
        temperature_2m_max: [maxTemp],
        temperature_2m_min: [minTemp],
        apparent_temperature_max: [maxFL],
        apparent_temperature_min: [minFL],
        precipitation_sum: [precip]
    } = daily
    return {
        currentTemp: Math.round(currentTemp),
        highTemp: Math.round(maxTemp),
        lowTemp: Math.round(minTemp),
        highFL: Math.round(maxFL),
        lowFL: Math.round(minFL),
        windSpeed: Math.round(windSpeed),
        precip: Math.round(precip * 100) / 100,
        iconCode,
    }
}

function parseDailyWeather({daily}) {
    return daily.time.map(
        (time, index) => {
            return {
                timestamp: time * 1000, // In ms
                iconCode: daily.weather_code[index],
                maxTemp: Math.round(daily.temperature_2m_max[index]),
            }
        }
    )
}

function parseHourlyWeather({hourly, current}) {
    return hourly.time.map(
        (time, index) => {
            return {
                timestamp: time * 1000,
                iconCode: hourly.weather_code[index],
                temp: Math.round(hourly.temperature_2m[index]),
                FL: Math.round(hourly.apparent_temperature[index]),
                windSpeed: Math.round(hourly.wind_speed_10m[index]),
                precip: Math.round(hourly.precipitation[index] * 100) / 100,
            }
        }
    ).filter(({timestamp}) => timestamp >= current.time * 1000)
}