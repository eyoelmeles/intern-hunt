import { Stack } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "tomato",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: (props) => {
            return (
              <View
                style={{
                  position: "relative",
                  width: "100%",
                  height: 250,
                  backgroundColor: "tomato",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    width: "90%",
                    height: 150,
                    paddingVertical: 8,
                    margin: "auto",
                    alignSelf: "center",
                    justifyContent: "space-evenly",
                    bottom: -75,
                    backgroundColor: "white",
                    shadowColor: "#000",
                    shadowOffset: { width: 4, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <View>
                      <Text>Location</Text>
                      <Text style={{ fontSize: 18, fontWeight: "500" }}>
                        Location
                      </Text>
                    </View>
                    <View
                      style={{ display: "flex", flexDirection: "row", gap: 14 }}
                    >
                      <View
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: "tomato",
                        }}
                      ></View>
                      <View
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: "tomato",
                        }}
                      ></View>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 10,
                      gap: 14,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        flex: 1,
                        borderWidth: 1,
                        borderColor: "#ccc",
                        borderRadius: 5,
                        height: "auto",
                        overflow: "hidden",
                      }}
                    >
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: "tomato",
                        }}
                      ></View>
                      <TextInput
                        placeholder="Search"
                        style={{ width: "auto" }}
                      />
                    </View>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "tomato",
                      }}
                    ></View>
                  </View>
                </View>
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
