import { Router } from "express";

import * as clientControllers from "../controllers/clients.controllers";

import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";

import { clientRequestSerializer } from "../serializers/client.serializers";

const clientsRoutes = Router();

clientsRoutes.get("", clientControllers.listClientsController);

clientsRoutes.post(
  "",
  validateSchemaMiddleware(clientRequestSerializer),
  clientControllers.registerClientController
);

export default clientsRoutes;
