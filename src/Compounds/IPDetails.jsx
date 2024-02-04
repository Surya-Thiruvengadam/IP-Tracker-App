import React, { useContext } from "react";
import { Dataprovider } from "../App";

const IPDetails = () => {
  let { location, error, loading } = useContext(Dataprovider);
  return (
    <div className="info-body">
      {loading ? (
        <p className="loading-msg">Loading data...</p>
      ) : error.iserr ? (
        <p className="loading-msg">
          {error.errmsg != undefined ? error.errmsg : "Something Went Wrong"}
        </p>
      ) : (
        <>
          <div className="info-main-items">
            <h1>IP Address</h1>
            <p>{location.ip}</p>
          </div>
          <hr />
          <div className="info-main-items">
            <h1> Location</h1>
            <p>{`${location.city},${location.region},${location.country_name}`}</p>
          </div>
          <hr />
          <div className="info-main-items">
            <h1>Timezone</h1>
            <p>{`UTC ${location.utc_offset}`}</p>
          </div>
          <hr />
          <div className="info-main-items">
            <h1> ISP</h1>
            <p>{location.org == null ? location.timezone : location.org}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default IPDetails;
