import classes from './index.module.scss';
const CurrentWeather = ({ data }) => {
    return (
        <div className={classes.weather}>
            <div className={classes.top}>
                <div className={classes.info}>
                    <p className={classes.city}>{data.city}</p>
                    <p className={classes.description}>{(data.weather[0].description).toUpperCase()}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt={'Weather'} className={classes.icon} />
            </div>
            <div className={classes.bottom}>
                <p className={classes.temperature}>{Math.round(data.main.temp)}<sup>°C</sup></p>
                <div className={classes.details}>
                    <div className={classes.parameter}>
                        <span className={classes.label}>DETAILS</span>
                    </div>
                    <div className={classes.parameter}>
                        <span className={classes.label}>Feels Like</span>
                        <span className={classes.value}>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className={classes.parameter}>
                        <span className={classes.label}>Wind</span>
                        <span className={classes.value}>{data.wind.speed} m/s</span>
                    </div>
                    <div className={classes.parameter}>
                        <span className={classes.label}>Humidity</span>
                        <span className={classes.value}>{data.main.humidity} %</span>
                    </div>
                    <div className={classes.parameter}>
                        <span className={classes.label}>Pressure</span>
                        <span className={classes.value}>{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather;