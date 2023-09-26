import styles from "../styles/Home.module.css";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import jnetIcon from "../public/assets/icons/jnet-icon-trans.svg";
import AskAlden from "../public/assets/products/ask-alden.png";
import Hrms from "../public/assets/products/hrms.png";
import Neotadd from "../public/assets/products/neotadd.png";
import Restrozap from "../public/assets/products/restrozap.png";
import Trckit from "../public/assets/products/trckit.png";

type Props = {};

const OurProducts = (props: Props) => {
  return (
    <>
      <div className={`${styles.baseWrapper} ${styles.ourProductsWrapper}`}>
        <div className="container-fluid container-lg">
          <div className="row justify-content-between mb-5">
            <div className="col-12 col-xl-6">
              <h2>Our Products</h2>
              <p>The Reasons Why We Stand Out</p>
              <p>
                Driving excellence and infusing innovation is at the core of
                everything that we do at JNET Technologies. Our product
                portfolio built by leveraging the best technologies to serve
                diverse industries stands out as an instance of our innovative
                capabilities. Comprised with never before implemented features
                in each of these products is the reason why we are our
                client&quo;s favourite.
              </p>
            </div>
            <div className="col-12 col-xl-4 text-end">
              <Image
                src={jnetIcon}
                width={250}
                alt="Right arrow inside circle"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-xl-8 offset-4">
              <Card className="cardSecondary first bgSecondary">
                <Card.Body></Card.Body>
              </Card>
            </div>
          </div>
          <div className="row gx-3">
            <div className="col-12 col-xl">
              <Card className="cardSecondary first">
                <Card.Body>
                  <Image
                    src={AskAlden}
                    className={styles.imgProduct}
                    alt="Right arrow inside circle"
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-xl">
              <Card className="cardSecondary">
                <Card.Body>
                  <Image
                    src={Hrms}
                    className={styles.imgProduct}
                    alt="Right arrow inside circle"
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-xl">
              <Card className="cardSecondary">
                <Card.Body>
                  <Image
                    src={Neotadd}
                    className={styles.imgProduct}
                    alt="Right arrow inside circle"
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-xl">
              <Card className="cardSecondary">
                <Card.Body>
                  <Image
                    src={Restrozap}
                    className={styles.imgProduct}
                    alt="Right arrow inside circle"
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-xl">
              <Card className="cardSecondary bottomRight">
                <Card.Body>
                  <Image
                    src={Trckit}
                    className={styles.imgProduct}
                    alt="Right arrow inside circle"
                  />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
