import Image from "next/image";
import footerStyles from "../styles/Footer.module.css";
import JNETLogo from "../public/assets/logos/jnet-logo-white.svg";
import FacebookIcon from "../public/assets/icons/media-facebook.svg";
import LinkedinIcon from "../public/assets/icons/media-linkedin.svg";
import InstagramIcon from "../public/assets/icons/media-instagram.svg";
import TwitterIcon from "../public/assets/icons/media-twitter.svg";
import Link from "next/link";

const LongFooter = () => {
  return (
    <>
      <div className={`${footerStyles.footer}`}>
        <div className={`${footerStyles.container} container`}>
          <div className={`${footerStyles.row} row`}>
            <div className={`col-12 col-sm-6 col-lg-4 col-xl-3`}>
              <Image
                src={JNETLogo}
                alt=""
                className={footerStyles.footerLogo}
              />
              <p className="my-4">
                JNET Technologies is a leading IT Solutions provider with 15+
                years of experience driving technology innovation for business
                transformation & delivering excellence using a robust solutions
                portfolio.
              </p>
              <div className="row mb-3">
                <div
                  className={`col-12 col-sm-auto ${footerStyles.socialLogos}`}
                >
                  <Image
                    src={FacebookIcon}
                    alt="Social Link"
                    className={footerStyles.iconMedia}
                  />
                  <Image
                    src={InstagramIcon}
                    alt="Social Link"
                    className={footerStyles.iconMedia}
                  />
                  <Image
                    src={LinkedinIcon}
                    alt="Social Link"
                    className={footerStyles.iconMedia}
                  />
                  <Image
                    src={TwitterIcon}
                    alt="Social Link"
                    className={footerStyles.iconMedia}
                  />
                </div>
              </div>
              <p>Email: info@jnettechnologies.com</p>
            </div>
            <div className="col-xl">
              <h2>Contact</h2>
              <div className="row">
                <div className="col-xl-4">
                  <h3>Corporate Office</h3>
                  <address>
                    1-89/3/4, Raghuma Towers,
                    <br />
                    Above DCB Bank, Madhapur,
                    <br />
                    Hyderabad, Telangana, INDIA 500081
                  </address>
                  <p>Phone: +91 40 4013 8535/36</p>
                  <p>Fax: +91 40 4020 8446</p>
                </div>
                <div className="col-xl-4">
                  <h3>Middle East</h3>
                  <address>
                    Business Center 1, M Floor, The Meydan,
                    <br /> Nad Al Sheba, Dubai, UAE
                  </address>
                  <p>Phone: +971 50 573 1899</p>
                </div>
                <div className="col-xl-4">
                  <h3>United States</h3>
                  <address>
                    1640 Highland Falls DR,
                    <br />
                    STE 302, Leander,
                    <br />
                    Texas 78641
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${footerStyles.copyright}`}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-12">
              <p className="text-center">
                2023 &copy; Copyrights JNET Technologies Pvt. Ltd. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongFooter;
