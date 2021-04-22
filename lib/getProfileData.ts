import { GetServerSidePropsResult } from "next";
import { SOAPBOX_URL } from "../constants";
import { Member } from "../shared";

export default async function getProfileData(
  username: string
): Promise<GetServerSidePropsResult<{ profile: Member }>> {
  const ENDPOINT = `https://metadata.soapbox.social/users/${username}`;

  const res = await fetch(ENDPOINT);

  if (!res.ok) {
    return {
      redirect: {
        destination: SOAPBOX_URL,
        permanent: false,
      },
    };
  }

  const profile: Member = await res.json();

  return {
    props: {
      profile,
    },
  };
}
