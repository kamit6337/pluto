import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import tabsLink, { notOnTab } from "@/constants/tabsLink";
import styles from "@/styles/styles";
import useFixedQuery from "@/hooks/query/fixed/useFixedQuery";

const MainLayout = () => {
  const { loading, error } = useFixedQuery();

  if (loading) {
    return <ActivityIndicator className="flex-1 justify-center items-center" />;
  }

  if (error?.message) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Tabs>
        {tabsLink.map((tab) => {
          const { id, name, route } = tab;

          if (notOnTab.includes(route)) {
            return (
              <Tabs.Screen
                key={id}
                name={route}
                options={{ href: null, headerShown: false }}
              />
            );
          }

          return (
            <Tabs.Screen
              key={id}
              name={route}
              options={{
                headerTitle: "",
                // Customize the header style (background color, height, etc.)
                headerStyle: {
                  backgroundColor: styles.backgroundColor.color, // Example: dark background
                  height: 100, // Customize header height
                },

                // Add a custom element on the left side of the header
                headerLeft: () => (
                  <Text style={{ color: "#FFF", paddingLeft: 15 }}>Pluto</Text>
                ),
                // Add a custom element on the right side of the header
                headerRight: () => (
                  <TouchableOpacity onPress={() => alert("Settings clicked!")}>
                    <Text style={{ color: "#FFF", paddingRight: 15 }}>
                      Settings
                    </Text>
                  </TouchableOpacity>
                ),
                headerShown: false,
              }}
            />
          );
        })}
      </Tabs>
    </View>
  );
};

export default MainLayout;
