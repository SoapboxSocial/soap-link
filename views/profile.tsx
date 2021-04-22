import { Member } from "../shared";

function ProfileView({ profile }: { profile: Member }) {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(profile, null, 2)}</code>
      </pre>
    </div>
  );
}

export default ProfileView;
