import React from "react";

const isRandom = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try Saying : <br />
      Add {isRandom ? "Income " : "Expense "}
      for {isRandom ? "₹100 " : "₹50 "}
      in categosry {isRandom ? "Business " : "House "}
      for {isRandom ? "Monday " : "Wednesday "}...
    </div>
  );
};

export default InfoCard;
 