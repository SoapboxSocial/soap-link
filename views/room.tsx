import { Fragment, useMemo } from "react";
import Meta from "../components/meta";
import { APP_ID, APP_NAME } from "../constants";
import { Room } from "../shared";

function RoomView({ room }: { room: Room }) {
  const APP_LINK = `soapbox://room/${room.id}`;

  const memberNames = room.members.map((_member) => _member?.display_name);

  const roomMembers = useMemo(() => {
    if (memberNames.length >= 3)
      return `${memberNames[0]}, ${memberNames[1]} and ${memberNames[2]}`;

    if (memberNames.length === 2)
      return `${memberNames[0]} and ${memberNames[1]}`;

    return memberNames[0];
  }, [memberNames]);

  return (
    <main className="flex-1 w-full py-20 px-5">
      <Meta
        appleItunesApp={`app-id=${APP_ID}, app-argument: ${APP_LINK}`}
        title={`Join ${room?.name ? `"${room.name}" with` : ""} ${roomMembers}`}
        image={`https://soap.link/og/${room.id}`}
        twitterCardType="summary_large_image"
        url={`https://soap.link/${room.id}`}
        extra={
          <Fragment>
            <meta name="robots" content="noindex" />

            {/* Facebook */}
            <meta property="al:ios:app_store_id" content={APP_ID} />
            <meta property="al:ios:app_name" content={APP_NAME} />
            <meta property="al:ios:url" content={APP_LINK} />

            {/* Twitter */}
            <meta name="twitter:app:name:iphone" content={APP_NAME} />
            <meta name="twitter:app:id:iphone" content={APP_ID} />
            <meta name="twitter:app:url:iphone" content={APP_LINK} />
            <meta name="twitter:app:name:ipad" content={APP_NAME} />
            <meta name="twitter:app:id:ipad" content={APP_ID} />
            <meta name="twitter:app:url:ipad" content={APP_LINK} />
          </Fragment>
        }
      />

      <div className="w-full mx-auto" style={{ maxWidth: 428 }}>
        <a href={APP_LINK}>
          <article className="room bg-white text-black dark:bg-systemGrey6-dark dark:text-white rounded-room p-5">
            <h2
              className="text-title2 font-bold"
              style={{ marginBottom: "1.875rem" }}
            >
              {room?.name ?? "Join in"}
            </h2>

            <div className="flex -space-x-2">
              {room.members.slice(0, 6).map((member, i) => (
                <div
                  key={i}
                  className="flex rounded-full ring-4 ring-white dark:ring-systemGrey6-dark bg-white dark:bg-systemGrey6-dark"
                >
                  <img
                    alt={member.display_name}
                    className="h-10 w-10 object-cover object-center rounded-full"
                    draggable="false"
                    src={member.image}
                  />
                </div>
              ))}

              {room.members.length > 6 && (
                <div className="flex room-head bg-white overflow-visible">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full">
                    <p className="text-black text-2xl leading-none font-black">
                      <span className="text-sm font-bold align-top">+</span>
                      {room.members.length - 6}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>
        </a>
      </div>
    </main>
  );
}

export default RoomView;
