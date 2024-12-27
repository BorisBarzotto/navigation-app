import { View, Text } from 'react-native'
import React from 'react'
import { type DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
    {...props}
    scrollEnabled={false}
    >
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
            <Text className="text-3xl font-work-black text-primary">BB</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}