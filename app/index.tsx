import { Redirect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
    return (
        <SafeAreaView>
            <Redirect href="./drawer" />
        </SafeAreaView>
    )
}

export default App