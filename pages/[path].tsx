import { GetServerSideProps } from "next";
import { SOAPBOX_URL } from "../constants";
import getProfileData from "../lib/getProfileData";
import getRoomData from "../lib/getRoomData";
import { Member, Room } from "../shared";
import ProfileView from "../views/profile";
import RoomView from "../views/room";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const path = params.path as string;

  switch (true) {
    case typeof path === "string" && path.startsWith("@"):
      return await getProfileData(path.substring(1));

    case typeof path === "string":
      return await getRoomData(path);

    default:
      return {
        redirect: {
          destination: SOAPBOX_URL,
          permanent: false,
        },
      };
  }
};

type Props = {
  profile?: Member;
  room?: Room;
};

function LinkPage({ profile, room }: Props) {
  if (profile) return <ProfileView profile={profile} />;

  if (room) return <RoomView room={room} />;

  return null;
}

export default LinkPage;
