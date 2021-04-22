import { GetServerSideProps } from "next";
import getProfileData from "../lib/getProfileData";
import getRoomData from "../lib/getRoomData";
import { Member, Room } from "../shared";
import ProfileView from "../views/profile";
import RoomView from "../views/room";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const path = params.path as string;

  if (path.startsWith("@")) return await getProfileData(path);

  return await getRoomData(path);
};

type Props = {
  profile?: Member;
  room?: Room;
};

function Page({ profile, room }: Props) {
  if (profile) return <ProfileView profile={profile} />;

  if (room) return <RoomView room={room} />;

  return null;
}

export default Page;
