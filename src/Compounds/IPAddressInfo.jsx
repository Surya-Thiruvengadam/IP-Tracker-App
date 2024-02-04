import React from "react";
import GetSearchAddress from "./GetSearchAddress";
import IPDetails from "./IPDetails";

const IPAddressInfo = () => {
  return (
    <main className="info-box">
      <div>
        <h1>IP Address Tracker</h1>
        <GetSearchAddress />
        <IPDetails />
      </div>
    </main>
  );
};

export default IPAddressInfo;
