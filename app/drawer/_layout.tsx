import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from 'react'

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                overlayColor: 'rgba(0, 0, 0, 0.5)',
                drawerActiveTintColor: "indigo",
                headerShadowVisible: false,
                drawerContentStyle: {
                    backgroundColor: 'white',
                }

            }
            }
        >
            <Drawer.Screen
                name="schedule/index"
                options={{
                    drawerLabel: 'Schedule',
                    drawerIcon: ({ color, size }) => <Ionicons name="calendar-outline" size={size} color={color} />,
                    title: 'Calendario',
                }}
            />
            <Drawer.Screen
                name="user/index"
                options={{
                    drawerLabel: 'User',
                    drawerIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />,
                    title: 'Usuario',
                }}
            />
        </Drawer >
    )
}