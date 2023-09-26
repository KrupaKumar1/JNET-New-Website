import styles from "../styles/Home.module.css";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import isoCertification from "../public/assets/images/iso-certification.png";
import aicpaCertification from "../public/assets/images/aicpa-certification.png";
import rinaCertification from "../public/assets/images/rina-certification.png";
import peopleGroup from "../public/assets/icons/jnet-icon-white.svg";

type Props = {};

const ProjectionSection = (props: Props) => {
  return (
    <>
      <div className={`${styles.baseWrapper} ${styles.projectionWrapper}`}>
        <div className="container-fluid container-lg">
          <div className="row g-3 mb-3">
            <div className="col-12 col-xl-6">
              <div className={styles.bannerHeader}>
                <h2>
                  JNET Unfolds <br />
                  Solutions to Everything
                </h2>
                <p className={styles.description}>
                  The Reasons Why We Stand Out
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-2">
              <Card className="cardSecondary first">
                <Card.Body>
                  <Image
                    src={isoCertification}
                    className={styles.imgCertification}
                    alt="Right arrow inside circle"
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-xl-2">
              <Card className="cardSecondary">
                <Card.Body>
                  <Image
                    src={aicpaCertification}
                    className={styles.imgCertification}
                    alt="Right arrow inside circle"
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-xl-2">
              <Card className="cardSecondary">
                <Card.Body>
                  <Image
                    src={rinaCertification}
                    className={styles.imgCertification}
                    alt="Right arrow inside circle"
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-xl-4">
              <div className="row g-3 h-100">
                <div className="col-12 col-sm-6">
                  <Card className="cardSecondary experience">
                    <Card.Body>
                      <div className="projectionContent">
                        <h2>15+</h2>
                        <p>Years Of Experience</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-12 col-sm-6">
                  <Card className="cardSecondary projects">
                    <Card.Body>
                      <div className="projectionContent">
                        <h2>80+</h2>
                        <p>Projects Completed</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-12">
                  <Card className="cardSecondary bottomLeft employee">
                    <Card.Body>
                      <div className="projectionContent">
                        <h2>500+</h2>
                        <p>Employees</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="row g-3 h-100">
                <div className="col-12">
                  <Card className="cardSecondary retention">
                    <Card.Body>
                      <div className="projectionContent">
                        <h2>95%</h2>
                        <p>Client Retention Rate</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-12 col-sm-6">
                  <Card className="cardSecondary delivery">
                    <Card.Body>
                      <div className="projectionContent">
                        <h2>60+</h2>
                        <p>On Time Delivery</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-12 col-sm-6">
                  <Card className="cardSecondary time">
                    <Card.Body>
                      <div className="projectionContent">
                        <h2>95%</h2>
                        <p>On Time Delivery</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-4">
              <Card className="cardSecondary bottomRight group">
                <Card.Body>
                  <div className="overlay"></div>
                  <Image
                    src={peopleGroup}
                    className={styles.iconNav}
                    alt="Right arrow inside circle"
                  />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectionSection;
