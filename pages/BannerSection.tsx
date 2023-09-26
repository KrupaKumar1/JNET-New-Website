import LongCard from "@/components/reusable/LongCard";
import styles from "../styles/Home.module.css";
import Icon1 from "../public/icon1.svg";
import Icon2 from "../public/icon2.svg";
import Icon3 from "../public/icon3.svg";
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
        <div className={`container`}>
          <Tab.Container id="servicesTabs" defaultActiveKey={0}>
            <Row className="g-3">
              <Col sm={12} lg={6}>
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
              </Col>
              <Col sm={12} lg={6}>
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

      {/* <LongCard heading="Future Vision." icon={Icon1} description="We intend to establish a trusted partnership with our clients by providing the best of tech solutions.  We combine quality with innovation to establish ourselves as the new-age tech solutions company. We align with your requirements to ensure you find success and growth." color="#46d2a0"/>
        <LongCard heading="Product Design." icon={Icon2} description="We breathe Quality. Our range of products are a proof of what we can envision and create. Quality products at affordable pricing is our mantra. Our products are successful because they are born out of deep thought connected to understanding your requirements at the root-cause level." color="#b195f9"/>
        <LongCard heading="Innovative Solutions." icon={Icon3} description="We wish to create an impact. Our approach is to come up with innovative solutions that address all your needs and solve your problems. At JNET, Quality and Innovation go hand-in-hand creating a sure shot recipe for success." color="#fea046"/> */}
    </>
  );
};

export default BannerSection;
