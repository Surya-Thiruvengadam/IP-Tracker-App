import axios from "axios";

const fetchIpAddress = async (url, success, errcal,isloading) => {
    try {
      isloading(true);
      const response = await axios.get(url);
      if (response.data.error === true) {
        throw response.data;
      }
      success(response.data);
      errcal({
        isvalid: false,
        errmg: "",
      });
    } catch (error) {
      errcal({
        iserr: true,
        errmsg: error.reason,
      });
    } finally {
      isloading(false);
    }
  };

  const onclickHandler = ({e,getinput,url,setinput, setlocation, seterrState,isloading}) => {
    e.preventDefault();
    try {
      if (getinput.value === "") {
        throw new Error("empty input");
      }
      const ipAddressRegex =
        /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

      const domainNameRegex =
        /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,})+$/;

      const isIpAddressValid = ipAddressRegex.test(getinput.value);
      const isDomainNameValid = domainNameRegex.test(getinput.value);
      if (!isIpAddressValid && !isDomainNameValid) {
        throw new Error("Invalid Input");
      } else if (isIpAddressValid) {
        url = `${url}/${getinput.value}/json`;
        fetchIpAddress(url, setlocation, seterrState,isloading);
      }
    } catch (error) {
      console.log(error.message);
      setinput((pre) => {
        return {
          ...pre,
          isvalid: false,
          errmg: error.message,
        };
      });
    }
  };

  export {fetchIpAddress,onclickHandler}