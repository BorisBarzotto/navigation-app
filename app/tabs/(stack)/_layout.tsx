import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack
        screenOptions={{
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: "#f9f9f9",
            },
            headerTintColor: "#333",
            headerTitleStyle: {
                fontFamily: "Parkinsans-Bold",
            },
            contentStyle:{
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