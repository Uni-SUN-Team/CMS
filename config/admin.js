module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
    options: {
      expiresIn: "1d",
    },
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
