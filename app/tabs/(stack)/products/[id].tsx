import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from '@/store/products.store';


const ProductScreen = () => {
    const { id } = useLocalSearchParams();

    const product = products.find((product) => product.id === id);

    if (!product) {
       return <Redirect href="/" />;
    }

    return (
        <View className='p-4'>
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
            <Text>{product.description}</Text>
        </View>
    )
}

export default ProductScreen