import { useEffect } from "react";
import { SOAPBOX_URL } from "../constants";

function IndexPage() {
  useEffect(() => {
    window.location.href = SOAPBOX_URL;
  }, []);

  return null;
}

export default IndexPage;
