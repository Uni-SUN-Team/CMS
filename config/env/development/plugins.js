module.exports = {
  upload: {
    config: {
      provider: "strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "unison-dev",
        publicFiles: true,
        uniform: true,
        serviceAccount: {
          type: "service_account",
          project_id: "unisun-345117",
          private_key_id: "5d067a61d4ca42aea508b4eef58d26ecd685c360",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChTjlxTSAyewmB\n6pNQ+BiB6+qTAEy543xaYlw/AKSik4a8eNz5OFqKRLm0IWerNknPX1haNRMv55S4\n7rGyNDHHSHYmgRigIVKfNl933tRAaI7ds/d91gOdIbI06+GFAAZZJauGxiAU/KFB\nbsBRglp+H/Kwv2/fk/gDNv1dEq6ind+STWuiTssU9E0bzpJzfgfBeiGJtsDpohUd\n6d/3dlH6hKM9Eocto+pkxKrnFC51G1HFYZO3v+tIgP0BPSBsxcZex12WK1KMh39X\n0eA9Rcor4FoBlv1eXaBm5r38ePPYCOzhEGFmcmqmug31ZSYpbjVZbBz25ajbMNjB\nsZPA/X/bAgMBAAECggEAGNcvkGu0rCF3dtrVgfAa8hMPJkEzD6NhOJgSJZ+nOuQm\nKSshuH19r/JieMN2MA8lsbo4pHes80EiDZKwqcVQ7yQREd/ql2paS2t3q0GVBTA0\n5B59XBMTrmSMiYrTyYQV9i+PaStksGaxPJ7eHg9JeUfZO2/XviIO3QvgW69vVlpj\n+N5sNyXjNtteQI6M4nzIQdPZs4gOidGhI2nT8tP6Fs9x/NdWRnrg/tgXg2dn9Q3N\nha2x7HXdWdQyLLT+RPRG4gqk5qaRQFCcA40rURnxUWVVIJaU7k+xMdksrVAEfuw3\n6mSrv/SukRxLD1EgeocOgpIc3PEwhCUMaiJ3NIuloQKBgQDUF89tI8MIAZ/QSuVx\nT2wwifZtqwqtO/w88x83dfFUk8ahlfd9jJROMRkHycdZeA+yfTPfKrF9C5QdINMp\ngYFky+MYw5mX3IPJTDtuDpFmWcufqwbUVHZwIifkqY+fkuBIyCRrX4uEKILGjRFp\nj28gYsm9JLOqrNwtKz+99cfjIQKBgQDCsttPqWXrnahxtTq3+aESnqj2r2jyFcS3\nE7KDjqxfJvXKP12eZtSzIGC8odLT/M993RFYHZs2lNpoj3TCElQf3pGNx07OIhLL\nkE6tlM5t9UwGGAT+IsiMChdmFt3eb9SfUCpRdAaHyLRz5UWtQ6bcNIXNSLAzCK/Y\nNqFI/YZ/ewKBgHYOyud1gJp0TQEkr5LjItXh9coV61uCiGVk73tvq2Xo3CgV0i2Q\nkvzzV3t+Vfj3W8V+6+DNYv638zpDi0cPT3dMBp1CQ7zEgpcKWAprEYRnd3DpQmPu\nn/7LBGnD+K5ak33v6lXaWU63PhRHcenQbYsZcjJWu6vFjMmXyWNz7FABAoGAKDN+\nDSjRHqFjEnd1NF+a3plcEfOOG85a2+J5Tai79rm4rpX+4qIg8QuSbeCMA7GDtl1b\nI3KZhd+eaVCVryzRqfLu4vNwVie68cVOOZEsPpATrn5vKXpNJn0+75lxHmjA4lRP\nKJpobskGWZfRl0EMxxMhPY3ws9jrVh2Rl9yhVNkCgYBnFQEBHe45ITzYSdeyJaAQ\nSsMGIVvHOA5bMdvCyI7NvcIFDhC8d1atU7Nv6V5NSPRI5QFjARWJjTn+nG6QdWpc\nKaMiaMaa5ageK4W/hLXrJ7dh6EaIawvJv2YxJ2cRX4blMuB7VNoJg2h8l0L5E2Q/\nw8uAyW+aLkjjCVdtjhupsQ==\n-----END PRIVATE KEY-----\n",
          client_email: "unisun-345117@appspot.gserviceaccount.com",
          client_id: "115698079576380811863",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/unisun-345117%40appspot.gserviceaccount.com",
        },
        baseUrl: "https://storage.googleapis.com/unison-dev",
        basePath: "",
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
};
