import { Card, Col, Divider, Row, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const About = () => {
  return (
    <div>
      <h1 className="p-3">About MentorMe</h1>
      <Divider />
      <Card>
        <p data-aos="fade-up" className="p-3">
          MentorMe is a mentorship and networking platform for youth, espcially those in tech. 
          Not many are find mentors in our ecosystems. It takes confidence to approach strangers 
          and ask them for their time and advice. This where the platform comes in... The plaform 
          brings in mentor from all aspects of career paths to help nurture the young ones for free
          and occassional general mentoring and networking sessions, which you can book flexibly and
          without hesitation.
        </p>
      </Card>

      <Col>
        <h1 className="title">Our Core Values</h1>

        <Divider />
        <Row data-aos="zoom-out">
          <Col span={6}>
            <Card
              headStyle={{
                background: "#bae7ff",
              }}
              style={{ background: "#e6fffb" }}
              title="Diversity"
            >
              <Text>
                We believe that everyone should be able to learn from each
                other.
              </Text>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              headStyle={{ background: "#e6fffb" }}
              title="Supportive"
              style={{ background: "#08979c" }}
            >
              <Text>
                We want to empower each other to grow professionally and
                personally.
              </Text>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              headStyle={{ background: "#08979c" }}
              title="Inspiring"
              style={{ background: "#b7eb8f" }}
            >
              <Text>
                We seek to inspire each other and show the possibilities and
                beauty within the tech world.
              </Text>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              headStyle={{ background: "#b7eb8f" }}
              title="Authentic"
              style={{ background: "#bae7ff" }}
            >
              <Text>
                We truly believe in our vision and proudly strive for it.
              </Text>
            </Card>
          </Col>
        </Row>
      </Col>
      <br />
      <Col
        style={{
          border: "1px solid steelblue",
        }}
      >
        <h1 className="title">Our Vision</h1>
        {/* <Divider /> */}
        <h1 className="p-3" level={4}>
          Model and encourage a resilient mindset that values risk-taking,
          learning from failure, and personal growth.
        </h1>
      </Col>
    </div>
  );
};

export default About;
