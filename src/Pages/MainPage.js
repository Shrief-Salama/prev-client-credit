import React, { useState } from "react";
import NavBar from "./NavBar";
import MainInfo from "../components/MainInfo";
import Card from "../components/Card";
import CreditLimitCalc from "../components/CreditLimitCalc";

const MainPage = () => {
  const [allInfo, setAllInfo] = useState({});
  const [userMainIncome, setUserMainIncome] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="container mx-auto px-4">
      <div>
        <NavBar />
      </div>
      <div className="my-5">
        <Card title={"بيانات العميل"} />
      </div>
      <div className="my-5">
        <MainInfo
          allInfo={allInfo}
          setAllInfo={setAllInfo}
          userMainIncome={userMainIncome}
          setUserMainIncome={setUserMainIncome}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      </div>
      {isSubmitted === true ? (
        <div className="my-5">
          <div className="my-5 ">
            <Card title={"الحد الائتماني"} />
          </div>
          <div className="my-5">
            <CreditLimitCalc
              allInfo={allInfo}
              userMainIncome={userMainIncome}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MainPage;
