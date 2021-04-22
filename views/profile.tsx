import Image from "next/image";
import { Fragment } from "react";
import Meta from "../components/meta";
import { APP_ID, APP_NAME } from "../constants";
import { Profile } from "../shared";

function ProfileView({ profile }: { profile: Profile }) {
  const APP_LINK = `soapbox://user/${profile.username}`;

  const IMAGE = `https://cdn.soapbox.social/images/${profile.image}`;

  return (
    <main className="py-20 px-5">
      <Meta
        appleItunesApp={`app-id=${APP_ID}, app-argument: ${APP_LINK}`}
        title={`Soapbox: Follow @${profile.username}`}
        description={`Follow @${profile.username} and get notified when they start a room on Soapbox.`}
        image={IMAGE}
        url={`https://soap.link/@${profile.username}`}
        extra={
          <Fragment>
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

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Image
            key={profile.username}
            alt={profile.username}
            src={IMAGE}
            className="rounded-full h-24 w-24 mx-auto"
            width={96}
            height={96}
            draggable="false"
            priority
            loading="eager"
          />

          <div>
            <h1 className="text-2xl leading-tight font-bold">
              {profile?.display_name ?? profile.username}
            </h1>

            <p className="text-md text-black opacity-50">@{profile.username}</p>
          </div>

          {profile.bio && <p>{profile.bio}</p>}
        </div>

        <div className="text-center">
          <a
            href={APP_LINK}
            className="inline-flex px-6 py-2 text-xl font-medium rounded-full bg-soapbox text-white"
          >
            Follow
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProfileView;
