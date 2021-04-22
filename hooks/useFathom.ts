import * as Fathom from "fathom-client";
import { useEffect } from "react";
import { FATHOM_ID } from "../constants";

export default function useFathom() {
  useEffect(() => {
    Fathom.load(FATHOM_ID, {
      includedDomains: ["soap.link"],
    });

    const url = window.location.href.startsWith("@")
      ? window.location.href
      : window.location.origin + "/[roomId]";

    Fathom.trackPageview({
      url: url,
      referrer: document.referrer,
    });
  }, []);
}
