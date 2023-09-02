import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center">
      <Text className="w-80 text-center text-gray-200 text-2xl font-bold leading-loose">
        Sua capsula do tempo
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}
