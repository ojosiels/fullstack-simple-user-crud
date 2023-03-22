import { Router } from "express";

import * as contactControllers from "../controllers/contacts.controllers";

import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";

import { contactRequestSerializer } from "../serializers/contact.serializers";

const contactsRoutes = Router();

contactsRoutes.get("", contactControllers.listContactsController);

contactsRoutes.post(
  "/:clientId",
  validateSchemaMiddleware(contactRequestSerializer),
  contactControllers.registerContactController
);

export default contactsRoutes;
