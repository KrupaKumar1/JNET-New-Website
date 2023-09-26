import styles from "../styles/Home.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import caseStudyBanner from "../public/assets/banners/case-study.png";
import Link from "next/link";

type Props = {};

const CaseStudy = (props: Props) => {
  return (
    <>
      <div className={`${styles.baseWrapper} ${styles.csWrapper}`}>
        <div className="container-fluid container-lg">
          <div className="row gx-3 mb-3">
            <div className="col-12 col-xl-6 text-center">
              <div className={styles.csBanner}>
                <Image
                  src={caseStudyBanner}
                  className={styles.bannerImg}
                  alt="Right arrow inside circle"
                />
                <div className={styles.csBannerImgText}>
                  <h3>Retail Store Solutions</h3>
                  <p>
                    The best quality with the delivery of accurate data and can
                    be accounted for by everyone person.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className={styles.csBannerContent}>
                <h2>Case Study</h2>
                <div className={styles.borderTitle}></div>
                <p>
                  Our software development company delivers corporate and
                  consumer applications based on our profound understanding of
                  technologies and the markets they operate in. With our
                  professional mindset, we look beyond technology to offer
                  viable solutions for your particular business context.
                </p>
                <p>
                  Our software development company delivers corporate and
                  consumer applications based on our profound understanding of
                  technologies and the markets they operate in. With our
                  professional mindset, we look beyond technology to offer
                  viable solutions for your particular business context.
                </p>
                <Link href={"/Contact"}>
                  <Button variant="primary">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
