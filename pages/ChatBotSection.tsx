import React from "react";
import style from "../styles/ChatBotSection.module.css";

const ChatBotSection = () => {
  return (
    <div className={style.ChatBotSection}>
      <div className="container-fluid container-lg">
        <div className={`${style.row} row`}>
          <div className="col-12">
            <h1 className="text-black">
              Let’s Talk About Your Project! Start A Conversation Today.
            </h1>
          </div>
          {/* <div className={`${style.getInTouchBtn} col-xl-4`}>
            <Link href={"/Contact"}>
              {" "}
              <button className={style.btn}>GET IN TOUCH</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default ChatBotSection;
