import classes from './index.module.scss';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.LENGTH).concat(WEEK_DAYS.slice(0, dayInAWeek));

    console.log(forecastDays)

    return (
        <>
            <label className={classes.title}>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={classes.daily}>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="Weather" className={classes[`small-icon`]} />
                                    <label className={classes.days}>
                                        {forecastDays[idx]}
                                    </label>
                                    <label className={classes.description}>
                                        {item.weather[0].description}
                                    </label>
                                    <label className={classes[`min-max`]}>
                                        {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={classes[`daily-details`]}>
                                <div className={classes[`daily-details-item`]}>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className={classes[`daily-details-item`]}>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className={classes[`daily-details-item`]}>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className={classes[`daily-details-item`]}>
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className={classes[`daily-details-item`]}>
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className={classes[`daily-details-item`]}>
                                    <label>Feels Like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}



            </Accordion>
        </>
    )
}

export default Forecast;