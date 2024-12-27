import { Slot, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

// Import your global CSS file
import "./global.css";
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Parkinsans-Bold": require("../assets/fonts/Parkinsans-Bold.ttf"),
    "Parkinsans-Light": require("../assets/fonts/Parkinsans-Light.ttf"),
    "Parkinsans-Medium": require("../assets/fonts/Parkinsans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error("An error occurred while loading fonts", error);
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Slot />
    </GestureHandlerRootView>
  )
}

export default RootLayout