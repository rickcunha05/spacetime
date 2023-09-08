import { styled } from 'nativewind'
import { StatusBar } from 'expo-status-bar'
import * as SecureStore from 'expo-secure-store'
import { ImageBackground } from 'react-native'
import blurBg from '../src/assets/bg_blur.png'
import Stripes from '../src/assets/stripes.svg'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect, useState } from 'react'

export default function Layout() {
  const StyledStripes = styled(Stripes)

  const [isUserAuthenticated, setIsUserAuthenticate] = useState<null | boolean>(
    null,
  )
  useEffect(() => {
    SecureStore.getItemAsync('token').then((token) => {
      console.log(!!token)
      setIsUserAuthenticate(!!token)
    })
  }, [])

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })
  if (!hasLoadedFonts) {
    return SplashScreen.hideAsync()
  }

  return (
    <ImageBackground
      source={blurBg}
      className=" relative  flex-1  bg-gray-900 "
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className=" absolute left-2" />
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="memories" />
        <Stack.Screen name="new" />
      </Stack>
    </ImageBackground>
  )
}
