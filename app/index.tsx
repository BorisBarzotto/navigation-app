import { Redirect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
    return (
        <SafeAreaView>
            <Redirect href="./home" />
        </SafeAreaView>
    )
}

export default App