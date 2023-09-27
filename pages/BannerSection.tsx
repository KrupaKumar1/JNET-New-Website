import LongCard from "@/components/reusable/LongCard";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import arrowRightCircle from "../public/assets/icons/arrow-right-circle.svg";
import arrowRightCircleWhite from "../public/assets/icons/arrow-right-circle-white.svg";
import Link from "next/link";
import { bannerSectionServices } from "@/helpers/config/bannerSection";

type Props = {};

const BannerSection = (props: Props) => {
  return (
    <>
      <div className={`${styles.baseWrapper} ${styles.bannerWrapper}`}>
        <div className={styles.bannerTile}>
          <div className="row align-items-center">
            <div className="col">
              <h2>See how we can help you reach your goals.</h2>
            </div>
            <div className="col-auto">
              <Link href={"./Contact"}>
                <Image
                  src={arrowRightCircleWhite}
                  alt="Right arrow inside circle"
                  className={styles.iconMedia}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid container-lg">
          <Tab.Container id="servicesTabs" defaultActiveKey={0}>
            <Row className="g-3">
              <Col sm={12} lg={5}>
                <div className="row">
                  <div className="col-12 col-lg-10">
                    <h2>Our Services</h2>
                    <p>Innovate Through The Latest Technologies</p>
                    <div className={`${styles.border}`}></div>
                    <Nav
                      variant="pills"
                      className={`${styles.verticalTabs} tabsVertical flex-column`}
                    >
                      {bannerSectionServices?.map((serviceCategory, index) => (
                        <>
                          <Nav.Item>
                            <Nav.Link eventKey={index}>
                              {serviceCategory.title}
                            </Nav.Link>
                          </Nav.Item>
                        </>
                      ))}
                    </Nav>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={7}>
                <Tab.Content className={styles.bannerDescription}>
                  {bannerSectionServices.map((sectionCategory, index) => (
                    <>
                      <Tab.Pane eventKey={index}>
                        <h3 className={styles.bannerDescTitle}>
                          {sectionCategory.title}
                        </h3>
                        <p className={styles.bannerMainPara}>
                          {sectionCategory.description}
                        </p>
                        <div className="row g-4 mt-3 mb-5">
                          {sectionCategory.contents.map((sectionContent) => (
                            <>
                              <div className="col-12 col-sm-6">
                                <Card className="cardPrimary">
                                  <Card.Body>
                                    <Card.Title>
                                      {sectionContent.title}
                                    </Card.Title>
                                    <Card.Text>
                                      {sectionContent?.description}
                                    </Card.Text>
                                    <Card.Link href={sectionContent.link}>
                                      <Image
                                        src={arrowRightCircle}
                                        className={styles.iconNav}
                                        alt="Right arrow inside circle"
                                      />
                                    </Card.Link>
                                  </Card.Body>
                                </Card>
                              </div>
                            </>
                          ))}
                        </div>
                      </Tab.Pane>
                    </>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
