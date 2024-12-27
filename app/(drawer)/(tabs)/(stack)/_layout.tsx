import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions, useNavigationState } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router"

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftPress = (canGoBack: boolean | undefined) => {
        if (canGoBack) {
            navigation.dispatch(StackActions.pop());
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer());
    };
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                headerLeft: ({ tintColor, canGoBack }) =>
                    <Ionicons name={canGoBack ? "chevron-back-circle-outline" : "menu"}
                        size={24}
                        color="black"
                        className="mr-5"
                        onPress={() => onHeaderLeftPress(canGoBack)} />,
                headerStyle: {
                    backgroundColor: "#f9f9f9",
                },
                headerTintColor: "#333",
                headerTitleStyle: {
                    fontFamily: "Parkinsans-Bold",
                },
                contentStyle: {
                    backgroundColor: "white",
                }
            }}
        >
            <Stack.Screen name="home/index" options={{
                title: "Inicio",
            }} />
            <Stack.Screen name="products/index" options={{
                title: "Productos",
            }} />
            <Stack.Screen name="profile/index" options={{
                title: "Perfil",
            }} />
            <Stack.Screen name="settings/index" options={{
                title: "Configuraciones",
            }} />
        </Stack>
    )
}

export default StackLayout