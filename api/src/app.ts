import "express-async-errors";
import "reflect-metadata";
import express from "express";
import cors from "cors";

import errorHandler from "./errors";
import clientsRoutes from "./routers/clients.routes";
import contactsRoutes from "./routers/contacts.routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/clients", clientsRoutes);
app.use("/contacts", contactsRoutes);

app.use(errorHandler);

export default app;
