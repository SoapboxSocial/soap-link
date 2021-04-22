module.exports = {
  images: {
    domains: ["cdn.soapbox.social"],
  },
  future: {
    webpack5: true,
  },
  async rewrites() {
    return [
      {
        source: "/og/:roomID",
        destination: "/api/thumb/:roomID",
      },
    ];
  },
};
