module.exports = {
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
