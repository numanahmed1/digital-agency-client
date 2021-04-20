import React from "react";
import "./TeamCard.css";

const TeamCard = ({ team }) => {
  const { name, position, img } = team;
  return (
    <div className="col-md-4">
      <div className="team-card">
        <div className="img-box">
          <img src={img} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="text-box">
          <h4>{name}</h4>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
