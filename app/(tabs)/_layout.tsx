import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useColorScheme } from "react-native";

import ExploreScreen from "../contact";
import IndexScreen from "../index";

const BottomTab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName="Index" screenOptions={{}}>
      <BottomTab.Screen
        name="Index"
        component={IndexScreen}
        options={{ title: "Home" }}
      />
      <BottomTab.Screen
        name="contact"
        component={ExploreScreen}
        options={{ title: "Explore" }}
      />
    </BottomTab.Navigator>
  );
}
