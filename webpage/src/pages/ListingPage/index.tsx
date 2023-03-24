import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { StyledList } from "./style";

import GenericPageStyle from "../../styles/GenericPageStyle";

import api from "../../service/api";
import { Link } from "react-router-dom";

import { IClient, IContact } from "../../interfaces";

export default () => {
  const [clientsInfo, setClientsInfo] = useState<IClient[]>([]);
  const [contactsInfo, setContactsInfo] = useState<IContact[]>([]);

  useEffect(() => {
    const loadClients = async () => {
      try {
        const { data } = await api.get("/clients");
        setClientsInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    const loadContacts = async () => {
      try {
        const { data } = await api.get("/contacts");
        setContactsInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadClients();
    loadContacts();
  }, []);

  return (
    <GenericPageStyle>
      <Tabs variant="unstyled">
        <TabList className="tabNavBar">
          <div>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Clients</Tab>
            <Tab _selected={{ color: "white", bg: "green.500" }}>Contacts</Tab>
          </div>
          <Link to={"/register"} className="linkItem">
            Registrar
          </Link>
        </TabList>
        <TabPanels>
          <TabPanel>
            <StyledList>
              {clientsInfo.map((client, id) => {
                return (
                  <li key={id}>
                    <Card direction={{ base: "column", sm: "row" }}>
                      <Stack>
                        <CardHeader>
                          <Heading size="md">{client.name}</Heading>
                          <Text py="2">Email: {client.email}</Text>
                          <Text py="2">Phone: {client.phone}</Text>
                        </CardHeader>
                        <CardBody>
                          <Heading size="sm">Contacts</Heading>
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
          </TabPanel>

          <TabPanel>
            <StyledList>
              {contactsInfo.map((contact, id) => {
                return (
                  <li key={id}>
                    <Card direction={{ base: "column", sm: "row" }}>
                      <Stack>
                        <CardHeader>
                          <Heading size="md">{contact.name}</Heading>
                          <Text py="2">Email: {contact.email}</Text>
                          <Text py="2">Phone: {contact.phone}</Text>
                        </CardHeader>
                        <CardBody>
                          <Heading size="sm">Client</Heading>
                          <Text>Name: {contact.client.name}</Text>
                          <Text>Email: {contact.client.email}</Text>
                          <Text>Phone: {contact.client.phone}</Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </li>
                );
              })}
            </StyledList>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </GenericPageStyle>
  );
};
