import { GetServerSidePropsResult } from "next";
import { SOAPBOX_URL } from "../constants";
import { Room } from "../shared";

export default async function getRoomData(
  id: string
): Promise<GetServerSidePropsResult<{ room: Room }>> {
  const ENDPOINT = `https://metadata.soapbox.social/rooms/${id}`;

  const res = await fetch(ENDPOINT);

  if (!res.ok) {
    return {
      redirect: {
        destination: SOAPBOX_URL,
        permanent: false,
      },
    };
  }

  const data: Room = await res.json();

  const room: Room = {
    ...data,
    members: data.members
      .sort((a, b) => a.id - b.id)
      .map((member) => ({
        ...member,
        image: `https://cdn.soapbox.social/images/${member.image}`,
      })),
  };

  return {
    props: {
      room,
    },
  };
}
