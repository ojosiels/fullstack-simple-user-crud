import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";

const listClientsService = async (): Promise<Client[]> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find({
    relations: { contacts: true },
  });

  return clients;
};

export default listClientsService;
