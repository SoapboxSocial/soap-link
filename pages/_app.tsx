import type { AppProps } from "next/app";
import DownloadBanner from "../components/download-banner";
import Navigation from "../components/nav";
import useFathom from "../hooks/useFathom";
import "../styles/globals.css";

function SoapLinkApp({ Component, pageProps }: AppProps) {
  useFathom();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <DownloadBanner />

      <Component {...pageProps} />
    </div>
  );
}

export default SoapLinkApp;
