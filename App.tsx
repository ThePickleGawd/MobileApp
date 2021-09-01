import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Box,
  Center,
  Heading,
  NativeBaseProvider,
  HStack,
  VStack,
  Flex,
  Divider,
  Icon,
  Stack,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeAreaTop flex={1} backgroundColor="lightblue">
        <Center>
          <Heading>Mobile App</Heading>
        </Center>
        <Stack flex={1} space={3}>
          <Flex direction="row" flex={1}>
            <Box backgroundColor="red" rounded="lg" flex={1}></Box>
            <Box backgroundColor="blue" rounded="lg" flex={1}></Box>
          </Flex>
          <Flex direction="row" flex={1}>
            <Box backgroundColor="green" rounded="lg" flex={1}></Box>
            <Box backgroundColor="purple" rounded="lg" flex={1}></Box>
          </Flex>
        </Stack>
      </Box>
    </NativeBaseProvider>
  );
}
