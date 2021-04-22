import { trackGoal } from "fathom-client";
import { MouseEvent } from "react";
import { APP_STORE_URL, FATHOM_EVENTS } from "../constants";

function DownloadBanner() {
  const handleOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    trackGoal(FATHOM_EVENTS["Clicked Download Banner"], 0);

    window.location.href = e.currentTarget.href;
  };

  return (
    <a
      className="bg-soapbox block py-3"
      href={APP_STORE_URL}
      onClick={handleOnClick}
    >
      <p className="text-body text-center text-white">
        Don't have <strong className="font-bold">Soapbox</strong> yet? Download
        it now!
      </p>
    </a>
  );
}

export default DownloadBanner;
