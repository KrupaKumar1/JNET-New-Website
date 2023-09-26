import Partner from "@/components/Partner";
import styles from "../styles/Home.module.css";
import BackCountry from "../public/assets/clients/back-country.png";
import BSNL from "../public/assets/clients/bsnl.png";
import Esilicon from "../public/assets/clients/esilicon.png";
import Pali from "../public/assets/clients/pali-solutions.png";
import PurePredictive from "../public/assets/clients/pure-predictive.png";
import STQC from "../public/assets/clients/stqc.png";
import TechMahindra from "../public/assets/clients/tech-mahindra.png";
import Wipro from "../public/assets/clients/wipro.png";
import Image from "next/image";

const PartnersSection = ({ partners }: { partners: Array<object> }) => {
  return (
    <div className={`${styles.baseWrapper} ${styles.clientsWrapper}`}>
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-12">
            <h2>Our Prestigious Clients</h2>
            <p className={styles.description}>
              We Do Not Speak About Our Success, Our Clients Does.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          <div className={styles.slide}>
            <Image src={BackCountry} height="200" width="200" alt="" />
          </div>
          <div className={styles.slide}>
            <Image src={BSNL} height="200" width="200" alt="" />
          </div>
          <div className={styles.slide}>
            <Image src={Esilicon} height="200" width="200" alt="" />
          </div>
          <div className={styles.slide}>
            <Image src={Pali} height="200" width="200" alt="" />
          </div>
          <div className={styles.slide}>
            <Image src={PurePredictive} height="200" width="200" alt="" />
          </div>
          <div className={styles.slide}>
            <Image src={STQC} height="200" width="200" alt="" />
          </div>
          <div className={styles.slide}>
            <Image src={TechMahindra} height="200" width="200" alt="" />
          </div>
          <div className={styles.slide}>
            <Image src={Wipro} height="200" width="200" alt="" />
          </div>
        </div>
      </div>

      {/* <ul className={styles.partnersMain}>
        {partners?.map((partner: any, index: number) => (
          <>
            <Partner
              key={index}
              Image={partner.fields.logo}
              name={partner.fields.title}
            />
            <Partner
              key={index}
              Image={partner.fields.logo}
              name={partner.fields.title}
            />
          </>
        ))}
      </ul> */}
    </div>
  );
};

export default PartnersSection;
