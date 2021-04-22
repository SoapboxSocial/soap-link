import { APP_STORE_URL } from "../constants";

function DownloadBanner() {
  return (
    <a href={APP_STORE_URL} className="bg-soapbox block py-3">
      <p className="text-body text-center text-white">
        Don't have <strong className="font-bold">Soapbox</strong> yet? Download
        it now!
      </p>
    </a>
  );
}

export default DownloadBanner;
