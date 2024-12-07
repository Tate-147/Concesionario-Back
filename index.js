import express from "express";
import env from "dotenv";
import cors from "cors";
import { logger } from "./config/winston.js";
import routerUsers from "./router/routerUser.js";
import routerCars from "./router/routerCar.js";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };

// Env
env.config()
const PORT = process.env.PORT;

// Express
const app = express();

// Json
app.use(express.json());

// Cors
app.use(cors(
  {
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization","Token"],
  }
));

// Logs
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routers
app.use("/users", routerUsers);
app.use("/cars", routerCars);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Database
mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Bad Request
app.use((req, res) => {
    res.status(404).json({error: "Ruta no encontrada"});
});

// Server
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});