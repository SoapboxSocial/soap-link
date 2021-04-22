module.exports = {
  future: {
    webpack5: true,
  },
  async rewrites() {
    return [
      {
        source: "/og/:id",
        destination: "/api/thumb/:id",
      },
    ];
  },
};
