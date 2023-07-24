import React from "react";
import { Avatar, HStack, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
      <VStack align="center">
        <Avatar size="xl" src="https://i.pravatar.cc/150?img=7" />
        <p>{greeting}</p>
        <Heading color="white">{bio1}</Heading>
        <Heading color="white"> {bio2}</Heading>
      </VStack>
  </FullScreenSection>
);

export default LandingSection;
