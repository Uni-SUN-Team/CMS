module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`,
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "unisundevdb"),
      user: env("DATABASE_USERNAME", "urquhmotrdhwqg"),
      password: env(
        "DATABASE_PASSWORD",
        "efad4bb2169e67ddaa17c21aba5c76efc6a9daa6a06310949eba9a006bf258da"
      ),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
