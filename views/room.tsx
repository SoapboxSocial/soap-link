import { Room } from "../shared";

function RoomView({ room }: { room: Room }) {
  return <div>{room.name}</div>;
}

export default RoomView;
