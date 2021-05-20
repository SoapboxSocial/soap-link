import * as Fathom from "fathom-client";
import { useEffect } from "react";
import { FATHOM_ID } from "../constants";

export default function useFathom() {
  useEffect(() => {
    Fathom.load(FATHOM_ID, {
      includedDomains: ["soap.link"],
    });

    Fathom.trackPageview();
  }, []);
}
