import Image from "next/image";
import navStyles from "../styles/Navbar.module.css";
import style from "../styles/AboutNav.module.css";
import sideNav from "../styles/SideNav.module.css";
import JNETLogo from "../public/assets/logos/jnet-logo.svg";
import JNETLogoWhite from "../public/assets/logos/jnet-logo-white.svg";
import aboutSideNav from "../styles/AboutSideNav.module.css";
import ServiceDropdown from "@/components/ServiceDropdown";
import FacebookIcon from "../public/assets/icons/icon-facebook.svg";
import InstagramIcon from "../public/assets/icons/icon-instagram.svg";
import TwitterIcon from "../public/assets/icons/icon-twitter.svg";
import LinkedinIcon from "../public/assets/icons/icon-Linkedin.svg";
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
  const [scrolling, setScrolling] = useState(false);

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
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        // User is scrolling down
      } else {
        setScrolling(false);
        // User is at the top
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          className={`${
            router.asPath === "/"
              ? scrolling
                ? navStyles.navbarBlack
                : navStyles.home
              : ""
          } ${showService ? navStyles.navbarService : ""} ${navStyles.navbar} ${
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
                    <Link href={"/Company"}>Company</Link>
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

          <Link href={"/Company"} style={{ textDecoration: "none" }}>
            <li onClick={() => setOpen(false)}> Company </li>
          </Link>

          <Link href={"/Contact"} style={{ textDecoration: "none" }}>
            <li onClick={() => setOpen(false)}> Contact Us</li>
          </Link>
          <div>&nbsp;</div>
          <div>&nbsp;</div>

          <div className={sideNav.copyright}>
            <div className="container-fluid container-lg">
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
                  <h6>Copyright © 2023 JNET. All rights reserved.</h6>
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
