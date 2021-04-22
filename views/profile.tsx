import { Member } from "../shared";

function ProfileView({ profile }: { profile: Member }) {
  return <div>{profile.display_name}</div>;
}

export default ProfileView;
