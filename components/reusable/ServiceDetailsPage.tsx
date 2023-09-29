import React from "react";
import styles from "../../styles/ServicePage.module.css";
import localF from "@/styles/custom/fonts";
import ListGroup from "react-bootstrap/ListGroup";
import { servicesDetails } from "@/helpers/config/serviceDetails";
import Image from "next/image";

const ServiceDetailsPage = (props: any) => {
  const result = servicesDetails.find(
    (service) => service.id == props.serviceDetailsId
  );

  const splitContent = (text: string) => {
    // Split the text at "stop" and add a line break after it

    const parts = text?.split(".");

    const jsxElements = parts?.map((part, index) => (
      <React.Fragment key={index}>
        <p className={styles.telecomContent}>
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
      <div className={styles.serviceDetailsContainer}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-12 col-xl-6">
              <h2>{result?.text}</h2>
              <div className={`${styles.border}`}></div>
              <p className={`${styles.description}`}>{result?.description}</p>
              <ListGroup className="list-primary">
                {result?.contents?.map((content) => (
                  <>
                    <ListGroup.Item>{content.text}</ListGroup.Item>
                  </>
                ))}
              </ListGroup>
              <p className={`${styles.description}`}>
                {result?.contentDescription}
              </p>
              {result?.contentDescriptionUnique && (
                <p className={`${styles.subDescription}`}>
                  {result?.contentDescriptionUnique}
                </p>
              )}
              {splitContent(result?.contentTelecom as string)}
              {/* {result?.contentTelecom && (
                <p className={`${styles.telecomContent}`}>
                  {result?.contentTelecom}
                </p>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.serviceImage}>
        <Image
          className="imgBanner"
          src={result?.image as any}
          width={1600}
          height={600}
          alt="No Image"
        />
      </div>
    </>
  );
};

export default ServiceDetailsPage;
