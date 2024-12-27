import { Link, Redirect } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
    return (
        <SafeAreaView>
            <Redirect href="./tabs" />
        </SafeAreaView>
    )
}

export default App