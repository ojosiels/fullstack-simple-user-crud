import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";
import { IContact, IContactRequest } from "../../interfaces/contacts";
import { contactResponseSerializer } from "../../serializers/contact.serializers";

const registerContactService = async (
  contactData: IContactRequest,
  clientId: string
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findAlreadyExistingContact = await contactRepository.findOneBy({
    email: contactData.email,
  });

  if (findAlreadyExistingContact) {
    throw new AppError("Contact Already Exists", 409);
  }
  const clientRepository = AppDataSource.getRepository(Client);
  const findClient = await clientRepository.findOneBy({
    id: clientId,
  });

  if (findAlreadyExistingContact) {
    throw new AppError("Contact Already Exists", 409);
  }

  if (!findClient) {
    throw new AppError("Client Not Found", 404);
  }

  const createdContact = contactRepository.create({
    client: findClient,
    ...contactData,
  });
  await contactRepository.save(createdContact);

  const ContactResponse = await contactResponseSerializer.validate(
    createdContact,
    {
      stripUnknown: true,
    }
  );

  return ContactResponse;
};

export default registerContactService;
