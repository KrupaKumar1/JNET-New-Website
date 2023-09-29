import React from "react";
import styles from "../../styles/ServicePage.module.css";
import localF from "@/styles/custom/fonts";
import { services } from "@/helpers/config/services";
import ChatBotSection from "@/pages/ChatBotSection";
import Categories from "@/pages/Categories";
import Image from "next/image";

const ServicePage = (props: any) => {
  const result = services.find((service) => service.id == props.serviceId);

  const breakDescription = (text: string) => {
    // Split the text at "stop" and add a line break after it

    const parts = text?.split(".");
    console.log(parts);
    const jsxElements = parts?.map((part, index) => (
      <React.Fragment key={index}>
        <p className={`${localF.fontPoppinsRegular.className}`}>
          {part}. {parts.length > 1 && <br />}
        </p>
      </React.Fragment>
    ));
    return jsxElements;
  };

  return (
    <>
      <div className={`${styles.titleContainer}`}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-12">
              <p className={`${styles.text1} text-white`}>{result?.category}</p>
              <p className={`${styles.text2} text-white`}>{result?.heading}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollingTextContainer}>
        <div className={styles.scrollingText}>
          <p
            className={`${localF.fontAileronBold.className} ${styles.serviceBannerText}`}
          >
            Rapid exploration, research and validation
          </p>
        </div>
      </div>

      <div className={` ${styles.serviceDescription}`}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-xl-7 py-xl-5 mt-xl-5">
              {breakDescription(result?.text as string)}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.serviceImage}>
        <Image
          className="imgBanner"
          width={1600}
          height={600}
          src={result?.image as any}
          alt="No Image"
        />
      </div>
      {/* <div className={` ${styles.serviceBigPic}`}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-xl-6 py-xl-5 mt-xl-5">
              <p
                className={`${localF.fontAileronBold.className} ${styles.bigPicText}`}
              >
                Bridging the gap <br /> between vision <br /> and sustainable{" "}
                <br /> execution
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <Categories options={result} />
      {/* <div className={` ${styles.getInTouch}`}>
        <div className="container-fluid container-lg">
          <div className="row py-5">
            <div className="col-xl-12">
              <p
                className={`${localF.fontAileronBold.className} ${styles.getInTouchHeading}`}
              >
                Grow your business with us
              </p>
            </div>

            <div className={` col-xl-6 ${styles.getInTouchLower}`}>
              <p
                className={`${localF.fontPoppinsRegular.className} ${styles.getInTouchText}`}
              >
                Our experts are ready to guide you through your next big move.{" "}
                <br /> Let us know how we can help.
              </p>
            </div>
            <div className="col-xl-3"></div>
            <div className={`col-xl-6 col-sm-12  ${styles.getInTouchButton}`}>
              <Link href={"/Contact"} style={{ textDecoration: "none" }}>
                <div
                  className={`${localF.fontPoppinsRegular.className} ${styles.getInTouchButtonText}`}
                >
                  GET IN TOUCH
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <ChatBotSection />
    </>
  );
};

export default ServicePage;
