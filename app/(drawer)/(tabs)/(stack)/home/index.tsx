import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native';
import { router, useNavigation } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'

const HomeScreen = () => {

    const navigation = useNavigation();
    const onToggleDrawer = () => {
        navigation.dispatch( DrawerActions.toggleDrawer() );
    }
    return (
        <SafeAreaView>
            <View className="mx-4">
                <View className="mt-5">
                    <CustomButton
                        color="primary"
                        className={"text-zinc-700 mb-2"}
                        onPress={() => router.push('/products')}
                    >Productos
                    </CustomButton>
                    <CustomButton
                        color="secondary"
                        className={"text-zinc-700 mb-2"}
                        onPress={() => router.push('/profile')}
                    >Perfil
                    </CustomButton>
                    <CustomButton
                        color="tertiary"
                        className={"text-zinc-700 mb-2"}
                        onPress={() => router.push('/settings')}
                    >Configuraciones
                    </CustomButton>
                    <CustomButton
                    onPress={onToggleDrawer}
                    >
                        Abrir Menú
                    </CustomButton>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen