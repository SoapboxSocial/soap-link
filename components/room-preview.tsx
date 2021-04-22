type Props = {
  roomName?: string;
  buttonLink: string;
  roomMembers: { display_name: string; image: string }[];
};

export default function RoomPreview({
  roomName,
  buttonLink,
  roomMembers,
}: Props) {
  return (
    <a href={buttonLink}>
      <article className="room bg-white rounded-room p-5">
        <h2
          className="text-title2 font-bold"
          style={{ marginBottom: "1.875rem" }}
        >
          {roomName ?? "Join in"}
        </h2>

        <div className="flex -space-x-2">
          {roomMembers.slice(0, 6).map((member, i) => (
            <div key={i} className="flex room-head overflow-visible">
              <img
                alt={member.display_name}
                className="h-10 w-10 room-head object-cover object-center rounded-full"
                draggable="false"
                src={member.image}
              />
            </div>
          ))}

          {roomMembers.length > 6 && (
            <div className="flex room-head bg-white overflow-visible">
              <div className="flex items-center justify-center w-10 h-10 rounded-full">
                <p className="text-black text-2xl leading-none font-black">
                  <span className="text-sm font-bold align-top">+</span>
                  {roomMembers.length - 6}
                </p>
              </div>
            </div>
          )}
        </div>
      </article>
    </a>
  );
}
