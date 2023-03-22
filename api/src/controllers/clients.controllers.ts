import { Response, Request } from "express";
import listClientsService from "../services/clients/listClients.service";
import registerClientService from "../services/clients/registerClient.service";
import { instanceToPlain } from "class-transformer";

export const registerClientController = async (req: Request, res: Response) => {
  const data = await registerClientService(req.body);
  return res.status(201).json(data);
};

export const listClientsController = async (req: Request, res: Response) => {
  const data = await listClientsService();

  return res.status(200).json(instanceToPlain(data));
};
