import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";

import { tintColorLight } from "@/constants/Colors";
import {
  ClipboardList,
  Home,
  LayoutDashboard,
  UserPlus,
} from "lucide-react-native";
import { useTheme } from "@emotion/react";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tintColorLight,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          tabBarIcon: ({ color }) => <UserPlus color={color} />,
        }}
      />

      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <LayoutDashboard color={color} />,
        }}
      />

      <Tabs.Screen
        name="task"
        options={{
          title: "Task",
          tabBarIcon: ({ color }) => <ClipboardList color={color} />,
        }}
      />
    </Tabs>
  );
}
