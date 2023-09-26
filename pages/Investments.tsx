import styles from "../styles/Home.module.css";

type Props = {};

const Investments = (props: Props) => {
  return (
    <>
      <div className={`${styles.baseWrapper} ${styles.investmentContainer}`}>
        <div className="container-fluid container-lg">
          <div className="row gx-3 mb-5">
            <div className="col-12">
              <h2>Our Strategic Investments</h2>
            </div>
            <div className="col-12 col-xl-6">
              <p className={styles.description}>
                Our love for technological innovation lies not just in
                developing our own software products and providing services to
                our clients, but also in making strategic investments and being
                a technological partner.
              </p>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-xl-4">
              <div className={styles.tilePrimary}>
                <h3>GYTWorkz</h3>
                <p>
                  One of the world&apos;s leading producers of software for the
                  management of business processes & developing solutions.
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className={styles.tilePrimary}>
                <h3>Engage</h3>
                <p>
                  One of the world&apos;s leading producers of software for the
                  management of business processes & developing solutions.
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className={styles.tilePrimary}>
                <h3>IoT Research Labs</h3>
                <p>
                  One of the world&apos;s leading producers of software for the
                  management of business processes & developing solutions.
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className={styles.tilePrimary}>
                <h3>Fiifi</h3>
                <p>
                  One of the world&apos;s leading producers of software for the
                  management of business processes & developing solutions.
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className={styles.tilePrimary}>
                <h3>Intro.vc</h3>
                <p>
                  One of the world&apos;s leading producers of software for the
                  management of business processes & developing solutions.
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className={styles.tilePrimary}>
                <h3>Sharara</h3>
                <p>
                  One of the world&apos;s leading producers of software for the
                  management of business processes & developing solutions.
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className={styles.tilePrimary}>
                <h3>ReFrame</h3>
                <p>
                  One of the world&apos;s leading producers of software for the
                  management of business processes & developing solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investments;
