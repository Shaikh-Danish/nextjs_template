import env from "env-var";

export const config = {
  // ✅ Database Configuration
  MONGODB_URI: env.get("MONGODB_URI").required().asString(),
  DB_NAME: env.get("DB_NAME").required().asString(),

  // ✅ Other Configs
  NODE_ENV: env.get("NODE_ENV").default("development").asString(),
};
