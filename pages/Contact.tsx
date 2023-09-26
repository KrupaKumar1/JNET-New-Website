import React from "react";
import styles from "../styles/Contact.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import locationLogo from "../public/location .svg";
import Image from "next/image";
const Contact = () => {
  return (
    <>
      <div className={`${styles.titleContainer} `}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-12">
              <p className={`${styles.text1} text-white`}>Contact Us</p>
              <h1 className={`${styles.text2} text-white`}>JNET</h1>
              <p className={`${styles.text3} text-white`}>
                From Offering Expert Advice To Solving Complex Problems, We Are
                Here To Help!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.contactForm}`}>
        <div className="container-fluid container-lg">
          <div className={`row`}>
            <div className="col-12">
              <h2 className="text-white mb-4">Get in touch</h2>
            </div>
            <div className="col-12 col-lg-6">
              <Row className="g-4">
                <Col xs={12}>
                  <FloatingLabel controlId="floatingInputGrid" label="Name*">
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12}>
                  <FloatingLabel controlId="floatingInputGrid" label="Email*">
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12}>
                  <FloatingLabel controlId="floatingInputGrid" label="Phone*">
                    <Form.Control
                      type="tel"
                      placeholder="Enter Phone Number"
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12}>
                  <FloatingLabel controlId="floatingTextarea2" label="Message*">
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your comments here"
                      style={{ height: "100px" }}
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12}>
                  <button className={`${styles.button}`}>SUBMIT</button>
                </Col>
              </Row>
            </div>
          </div>
          {/* <div className={`row `}>
            <div className={`col-xl-6 `}></div>
            <div className={`col-xl-6 col-md-12 col-xs-12 ${styles.location}`}>
              <Image src={locationLogo} alt="location" />
              <h6 className="text-white mt-4">
                JNET Technologies Private Limited
              </h6>
              <p className="text-white mt-4">
                {" "}
                The Platina, A Block , 3rd floor,
                <br /> 303, Gachibowli, Hyderabad, <br />
                Telangana 500032 <br />
                Phone: +91 98496 89798
                <br /> Email: support@jnettechnologies.com
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
