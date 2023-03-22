import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";
import { IClient, IClientRequest } from "../../interfaces/clients";
import { clientResponseSerializer } from "../../serializers/client.serializers";

const registerClientService = async (
  ClientData: IClientRequest
): Promise<IClient> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findAlreadyExistingClientByEmail = await clientRepository.findOneBy({
    email: ClientData.email,
  });

  const findAlreadyExistingClientByPhone = await clientRepository.findOneBy({
    phone: ClientData.phone,
  });

  if (findAlreadyExistingClientByEmail || findAlreadyExistingClientByPhone) {
    throw new AppError("Client Already Exists", 409);
  }

  const createdClient = clientRepository.create(ClientData);
  await clientRepository.save(createdClient);

  const ClientResponse = await clientResponseSerializer.validate(
    createdClient,
    {
      stripUnknown: true,
    }
  );

  return ClientResponse;
};

export default registerClientService;
