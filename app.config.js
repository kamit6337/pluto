// app.config.js
export default ({ config }) => {
  return {
    ...config,
    extra: {
      SERVER_URL:
        process.env.SERVER_URL || "https://vwflex-server.onrender.com",
    },
  };
};
