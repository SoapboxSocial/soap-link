import { GetServerSideProps } from "next";
import { SOAPBOX_URL } from "../constants";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: SOAPBOX_URL,
      permanent: false,
    },
  };
};

function IndexPage() {
  return null;
}

export default IndexPage;
