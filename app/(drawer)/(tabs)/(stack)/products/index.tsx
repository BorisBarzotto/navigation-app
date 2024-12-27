import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import { View, Text, FlatList } from 'react-native'

const ProductsScreen = () => {
    return (
        <View className='flex flex-1 items-center justify-center'>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <View className='p-4 border-b border-gray-200 w-full'>
                        <Text className="font-parkinsans-bold">{item.title}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.description}</Text>
                        <Link href={{
                            pathname: `/products/[id]`,
                            params: { id: item.id }
                            }} className='text-primary'>Ver Detalles</Link>
                    </View>
                }
            />

        </View>
    )
}

export default ProductsScreen