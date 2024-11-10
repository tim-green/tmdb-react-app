import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";

const CircleRating = ({ rating }) => {
    return (
        <div className="circleRating">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        // Red, Orange and Green
                        rating < 5 ? "#da0c29" : rating < 7 ? "#ec5626" : "#0cda38",
                })}
            />
        </div>
    );
};

export default CircleRating;
