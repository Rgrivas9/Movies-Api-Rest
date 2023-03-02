const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./utils/connect");
const DirectorsRoutes = require("./api/routes/directors.routes");
const MoviesRoutes = require("./api/routes/movies.routes");
const AwardsRoutes = require("./api/routes/awards.routes");
const CrewsRoutes = require("./api/routes/crews.routes");
const DirectorLitesRoutes = require("./api/routes/directorLites.route");
const MovieLitesRoutes = require("./api/routes/movieLites.routes");

dotenv.config();
const PORT = process.env.PORT;
const server = express();
connect();

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));
server.use("/api/v1/directors", DirectorsRoutes);
server.use("/api/v1/movies", MoviesRoutes);
server.use("/api/v1/awards", AwardsRoutes);
server.use("/api/v1/crews", CrewsRoutes);
server.use("/api/v1/directorlites", DirectorLitesRoutes);
server.use("/api/v1/movielites", MovieLitesRoutes);
server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});
server.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

server.disable("x-powered-by");

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
