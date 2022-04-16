module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("HOST_DB"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "unisuncmsdevdb"),
      user: env("DATABASE_USERNAME", "urquhmotrdhwqg"),
      password: env(
        "DATABASE_PASSWORD",
        "efad4bb2169e67ddaa17c21aba5c76efc6a9daa6a06310949eba9a006bf258da"
      ),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
