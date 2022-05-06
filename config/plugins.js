module.exports = {
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 10 * 1024 * 1024 * 1024,
      },
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
};
