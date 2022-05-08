module.exports = ({ env }) => ({
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
  meilisearch: {
    config: {
      // Your meili host
      host: env("MEILISEARCH_HOST"),
      // Your master key or private key
      apiKey: env("MEILISEARCH_SECRET_KEY"),
    },
  },
});
