import React from "react";

export default function Main(props) {
    console.log(props)
  return (
    <div className="main">
      <div className="main--wrapper">
        <img src={props.imageUrl} className="main--photo" />
        <div className="main--content">
          <div className="main--info">
            <span>
              <img src="../Images/map.png" className="main--info_img" />
            </span>
            <h4 className="main--info_place">{props.location}</h4>
            <a href={props.googleMapsUrl} className="main--info_googlemap">view on Google Maps</a>
          </div>
          <h2 className="main--info_location">{props.title}</h2>
          <div className="info--date">
            <span className="info--start_date">{props.startDate} - </span>
            <span className="info--start_date">{props.endDate}</span>
          </div>
          <p className="description">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
