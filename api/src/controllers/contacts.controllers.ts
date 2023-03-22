import { Response, Request } from "express";
import listContactsService from "../services/contacts/listContacts.service";
import registerContactService from "../services/contacts/registerContact.service";
import { instanceToPlain } from "class-transformer";

export const registerContactController = async (
  req: Request,
  res: Response
) => {
  const clientId = req.params.clientId;
  const data = await registerContactService(req.body, clientId);
  return res.status(201).json(data);
};

export const listContactsController = async (req: Request, res: Response) => {
  const data = await listContactsService();

  return res.status(200).json(instanceToPlain(data));
};
