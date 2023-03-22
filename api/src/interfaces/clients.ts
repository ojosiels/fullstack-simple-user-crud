export interface IClientRequest {
  name: string;
  email: string;
  phone: string | undefined;
}

export interface IClient {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  createdAt: Date | undefined;
}
