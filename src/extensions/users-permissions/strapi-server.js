module.exports = (plugin) => {
  plugin.controllers.auth.refreshToken = async (ctx) => {
    // comment out next lines, and refresh the request body's token like {token: 'xxx'}
    const { token } = ctx.request.body;
    const payload = await strapi.plugins[
      "users-permissions"
    ].services.jwt.verify(token);
    const newJwt = strapi.plugins["users-permissions"].services.jwt.issue({
      id: payload.id,
    });
    return { jwt: newJwt };
  };

  plugin.routes["content-api"].routes.push({
    method: "POST",
    path: "/auth/refreshToken",
    handler: "auth.refreshToken",
    config: {
      prefix: "",
    },
  });

  return plugin;
};
