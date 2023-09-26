import React from "react";
import style from "../styles/About.module.css";
import ChatBotSection from "./ChatBotSection";
const About = () => {
  return (
    <>
      <div className={`${style.titleContainer}`}>
        <div className="container-fluid container-lg">
          <div className={`row`}>
            <div className={`col-12`}>
              <p className={`${style.text1} text-white`}>About</p>
              <h1 className={`${style.text2} text-white`}>JNET</h1>
              <p className={`${style.text3} text-white`}>
                We Unfolds Solutions to Everything
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.aboutcontainer2}`}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className={`${style.textSupport} col-12`}>
              <p className="text-black">
                JNET is a leading IT Solutions provider with 15+ Years of
                experience and a blend of 500+ engineers across multiple
                domains. We are dedicated to helping companies strategize,
                develop, and scale dynamic digital transformations, enhance
                their business performance, and enable innovative growth
                opportunities. Since our inception, we have been delivering
                exceptional results for our clients in diverse industries,
                including the Public Sector, Telecom, Healthcare, and Media,
                helping them succeed in the ever-evolving digital marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.aboutcontainer3}`}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className={`${style.textSupport} col-12`}>
              <p className="text-white">
                We are driven by our commitment to deliver excellent services to
                our clients. We genuinely believe that our success depends on
                our clients’ success, and we make sure all of our energies are
                aligned to achieve that. Our core values are an integral part of
                our company DNA and are reflected in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.aboutcontainer4}`}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div
              className={`${style.textSupport} col-xl-12 col-lg-12 col-md-12`}
            >
              <p className="text-white d-flex justify-content-center ">
                At JNET, delivering quality is critical to satisfying our
                customers and retaining their loyalty. Our certifications in ISO
                9001:2015, ISO/IEC 27001: 2013, ISO 45001:2018, and CMMI-SVC ML3
                stand proof of our commitment towards world-class standards. In
                addition, we have a team of quality experts who ensure that
                every resource in the company is well appraised of our quality
                policy and follows them at all levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ChatBotSection />
    </>
  );
};

export default About;
