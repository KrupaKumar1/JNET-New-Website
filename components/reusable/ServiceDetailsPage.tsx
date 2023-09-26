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
  console.log(result);
  return (
    <>
      <div className={`${styles.landingContainer}`}>
        <div className="container-fluid container-lg">
          <div className={`row py-5 mt-5 ${styles.landingSection}`}>
            <div className={`col-12`}>
              <p
                className={`${localF.fontAileronBold.className} ${styles.preHeading}`}
              >
                {result?.category}
              </p>
              <h1
                className={`${localF.fontAileronBold.className} ${styles.heading}`}
              >
                {result?.heading}
              </h1>
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
            </div>
          </div>
        </div>
      </div>
      <div className={styles.serviceImage}>
        <Image
          width={1600}
          height={600}
          src={result?.image as any}
          alt="No Image"
        />
      </div>
    </>
  );
};

export default ServiceDetailsPage;
