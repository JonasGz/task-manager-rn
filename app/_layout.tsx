import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { ThemeProvider } from "@emotion/react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ApolloProvider } from "@apollo/client";
import client from "@/services/graphql-service";
import TaskProvider, { TaskContext } from "@/stores/TaskStore";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode={colorScheme == "dark" ? "dark" : "light"}>
      <ThemeProvider theme={colorScheme == "dark" ? DarkTheme : DefaultTheme}>
        <ApolloProvider client={client}>
          <TaskProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          </TaskProvider>
        </ApolloProvider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
