import localFont from "@/styles/custom/fonts";
import styles from "../styles/Home.module.css";

const LandingSection = (props: any) => {
  console.log(props.mainVideoURL);
  return (
    <>
      <div className={`${styles.baseWrapper} ${styles.landingContainer} `}>
        <div className={`${styles.videoContainer}`}>
          <div className={`${styles.videoBackdrop}`}></div>
          <video className={`${styles.homeVideo}`} width="100%" autoPlay loop>
            <source
              src="./assets/video/app-video.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
          <div className={`${styles.videoContent}`}>
            <div className="container-fluid container-lg">
              <div className="row">
                <div
                  className={`${styles.landingHeading} col-12 col-xl-8 col-xxl-7`}
                >
                  <h1 className={localFont.fontAileronBold.className}>
                    From strategy to execution,{" "}
                    <span>we make things happen!</span>
                  </h1>
                </div>
                <div
                  className={`${styles.landingText} col-12 col-xl-7 col-xxl-6`}
                >
                  <p>
                    In a world of constant change, you need{" "}
                    <b>agile solutions</b> to achieve your business goals.{" "}
                    <b>JNET Technologies</b> is a leading IT Solutions provider
                    with <b>15+ Years of experience</b> delivering exceptional
                    results for clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
