import { Col, Row } from "antd";
import React from "react";
import TeamCard from "../components/teams/TeamCard";

const Team = () => {
  return (
    <div>
      <h1 className="title">Team</h1>
      <p className="p-3">
        A strong team is the foundation of a high-performing business and a good
        team ethic can be held largely accountable for the success and smooth
        running of the organization. If employees do not gel and work well
        together, problems can arise, such as poor organization, missed
        deadlines, and conflict within the workplace. So what can teams do to
        ensure that they are collectively productive and drive the company
        forward? Here are a few qualities that a successful team possesses.
      </p>
      <Row gutter={[16, 16]} align="center">
        <Col span={6}>
          <TeamCard
            data={{
              name: "John Harry Wartemberg",
              description: "Web Developer",
              img: "./assets/teams/harry.jpg",
            }}
          />
        </Col>
        <Col span={6}>
          <TeamCard
            data={{
              name: "Sahadatu Banasing",
              description: "Content developer",
              img: "./assets/teams/sahada.jpeg",
            }}
          />
       </Col>
      </Row>
    </div>
  );
};

export default Team;
