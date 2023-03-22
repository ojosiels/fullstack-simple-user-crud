import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContact, IContactRequest } from "../interfaces/contacts";

export const contactRequestSerializer: SchemaOf<IContactRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  });

export const contactResponseSerializer: SchemaOf<IContact> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
  });
