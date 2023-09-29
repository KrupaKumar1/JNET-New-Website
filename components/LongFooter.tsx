import Image from "next/image";
import footerStyles from "../styles/Footer.module.css";
import JNETLogo from "../public/assets/logos/jnet-logo-white.svg";
import FacebookIcon from "../public/assets/icons/media-facebook.svg";
import LinkedinIcon from "../public/assets/icons/media-linkedin.svg";
import InstagramIcon from "../public/assets/icons/media-instagram.svg";
import TwitterIcon from "../public/assets/icons/media-twitter.svg";
import Link from "next/link";
import { socialLinks } from "@/helpers/socialLinks";

const LongFooter = () => {
  return (
    <>
      <div className={`${footerStyles.footer}`}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className={`col-12 col-xl-4`}>
              <Image
                src={JNETLogo}
                alt="JNET Technologies company logo"
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
                  <a href={socialLinks.facebook}>
                    <Image
                      src={FacebookIcon}
                      alt="Social Link"
                      className={footerStyles.iconMedia}
                    />
                  </a>
                  <a href={socialLinks.instagram}>
                    <Image
                      src={InstagramIcon}
                      alt="Social Link"
                      className={footerStyles.iconMedia}
                    />
                  </a>
                  <a href={socialLinks.linkedIn}>
                    <Image
                      src={LinkedinIcon}
                      alt="Social Link"
                      className={footerStyles.iconMedia}
                    />
                  </a>
                  <a href={socialLinks.twitter}>
                    <Image
                      src={TwitterIcon}
                      alt="Social Link"
                      className={footerStyles.iconMedia}
                    />
                  </a>
                </div>
              </div>
              <p>Email: info@jnettechnologies.com</p>
            </div>
            <div className="col-xl">
              <h2>Contact</h2>
              <div className="row">
                <div className="col-12 col-sm-6">
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
                <div className="col-12 col-sm-6">
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
