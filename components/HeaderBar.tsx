import NextLink from "next/link";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";
import ColorModeToggle from "./ColorModeToggle";

interface Props {
  navigate: string;
  NavigateIcon: IconType;
}

const HeaderBar = ({ navigate, NavigateIcon }: Props) => {
  return (
    <HStack justifyContent="space-between">
      <Text fontSize="xl">Next PWA</Text>
      <HStack>
        <NextLink href={navigate}>
          <IconButton
            variant="ghost"
            aria-label="Go To List"
            icon={<NavigateIcon />}
          />
        </NextLink>
        <ColorModeToggle />
      </HStack>
    </HStack>
  );
};

export default HeaderBar;
