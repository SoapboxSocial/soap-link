import { Room } from "../shared";

function RoomView({ room }: { room: Room }) {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(room, null, 2)}</code>
      </pre>
    </div>
  );
}

export default RoomView;
