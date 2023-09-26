import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Link from "next/link";

type Props = {};

const IndustryExpertise = (props: Props) => {
  return (
    <>
      <div className={`${styles.baseWrapper} ${styles.industryWrapper}`}>
        <div className="container-fluid container-lg">
          <div className="row gx-3 mb-3">
            <div className="col-12">
              <h2>Industries &amp; Expertises</h2>
            </div>
          </div>
        </div>
        <Tab.Container id="industryExpertise" defaultActiveKey="healthCare">
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="tabsHorizontal">
                <Nav.Item>
                  <Nav.Link eventKey="healthCare">Health Care</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="publicSector">Public Sector</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="telecom">Telecom</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="media">Media</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="healthCare">
                  <div className={styles.tabWrapper}>
                    <div className={styles.tabContent}>
                      <div className="container-fluid container-lg">
                        <div className="row">
                          <div className="col-12 col-xl-6">
                            <h3>Healthcare & Life Sciences</h3>
                            <p>
                              Our software development company delivers
                              corporate and consumer applications based on our
                              profound understanding of technologies and the
                              markets they operate in. With our professional
                              mindset, we look beyond technology to offer viable
                              solutions for your particular business context.
                            </p>
                            <p>
                              Our software development company delivers
                              corporate and consumer applications based on our
                              profound understanding of technologies and the
                              markets they operate in. With our professional
                              mindset, we look beyond technology to offer viable
                              solutions for your particular business context.
                            </p>
                            <Link href={"/Contact"}>
                              <Button variant="primary">Contact Us</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="publicSector"></Tab.Pane>
                <Tab.Pane eventKey="telecom"></Tab.Pane>
                <Tab.Pane eventKey="media"></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

export default IndustryExpertise;
