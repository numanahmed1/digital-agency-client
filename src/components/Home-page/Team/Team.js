import React from "react";
import "./Team.css";
import willamson from "../../../images/team_01.jpg";
import bitersom from "../../../images/team_03.jpg";
import jhon from "../../../images/team_02.jpg";
import TeamCard from "../TeamCard/TeamCard";

const teamData = [
  {
    id: 1,
    name: "Rasalina de willamson",
    position: "Software Developer",
    img: willamson,
  },
  {
    id: 2,
    name: "Alextina Bitersom",
    position: "Web Developer",
    img: bitersom,
  },
  {
    id: 3,
    name: "Jhon Doe",
    position: "UI/UX Designer",
    img: jhon,
  },
];
const Team = () => {
  return (
    <section className="team">
      <div className="common-title">
        <p>Team</p>

        <h1>
          Our expert team always ready for services
          <span className="dot-color">.</span>
        </h1>
      </div>
      <div className="team-main">
        <div className="container">
          <div className="row">
            {teamData.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
