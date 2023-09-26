import React from "react";
import styles from "../styles/Categories.module.css";
import Link from "next/link";

interface Category {
  heading: string;
  // Add any other properties here if needed
}
interface CategoriesProps {
  options?: Category;
  // Make sure options is an array of Category objects or optional
}

const Categories: React.FC<CategoriesProps> = (props: any) => {
  const serviceId = props?.options?.id;

  return (
    <>
      <div className={`${styles.categoryContainer} `}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-12">
              <div className={styles.category}>
                <h1 className="fw-bold"></h1>
                {/* <Link href={"/"}>
                  <div className={styles.financial}>
                    <h4>Outsourced Product Development </h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="blue"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </div>
                </Link> */}
                {props.options?.services?.map((category: any) => (
                  <>
                    <Link
                      href={`/service/${serviceId}/${category.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className={styles.financial}>
                        <h4>{category.heading}</h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="blue"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
