import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listContactsService = async (): Promise<Contact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find({
    relations: { client: true },
  });

  return contacts;
};

export default listContactsService;
