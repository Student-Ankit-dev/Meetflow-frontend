let IS_PROD = true;

const server = IS_PROD
    ? "https://meetflow-backend-issc.onrender.com"
    : "http://localhost:8000";

export default server;