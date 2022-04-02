module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '025dea5a3381a308d880b4c02e6ebf90'),
  },
});
