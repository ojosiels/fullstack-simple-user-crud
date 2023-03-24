import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

import GenericPageStyle from "../../styles/GenericPageStyle";

import { Link } from "react-router-dom";

import { RegisterClient, RegisterContact } from "./forms";

export default () => {
  return (
    <GenericPageStyle>
      <Tabs variant="unstyled">
        <TabList className="tabNavBar">
          <div>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Clients</Tab>
            <Tab _selected={{ color: "white", bg: "green.500" }}>Contacts</Tab>
          </div>
          <Link to={"/"} className="linkItem">
            List
          </Link>
        </TabList>

        <TabPanels>
          <TabPanel>
            <RegisterClient />
          </TabPanel>

          <TabPanel>
            <RegisterContact />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </GenericPageStyle>
  );
};
