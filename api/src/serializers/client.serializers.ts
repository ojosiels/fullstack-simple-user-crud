import * as yup from "yup";
import { SchemaOf } from "yup";
import { IClient, IClientRequest } from "../interfaces/clients";

export const clientRequestSerializer: SchemaOf<IClientRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  });

export const clientResponseSerializer: SchemaOf<IClient> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
});
