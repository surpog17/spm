import React from "react";
import NoRecordImg from "../assets/SVG/NoRecord.svg";

export default function NoRecord(props) {
  return (
    <div
      style={{ display: "grid", justifyContent: "center", marginTop: "100px" }}
    >
      <div style={{ display: "grid", justifyContent: "center" }}>
        <img
          src={NoRecordImg}
          alt="norecord"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <p className="text-[#0F3A62]">{props?.message}</p>
    </div>
  );
}
