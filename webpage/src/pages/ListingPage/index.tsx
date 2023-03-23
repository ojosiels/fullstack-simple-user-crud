import React, { useEffect, useState } from "react";
import api from "../../service/api";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { StyledList } from "./style";

interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  contacts: IContact[];
}

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  client: IClient | null;
}

export default () => {
  const [clientsInfo, setClientsInfo] = useState<IClient[]>([]);

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
    <>
      <StyledList>
        {clientsInfo.map((client, id) => {
          return (
            <li>
              <Card direction={{ base: "column", sm: "row" }}>
                <Stack>
                  <CardHeader>
                    <Heading size="md">{client.name}</Heading>
                    <Text py="2">Email: {client.email}</Text>
                    <Text py="2">Phone: {client.phone}</Text>
                  </CardHeader>
                  <CardBody>
                    <Heading size="sm">Client's contacts</Heading>
                    <Accordion allowToggle>
                      {client.contacts.map((contact, id) => (
                        <>
                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Box as="span" flex="1" textAlign="left">
                                  {contact.name}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Text>Email: {contact.email}</Text>
                              <Text>Phone: {contact.phone}</Text>
                            </AccordionPanel>
                          </AccordionItem>
                        </>
                      ))}
                    </Accordion>
                  </CardBody>
                </Stack>
              </Card>
            </li>
          );
        })}
      </StyledList>
    </>
  );
};
