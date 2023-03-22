export interface IContactRequest {
  name: string;
  email: string;
  phone: string | undefined;
}

export interface IContact {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  createdAt: Date | undefined;
}
