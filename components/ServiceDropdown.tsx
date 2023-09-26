import React from "react";
import styles from "../styles/ServiceDrop.module.css";
import aboutDropStyles from "../styles/AboutServiceDrop.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
type ServiceDropdownProps = {
  showService?: boolean;
  setShowService?: Function;
  showMenu?: boolean;
  setShowMenu?: Function;
};
const ServiceDropdown = (props: ServiceDropdownProps) => {
  const router = useRouter();
  const { setShowService, showService, showMenu, setShowMenu } = props;
  return (
    <>
      <div
        className={`${
          router.asPath === "/About"
            ? aboutDropStyles.serviceDrop
            : styles.serviceDrop
        } `}
      >
        <div className={`container-fluid container-lg`}>
          <div className={`row`}>
            <div
              className={` col-xl-3 text-white ${
                router.asPath === "/About"
                  ? aboutDropStyles.services
                  : styles.services
              } `}
            >
              {/* <h4>Innovate</h4> */}
              <p>
                <Link
                  href="/service/CADS"
                  onClick={() => {
                    console.log("clicled", showService);
                    setShowMenu?.(!showMenu);
                  }}
                >
                  Software Development
                </Link>
              </p>
              <p>
                <Link
                  href="/service/AMLS"
                  onClick={() => {
                    console.log("clicled", showService);
                    setShowMenu?.(!showMenu);
                  }}
                >
                  Mobile Application Development
                </Link>
              </p>
              <p>
                <Link
                  href="/service/DACS"
                  onClick={() => {
                    console.log("clicled", showService);
                    setShowMenu?.(!showMenu);
                  }}
                >
                  IT Infrastructure
                </Link>
              </p>
              <p>
                <Link
                  href="/service/SD"
                  onClick={() => {
                    console.log("clicled", showService);
                    setShowMenu?.(!showMenu);
                  }}
                >
                  Telecom Services
                </Link>
              </p>
              <p>
                <Link
                  href="/service/PM"
                  onClick={() => {
                    console.log("clicled", showService);
                    setShowMenu?.(!showMenu);
                  }}
                >
                  Staffing Services
                </Link>
              </p>
            </div>

            <div
              className={` col-xl-3 text-white ${
                router.asPath === "/About"
                  ? aboutDropStyles.services
                  : styles.services
              } `}
            >
              {/* <h4>Modernize</h4> */}
              <p>
                <Link
                  href="/service/AB"
                  onClick={() => {
                    console.log("clicled", showService);
                    setShowMenu?.(!showMenu);
                  }}
                >
                  Data Warehousing / Business Intelligence
                </Link>
              </p>
              <p>
                <Link
                  href="/service/UUCS"
                  onClick={() => {
                    console.log("clicled", showService);
                    setShowMenu?.(!showMenu);
                  }}
                >
                  UX & UI Design and Consulting Services
                </Link>
              </p>

              <p>
                <Link
                  href="/service/LM"
                  onClick={() => {
                    console.log("clicled", showService);
                    setShowMenu?.(!showMenu);
                  }}
                >
                  QA / Testing
                </Link>
              </p>
            </div>
          </div>
          {/* <div
            className={` col-xl-3 text-white ${
              router.asPath === "/About"
                ? aboutDropStyles.services
                : styles.services
            } `}
          >
            <h4>Operate</h4>
            <p>
              <Link
                href="/service/MS"
                onClick={() => {
                  console.log("clicled", showService);
                  setShowMenu?.(!showMenu);
                }}
              >
                Managed Support
              </Link>
            </p>
            <p>
              <Link
                href="/service/SRE"
                onClick={() => {
                  console.log("clicled", showService);
                  setShowMenu?.(!showMenu);
                }}
              >
                SRE
              </Link>
            </p>
            <p>
              <Link
                href="/service/STS"
                onClick={() => {
                  console.log("clicled", showService);
                  setShowMenu?.(!showMenu);
                  setShowService?.(!showService);
                }}
              >
                Security Testing Services
              </Link>
            </p>
          </div>

          <div
            className={` col-xl-3 text-white ${
              router.asPath === "/About"
                ? aboutDropStyles.services
                : styles.services
            } `}
          >
            <h4>Build</h4>
            <p>
              <Link
                href="/service/ASD"
                onClick={() => {
                  console.log("clicled", showService);
                  setShowMenu?.(!showMenu);
                }}
              >
                Agile Software Development
              </Link>
            </p>
            <p>
              <Link
                href="/service/DPE"
                onClick={() => {
                  console.log("clicled", showService);
                  setShowMenu?.(!showMenu);
                }}
              >
                DevOps And Platform Engineering
              </Link>
            </p>
            <p>
              <Link
                href="/service/QPE"
                onClick={() => {
                  console.log("clicled", showService);
                  setShowMenu?.(!showMenu);
                }}
              >
                Quality And Performance Engineering
              </Link>
            </p>
          </div> */}
        </div>
      </div>
      <div
        onClick={() => {
          console.log("dfvsdfvsf", setShowService);

          setShowService?.(false);
        }}
        className={styles.serviceOverlay}
      />
    </>
  );
};

export default ServiceDropdown;
