import express from "express";
import cors from "cors";
import env from "dotenv";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };
import routerCars from "./router/routerCar.js";
import routerSellers from "./router/routerSeller.js";

env.config()
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

// Routers
app.use("/cars", routerCars);
app.use("/sellers", routerSellers);
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
})