import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_TRIMBLE from "../../assets/img/experience/trimble-inc-vector-logo.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_TRIMBLE} alt="Trimble logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">GIS Analyst</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> QGIS, MySQL
                    <br />
                    <strong>Duration:</strong> June 2018 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Responsible</strong> for updation of Trimble Maps in a cooperative environment, through inundation conflation in QGIS with help of trimble plugins.</li>
                      <li><strong>Actively involved</strong> in dividing the work among the team. </li>
                      <li><strong>Identifying &amp; tracking</strong> bugs and defects, and reporting
issues to plugin developers.
                      </li>
                      <li><strong>Reviewing</strong> user requirement and working on High priority
project for delivery on time.</li>
                      

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;