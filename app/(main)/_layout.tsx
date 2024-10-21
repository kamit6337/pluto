import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const MainLayout = () => {
  return (
    <View className="flex-1">
      <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="movie" options={{ headerShown: false }} />
      </Tabs>
    </View>
  );
};

export default MainLayout;
