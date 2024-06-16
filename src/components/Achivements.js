import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";
import img8 from "../assets/img/img8.png";
import img9 from "../assets/img/img9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Achievements = () => {

  const projects = [
    {
      title: "Weslyen University",
      description: "Python Programming",
      imgUrl: img1,
    },
    {
      title: "Amazon",
      description: "Getting Started with AWS",
      imgUrl: img8,
    },
    {
      title: "Google Cloud",
      description: "Big Data & Machine Learning",
      imgUrl: img3,
    },
    {
      title: "IITM",
      description: "Advanced Excel",
      imgUrl: img4,
    },
    {
      title: "InternNexus",
      description: "MERN Stack",
      imgUrl: img5,
    },
    {
      title: "DevTown",
      description: "Getting Started with ReactJS",
      imgUrl: img6,
    },
    {
      title: "Network Bulls",
      description: "Cisco Network Security V/S Ethical Hacking",
      imgUrl: img7,
    },
    {
      title: "Microsoft",
      description: "Cyber Security",
      imgUrl: img2,
    },
    {
      title: "Google Developer Group",
      description: "Styled Components with ReactJS",
      imgUrl: img9,
    },
  ];

  return (
    <section className="project" id="achievements">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Achievements</h2>
                <p>With a proven track record of innovative problem-solving and continuous skill enhancement, my professional journey is marked by successful project deliveries, recognition from industry leaders, and a steadfast commitment to pushing the boundaries of technology. My portfolio showcases a selection of these milestones, reflecting my dedication to excellence and growth in the tech industry.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}