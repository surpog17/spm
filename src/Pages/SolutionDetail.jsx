import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import NoRecord from "../Components/NoRecord";
import Solutions from "./Solutions";

export default function SolutionDetail() {
  let location = useLocation();
  const { item } = location.state;
  console.log(item, "location");

  return (
    <>
      {item.project.length === 0 ? (
        <NoRecord
          message={`${item?.abbreviation} Doesn't have a Client`}
          name="tesfish"
          lastname="gelila"
        />
      ) : (
        <div className="container">
          {item.project.map((client) => (
            <div className="card">
              <div className="client-name-container">
                <img
                  alt="clientimage"
                  src={client?.logo}
                  className="client-image"
                />
                <div className="divider"></div>
                <div className="solution-name">{client?.client}</div>
              </div>
              <hr
                style={{
                  marignTop: "0px !important",
                  marignBottom: "0px !important",
                }}
              ></hr>
              <div className="client-name">{client?.client_name}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
