import Image from "next/image";
import navStyles from "../styles/Navbar.module.css";
import style from "../styles/AboutNav.module.css";
import sideNav from "../styles/SideNav.module.css";
import JNETLogo from "../public/assets/logos/jnet-logo.svg";
import JNETLogoWhite from "../public/assets/logos/jnet-logo-white.svg";
import aboutSideNav from "../styles/AboutSideNav.module.css";
import ServiceDropdown from "@/components/ServiceDropdown";
import FacebookIcon from "../public/facebook-logo-ind.svg";
import InstagramIcon from "../public/instagram-logo-ind.svg";
import TwitterIcon from "../public/twitter-logo-ind.svg";
import LinkedinIcon from "../public/Linkedin-logo-ind.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const [hideMenu, setHideMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [showService, setShowService] = useState(false);
  const [miniService, setMiniService] = useState(false);
  const servicesButton = useRef<any>(null);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos <= currentScrollPos && currentScrollPos > 0) {
        setHideMenu(true);
      } else {
        setHideMenu(false);
      }
      prevScrollPos = currentScrollPos;
      // setShowService(false);
    });
  }, []);

  //? Used to Close the Extended Navbar Services Panel on Switching Tabs (Navigation)
  useEffect(() => {
    setShowService(false);
  }, [router.asPath]);

  return (
    <>
      {" "}
      <div
        className={`${
          !open && hideMenu && !showService ? navStyles.hideNavbar : ""
        } ${navStyles["nav-bar"]}`}
      >
        {/* if it is home page add  .home  */}
        <nav
          className={`${router.asPath === "/" ? navStyles.home : ""} ${
            showService ? navStyles.navbarService : ""
          } ${navStyles.navbar} ${
            open ? navStyles.navbarBlack : navStyles.navbar
          }`}
        >
          <div className="container-fluid container-lg">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className={navStyles.logo} id="mySidepanel">
                  <Link href={"/"}>
                    {showService || open ? (
                      <Image
                        src={JNETLogoWhite}
                        alt="JNET Logo"
                        onClick={() => {
                          setShowService(false);
                          setOpen(false);
                        }}
                      />
                    ) : (
                      <Image
                        src={router.asPath === "/" ? JNETLogoWhite : JNETLogo}
                        alt="JNET Logo"
                        onClick={() => {
                          setOpen(false);
                        }}
                      />
                    )}
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <div
                  className={`${
                    router.asPath === "/About" ? navStyles.navAbout : ""
                  } ${showService ? navStyles.navService : ""} ${
                    navStyles.nav
                  }`}
                >
                  <li
                    ref={servicesButton}
                    onClick={() => {
                      console.log(showService, "showService");

                      setShowService(!showService);
                    }}
                  >
                    Services
                  </li>
                  {/* <li>
                    <Link href={"/"}>Industries & Expertises</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Case Studies</Link>
                  </li> */}
                  <li>
                    <Link href={"/About"}>Company</Link>
                  </li>
                  <li>
                    <Link href={"/Contact"}>Contact Us</Link>
                  </li>
                </div>

                {/* <Image
                  onClick={() => setOpen(!open)}
                  className={navStyles.hamburger}
                  src={MenuIcon}
                  alt="Menu Icon"
                /> */}

                <div id={open ? navStyles["menu"] : ""}>
                  <div
                    id={open && router.asPath === "/About" ? style["menu"] : ""}
                    className={
                      open && router.asPath === "/About" ? style.menu : ""
                    }
                  >
                    <div
                      onClick={() => {
                        setOpen(!open);
                      }}
                      className={`${
                        router.asPath === "/About"
                          ? style.hamburger
                          : navStyles.hamburger
                      }
                      ${
                        open || router.asPath === "/About"
                          ? navStyles.hamburgerWhite
                          : navStyles.hamburger
                      }`}
                    >
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <div ref={servicesDD}> */}
        {showService ? (
          <ServiceDropdown setShowService={setShowService} />
        ) : null}
        {/* </div> */}
      </div>
      <div>
        <div
          className={
            router.asPath === "/About"
              ? aboutSideNav.container
              : sideNav.container
          }
          style={{
            opacity: open ? 1 : 0,
            zIndex: open ? 1 : -1,
            overflowY: open ? "scroll" : "auto",
          }}
        >
          <li onClick={() => setMiniService(!miniService)}>SERVICES</li>
          {miniService ? (
            <ServiceDropdown
              showService={miniService}
              setShowService={setMiniService}
              showMenu={open}
              setShowMenu={setOpen}
            />
          ) : null}

          {/* <li onClick={() => setOpen(false)}>Industries & Experties</li>
          <li onClick={() => setOpen(false)}>Case Studies</li>
          <li onClick={() => setOpen(false)}>Solutions</li> */}

          <Link href={"/About"} style={{ textDecoration: "none" }}>
            <li onClick={() => setOpen(false)}> Company </li>
          </Link>

          <Link href={"/Contact"} style={{ textDecoration: "none" }}>
            <li onClick={() => setOpen(false)}> Contacts Us</li>
          </Link>
          <div>&nbsp;</div>
          <div>&nbsp;</div>

          <div className={sideNav.copyright}>
            <div className="container pt-5  ">
              <div className="row">
                <div
                  className={`col-xl-2 col-sm-12 col-xs-12 ${sideNav.socialLogos}`}
                >
                  <Image
                    src={FacebookIcon}
                    alt="Social Link"
                    className={sideNav.facebook}
                  />
                  <Image
                    src={InstagramIcon}
                    alt="Social Link"
                    className={sideNav.facebook}
                  />
                  <Image
                    src={LinkedinIcon}
                    alt="Social Link"
                    className={sideNav.facebook}
                  />
                  <Image
                    src={TwitterIcon}
                    alt="Social Link"
                    className={sideNav.facebook}
                  />
                </div>
                <div className="col-xl-2 col-sm-0 col-xs-1 pt-xl-5">&nbsp;</div>
                <div
                  className={`col-xl-8 ${
                    router.asPath === "/About"
                      ? aboutSideNav.copyright
                      : sideNav.copyright
                  } mt-xl-2`}
                >
                  <h6>Copyright © 2020 JNET. All rights reserved.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
