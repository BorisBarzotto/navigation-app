import { Drawer } from "expo-router/drawer";
import React from 'react'

export default function DrawerLayout() {
  return (
    <Drawer>
        <Drawer.Screen
          name="schedule/index"
          options={{
            drawerLabel: 'Schedule',
            title: 'Calendario',
          }}
        />
        <Drawer.Screen
          name="user/index"
          options={{
            drawerLabel: 'User',
            title: 'Usuario',
          }}
        />
      </Drawer>
  )
}