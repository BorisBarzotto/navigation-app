import CustomButton from '@/components/shared/CustomButton'
import { router } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className="mx-4">
                <View className="mt-5">
                    <CustomButton
                        color="primary"
                        className={"text-zinc-700 mb-2"}
                        onPress={() => router.push('./products')}
                    >Productos
                    </CustomButton>
                    <CustomButton
                        color="secondary"
                        className={"text-zinc-700 mb-2"}
                        onPress={() => router.push('./profile')}
                    >Perfil
                    </CustomButton>
                    <CustomButton
                        color="tertiary"
                        className={"text-zinc-700 mb-2"}
                        onPress={() => router.push('./settings')}
                    >Configuraciones
                    </CustomButton>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen