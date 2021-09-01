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
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeAreaTop alignItems="center" flex={1} backgroundColor="lightblue">
        <Heading>Mobile App</Heading>
        <VStack space={3}>
          <HStack justifyContent="space-between">
            <Text>Simon Mignolet</Text>
            <Text>Test</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Nathaniel Clyne</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Dejan Lovren</Text>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
