import { Stack, Tabs } from "expo-router";
import { TextInput, View, Text } from "react-native";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" />
      <Tabs.Screen name="profile" />
    </Stack>
  );
}
