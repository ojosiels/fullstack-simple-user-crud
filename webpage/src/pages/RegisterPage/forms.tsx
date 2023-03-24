import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
} from "@chakra-ui/react";

import { GenericFormPageStyled } from "./style";

import api from "../../service/api";

import { IClient, IContact } from "../../interfaces";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Toasts
const toastSuccess = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 1500,
    closeOnClick: true,
    theme: "colored",
  });
};

const toastError = (message: string) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    closeOnClick: true,
    theme: "colored",
  });
};

//Schemas
const clientSchema = yup.object({
  name: yup.string().required("Name is necessary"),
  email: yup.string().required("Email is necessary"),
  phone: yup.string().required("Phone necessary"),
});

const contactSchema = yup.object({
  name: yup.string().required("Name is necessary"),
  email: yup.string().required("Email is necessary"),
  phone: yup.string().required("Phone necessary"),
  clientId: yup.string().required("Select a client"),
});

//Forms
export const RegisterClient = () => {
  const clientRegister = async (data: IClient) => {
    try {
      await api.post("/clients", data);
      toastSuccess("Client Registered");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastError(error.response?.data.message);
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClient>({ resolver: yupResolver(clientSchema) });

  return (
    <GenericFormPageStyled>
      <form onSubmit={handleSubmit(clientRegister)}>
        <FormControl>
          <Heading size={"md"}>Register Client</Heading>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            id="name"
            placeholder="Type your name"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Type your email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            type="phone"
            id="phone"
            placeholder="Type your phone"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>

          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </FormControl>
      </form>
    </GenericFormPageStyled>
  );
};

export const RegisterContact = () => {
  const [clientsInfo, setClientsInfo] = useState<IClient[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({ resolver: yupResolver(contactSchema) });

  const contactRegister = async (data: IContact) => {
    try {
      await api.post(`/contacts/${data.clientId}`, data);
      toastSuccess("Contact Registered");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastError(error.response?.data.message);
      }
    }
  };

  useEffect(() => {
    const loadClients = async () => {
      try {
        const { data } = await api.get("/clients");
        setClientsInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadClients();
  }, []);

  return (
    <GenericFormPageStyled>
      <form onSubmit={handleSubmit(contactRegister)}>
        <FormControl>
          <Heading size={"md"}>Register Contact</Heading>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            id="name"
            placeholder="Type your name"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Type your email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            type="phone"
            id="phone"
            placeholder="Type your phone"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>

          <FormLabel htmlFor="clientId">Select your client</FormLabel>
          <Select id="clientId" {...register("clientId")}>
            {clientsInfo.map((client, id) => (
              <option value={client.id}>{client.name}</option>
            ))}
          </Select>
          <p>{errors.clientId?.message}</p>

          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </FormControl>
      </form>
    </GenericFormPageStyled>
  );
};
