import React, { useContext, useEffect, useState } from "react";
import iconarrow from "../assets/images/icon-arrow.svg";
import { Dataprovider } from "../App";
import { fetchIpAddress, onclickHandler } from "../Functions/Application";

const GetSearchAddress = () => {
  const { setlocation, seterrState, isloading } = useContext(Dataprovider);

  const [getinput, setinput] = useState({
    value: "",
    isvalid: true,
    errmg: "",
  });

  let url = "https://ipapi.co/";

  const errstyle = {
    color:'red'
  };

  const inputHandler = (e) => {
    setinput((pre) => {
      return {
        ...pre,
        value: e.target.value,
        isvalid: true,
      };
    });
  };

  useEffect(() => {
    fetchIpAddress(`${url}/json`, setlocation, seterrState, isloading);
  }, []);

  return (
    <div>
      <form>
        <div className="input-parent">
          {!getinput.isvalid && <span className="errmsg">{getinput.errmg}</span>}
          <input
            type="text"
            id="ipaddress"
            name="ipaddress"
            placeholder="Search for any IP address or domain"
            onChange={(e) => inputHandler(e)}
            value={getinput.value}
            style={!getinput.isvalid ? { errstyle } : {}}
          />
          <div className="arrow-icon">
            <input
              type="image"
              src={iconarrow}
              onClick={(e) =>
                onclickHandler({
                  e,
                  getinput,
                  url,
                  setinput,
                  setlocation,
                  seterrState,
                  isloading,
                })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetSearchAddress;
