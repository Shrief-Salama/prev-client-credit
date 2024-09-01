import React, { useEffect, useState } from "react";

import { FaArrowAltCircleLeft } from "react-icons/fa";

const CreditLimitCalc = ({ allInfo, userMainIncome }) => {
  const [creditLimit, setCreditLimit] = useState(0);

  useEffect(() => {
    const creditLimitCounter = () => {
      if (allInfo.userClass === "A") {
        setCreditLimit(
          parseInt(
            (parseInt(userMainIncome) +
              parseInt(allInfo.userSubIncome) -
              parseInt(allInfo.userMonthlyCharges)) *
              0.23
          )
        );
      } else {
        setCreditLimit(
          parseInt(
            (parseInt(userMainIncome) +
              parseInt(allInfo.userSubIncome) -
              parseInt(allInfo.userMonthlyCharges)) *
              0.28
          )
        );
      }
    };
    creditLimitCounter();
  }, [
    setCreditLimit,
    allInfo,
    allInfo.userClass,
    userMainIncome,
    allInfo.userSubIncome,
    allInfo.userMonthlyCharges,
  ]);

  return (
    <div>
      <div className="bg-violet-900 flex justify-center rounded-lg shadow-md shadow-black">
        <div className="p-1.5 w-full m-2.5 mb-2.5 bg-violet-950 text-center rounded-lg shadow-xl border-2 border-dashed">
          <div dir="rtl" className="p-1.5 bg-gray-50 r">
            <div className="flex justify-center items-center my-3">
              <div className="font-bold border-2 rounded border-dotted  bg-violet-900 text-white p-1.5 shadow-md shadow-black">
                <p>الحد الائتماني للعميل</p>
              </div>
              <div className="mx-3.5 p-1.5 animate-pulse">
                <FaArrowAltCircleLeft className="text-3xl text-violet-900 " />
              </div>
              <div className="font-bold border-2 rounded border-dotted  bg-violet-900 text-white p-1.5 shadow-md shadow-black">
                <p>{creditLimit} جنيها ًمصريا ً</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditLimitCalc;
