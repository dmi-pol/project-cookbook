const jwtConfig = {
  access: {
    type: "accessToken",
    expiresIn: `${1000 * 60 * 10}`,
  },
  refresh: {
    type: "refreshToken",
    expiresIn: `${1000 * 60 * 60 * 12}`,
  },
};

module.exports = jwtConfig;
