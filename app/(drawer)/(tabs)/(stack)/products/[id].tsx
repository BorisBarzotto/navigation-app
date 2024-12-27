import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/products.store';


const ProductScreen = () => {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    const product = products.find((product) => product.id === id);

    useEffect(() => {
        navigation.setOptions({
            title: product?.title ?? 'Producto'
        });
    }, [product]);

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