import Image from "next/image";
import cardStyles from "../../styles/Card.module.css";

const LongCard = (props: any) => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.cardHead}>
        <Image
          className="styledLogo"
          src={props.icon}
          alt="Logo"
          width={100}
          height={100}
        />
        <h3 className="styledHeading">{props.heading}</h3>
        <style jsx>
          {`
            .styledHeading {
              border-bottom: 2px solid ${props.color};
            }
            .styledLogo {
              fill: ${props.color};
            }
          `}
        </style>
      </div>
      <div className={cardStyles.cardFoot}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default LongCard;
