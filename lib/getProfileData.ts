import { GetServerSidePropsResult } from "next";
import { SOAPBOX_URL } from "../constants";
import { Member } from "../shared";

export default async function getProfileData(
  username: string
): Promise<GetServerSidePropsResult<{ profile: Member }>> {
  try {
    const ENDPOINT = `https://metadata.soapbox.social/users/${username}`;

    const res = await fetch(ENDPOINT);

    if (!res.ok) throw new Error(res.statusText);

    const profile: Member = await res.json();

    return {
      props: {
        profile,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      redirect: {
        destination: SOAPBOX_URL,
        permanent: false,
      },
    };
  }
}
