const env = process.env.NODE_ENV || "development";
if (env === "production") {
  require("./config_prod");
} else if (env === "development") {
  const config = require("./config_dev");

  Object.keys(config).forEach(key => {
    process.env[key] = config[key];
  });
}
