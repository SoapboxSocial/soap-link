import { GetStaticProps } from "next";
import { SOAPBOX_URL } from "../constants";

function IndexPage() {
  return null;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: SOAPBOX_URL,
      permanent: false,
    },
  };
};

export default IndexPage;
