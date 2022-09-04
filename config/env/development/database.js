module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "ec2-3-225-110-188.compute-1.amazonaws.com",
      port: 5432,
      database: "d8q0obi77pcf62",
      user: "eubrxqshtdljfn",
      password:
        "288cc9f05bd8a89f9f8b3012772f78ce1ba7a36ade2deb27227f874cc9a8e7a9",
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
