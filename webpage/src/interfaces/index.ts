export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;

  contacts: IContact[];
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  client: IClient;
  clientId: string;
}
